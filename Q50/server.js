const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
const PORT = 3000;
const client = new MongoClient("mongodb://127.0.0.1:27017");
let students;
app.use(express.json());

app.get("/api/students", async (req,res) => {
  try { res.json(await students.find().toArray()); }
  catch (e) { res.status(500).json({error:e.message}); }
});
app.get("/api/students/:id", async (req,res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({error:"Invalid ID"});
    const item = await students.findOne({_id:new ObjectId(req.params.id)});
    if (!item) return res.status(404).json({error:"Student not found"});
    res.json(item);
  } catch(e) { res.status(500).json({error:e.message}); }
});
app.post("/api/students", async (req,res) => {
  try {
    const {name,course,city,marks} = req.body;
    if (!name || !course || !city || !Number.isFinite(Number(marks))) return res.status(400).json({error:"name, course, city and numeric marks are required"});
    const result = await students.insertOne({name,course,city,marks:Number(marks)});
    res.status(201).json({_id:result.insertedId,name,course,city,marks:Number(marks)});
  } catch(e) { res.status(500).json({error:e.message}); }
});
app.put("/api/students/:id", async (req,res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({error:"Invalid ID"});
    const {name,course,city,marks} = req.body;
    const update = {};
    if (name !== undefined) update.name = name;
    if (course !== undefined) update.course = course;
    if (city !== undefined) update.city = city;
    if (marks !== undefined) update.marks = Number(marks);
    const result = await students.updateOne({_id:new ObjectId(req.params.id)},{$set:update});
    if (!result.matchedCount) return res.status(404).json({error:"Student not found"});
    res.json({message:"Student updated",modifiedCount:result.modifiedCount});
  } catch(e) { res.status(500).json({error:e.message}); }
});
app.delete("/api/students/:id", async (req,res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({error:"Invalid ID"});
    const result = await students.deleteOne({_id:new ObjectId(req.params.id)});
    if (!result.deletedCount) return res.status(404).json({error:"Student not found"});
    res.json({message:"Student deleted"});
  } catch(e) { res.status(500).json({error:e.message}); }
});

async function start() {
  try {
    await client.connect();
    students = client.db("college").collection("students");
    app.listen(PORT, () => console.log(`Student API running at http://localhost:${PORT}`));
  } catch (e) {
    console.error("Could not connect to MongoDB:", e.message);
    process.exit(1);
  }
}
start();
process.on("SIGINT", async () => { await client.close(); process.exit(0); });
