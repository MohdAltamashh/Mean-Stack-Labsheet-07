const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
async function run() {
  try {
    await client.connect();
    const collection = client.db("college").collection("students");
    const created = await collection.insertOne({name:"CRUD Demo",course:"MCA",city:"Saharanpur",marks:75});
    console.log("CREATE:", created.insertedId);
    console.log("READ:", await collection.findOne({_id:created.insertedId}));
    const updated = await collection.updateOne({_id:created.insertedId},{$set:{marks:90}});
    console.log("UPDATE:", updated.modifiedCount);
    const deleted = await collection.deleteOne({_id:created.insertedId});
    console.log("DELETE:", deleted.deletedCount);
  } catch (err) {
    console.error("CRUD error:", err.message);
  } finally {
    await client.close();
  }
}
run();
