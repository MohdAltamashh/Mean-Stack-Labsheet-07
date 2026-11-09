use college
// Average marks per course
db.students.aggregate([
 {$group:{_id:"$course",averageMarks:{$avg:"$marks"},totalStudents:{$sum:1}}},
 {$sort:{averageMarks:-1}}
])
// Number of students per city
db.students.aggregate([
 {$group:{_id:"$city",studentCount:{$sum:1}}},
 {$sort:{studentCount:-1}}
])
// Top 3 scorers
db.students.aggregate([
 {$sort:{marks:-1}},
 {$limit:3},
 {$project:{_id:0,name:1,course:1,marks:1}}
])
