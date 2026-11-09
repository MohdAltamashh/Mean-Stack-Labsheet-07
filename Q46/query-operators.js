use college
// Greater than / less than
db.students.find({marks:{$gt:70}})
db.students.find({marks:{$lt:60}})
// In operator
db.students.find({course:{$in:["MCA","BCA"]}})
// AND and OR
db.students.find({$and:[{city:"Jaipur"},{marks:{$gt:70}}]})
db.students.find({$or:[{city:"Delhi"},{marks:{$gt:90}}]})
// Regular expression
db.students.find({name:{$regex:"^A",$options:"i"}})
// Sorting, limit and skip
db.students.find().sort({name:1}).limit(5)
db.students.find().skip(5).limit(5)
// Projection: show name and marks, hide _id
db.students.find({}, {name:1,marks:1,_id:0})
// Lab example: Jaipur students with marks above 70, sorted by name
db.students.find({city:"Jaipur",marks:{$gt:70}}).sort({name:1})
