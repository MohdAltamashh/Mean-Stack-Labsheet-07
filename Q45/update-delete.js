use college
// Update one student's marks
db.students.updateOne({name:"Aarav Singh"},{$set:{marks:86}})
// Increase marks for all MCA students
db.students.updateMany({course:"MCA"},{$inc:{marks:2}})
// Replace one complete document
db.students.replaceOne({name:"Rohan Verma"},{name:"Rohan Verma",course:"MCA",city:"Jaipur",marks:70})
// Delete one document
db.students.deleteOne({name:"Dev Patel"})
// Delete all students from a chosen city (demonstration)
db.students.deleteMany({city:"Kolkata"})
// Display final collection
db.students.find().pretty()
