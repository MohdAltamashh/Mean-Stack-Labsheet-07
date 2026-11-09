use college
db.students.insertOne({name:"Aarav Singh",course:"MCA",city:"Jaipur",marks:82})
db.students.insertMany([
{name:"Sara Khan",course:"BCA",city:"Delhi",marks:91},
{name:"Rohan Verma",course:"MCA",city:"Jaipur",marks:68},
{name:"Ananya Gupta",course:"BCA",city:"Mumbai",marks:74},
{name:"Kabir Ali",course:"MCA",city:"Delhi",marks:88},
{name:"Meera Joshi",course:"BSc",city:"Jaipur",marks:79},
{name:"Ishaan Roy",course:"BCA",city:"Kolkata",marks:65},
{name:"Priya Das",course:"MCA",city:"Mumbai",marks:95},
{name:"Dev Patel",course:"BSc",city:"Ahmedabad",marks:57},
{name:"Nisha Khan",course:"MCA",city:"Delhi",marks:72},
{name:"Arjun Sen",course:"BCA",city:"Jaipur",marks:84}
])
db.students.find()
db.students.findOne()
db.students.find().pretty()
