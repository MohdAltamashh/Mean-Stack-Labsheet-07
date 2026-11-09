const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("college");
    const students = db.collection("students");
    const insertResult = await students.insertOne({
      name: "Driver Demo", course: "MCA", city: "Saharanpur", marks: 80
    });
    console.log("Inserted ID:", insertResult.insertedId);
    const allStudents = await students.find().toArray();
    console.log("Students:", allStudents);
  } catch (error) {
    console.error("MongoDB error:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}
main();
