const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/codenotch")

//*********************************************** ESCENARIO ************************************************************************/

const teachersSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
})

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teachersSchema]
})

const teachersModel = new mongoose.model("Teacher", teachersSchema)
const marksModel = new mongoose.model("Mark", marksSchema)

let teacher1 = new teachersModel({
    teacher_first_name: "Paco",
    teacher_last_name: "Bueno"
})
let teacher2 = new teachersModel({
    teacher_first_name: "Maria Jose",
    teacher_last_name: "Requena"
})
let teacher3 = new teachersModel({
    teacher_first_name: "Juan Pablo",
    teacher_last_name: "Dominguez"
})
let teacher4 = new teachersModel({
    teacher_first_name: "Escolastica",
    teacher_last_name: "Ramirez"
})
let teacher5 = new teachersModel({
    teacher_first_name: "Ines",
    teacher_last_name: "Rubio"
})

let mark1 = new marksModel({
    date: new Date(2023, 11, 30),
    mark: 6,
    student_first_name: "Ricardo",
    student_last_name: "Rubio",
    group_name: "Full-stack presencial",
    subject_name: "Mongo",
    teachers: [teacher1, teacher2]
})
let mark2 = new marksModel({
    date: new Date(2023, 11, 30),
    mark: 9,
    student_first_name: "Justino",
    student_last_name: "Castaña",
    group_name: "Full-stack presencial",
    subject_name: "Mongo",
    teachers: [teacher1, teacher2]
})
let mark3 = new marksModel({
    date: new Date(2023, 11, 30),
    mark: 3,
    student_first_name: "David",
    student_last_name: "Gamboa",
    group_name: "Full-stack presencial",
    subject_name: "Mongo",
    teachers: [teacher1, teacher2]
})
let mark4 = new marksModel({
    date: new Date(2023, 11, 28),
    mark: 10,
    student_first_name: "Olalla",
    student_last_name: "Garcia",
    group_name: "Full-stack remoto",
    subject_name: "Javascript",
    teachers: [teacher3, teacher4]
})
let mark5 = new marksModel({
    date: new Date(2023, 11, 28),
    mark: 7,
    student_first_name: "Daniel",
    student_last_name: "Perez",
    group_name: "Full-stack remoto",
    subject_name: "Javascript",
    teachers: [teacher3, teacher4]
})
let mark6 = new marksModel({
    date: new Date(2023, 11, 28),
    mark: 2,
    student_first_name: "Diego Emilio",
    student_last_name: "Lopez",
    group_name: "Full-stack remoto",
    subject_name: "Javascript",
    teachers: [teacher3, teacher4]
})
let mark7 = new marksModel({
    date: new Date(2023, 11, 27),
    mark: 1,
    student_first_name: "David",
    student_last_name: "Toledo",
    group_name: "Front presencial",
    subject_name: "HTML",
    teachers: [teacher1, teacher5]
})
let mark8 = new marksModel({
    date: new Date(2023, 11, 27),
    mark: 4,
    student_first_name: "Diego",
    student_last_name: "Pontones",
    group_name: "Front presencial",
    subject_name: "HTML",
    teachers: [teacher1, teacher5]
})
let mark9 = new marksModel({
    date: new Date(2023, 11, 27),
    mark: 8,
    student_first_name: "Eduardo",
    student_last_name: "Garcia",
    group_name: "Front presencial",
    subject_name: "HTML",
    teachers: [teacher1, teacher5]
})
let mark10 = new marksModel({
    date: new Date(2023, 11, 27),
    mark: 5,
    student_first_name: "Veronica",
    student_last_name: "Sanz",
    group_name: "Front presencial",
    subject_name: "HTML",
    teachers: [teacher1, teacher5]
})
let mark11 = new marksModel({
    date: new Date(2023, 11, 30),
    mark: 8,
    student_first_name: "Ricardo",
    student_last_name: "Rubio",
    group_name: "Full-stack presencial",
    subject_name: "Mongo",
    teachers: [teacher1, teacher2]
})
let mark12 = new marksModel({
    date: new Date(2023, 11, 30),
    mark: 9,
    student_first_name: "Ricardo",
    student_last_name: "Rubio",
    group_name: "Full-stack presencial",
    subject_name: "Mongo",
    teachers: [teacher1, teacher2]
})

// marksModel.insertMany([mark11, mark12])
// .then(() => {
//     console.log("Datos insertados")
//     mongoose.disconnect()
// }).catch(error => console.log(error))

//*************************************************** RETO1 *********************************************************************/

//NOTA MEDIA ALUMNOS

// marksModel.aggregate([{$group: {"_id": null, "Nota media":{"$avg": "$mark"}}}])
// .then(res => {
//     console.log(...res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//NUMERO TOTAL ALUMNOS

// marksModel.aggregate([{"$count": "Numero de alumnos"}])
// .then(res => {
//     console.log(...res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//NOMBRE Y APELLIDOS DE TODOS LOS ALUMNOS

// marksModel.aggregate([{"$project": {student_first_name: 1, student_last_name: 1, _id: 0}}])
// .then(res => {
//     console.log(...res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//NOMBRE Y APELLIDOS PROFESORES

// marksModel.aggregate([{"$unwind": "$teachers"}])
// .then(res => {
//     for(let elem of res){
//         console.log(elem.teachers);
//     }
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//NUMERO TOTAL DE ALUMNOS POR GRUPO ORDENADOS POR GRUPO ORDEN INVERSO

// marksModel.aggregate([{
//         $group: {"_id": {"Grupo": "$group_name"}, "Numero alumnos": {"$sum": 1}}
//     },
//     {
//         $project: {"_id": 0, "Grupo": "$_id.Grupo", "Numero alumnos": 1}
//     },
//     {
//         $sort: {"Grupo": -1}
//     }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//TOP 5 ASIGNATURAS CUYA NOTA MEDIA > 5

// marksModel.aggregate([{
//         $group: {"_id": {"Asignatura": "$subject_name"}, "Nota media": {"$avg": "$mark"}}
//     },
//     {
//         $project: {"_id": 0, "Asignatura": "$_id.Asignatura", "Nota media": 1}
//     },
//     {
//         $match: {"Nota media": {"$gt": 5}}
//     },
//     {
//         $limit: 5
//     }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//NUMERO DE PROFESORES POR ASIGNATURA

// marksModel.aggregate([{
//         $unwind: "$teachers"
//     },
//     {
//         $project: {"_id": 0, "Asignatura": "$subject_name", "Profesor": {"$concat": ["$teachers.teacher_first_name", " ", "$teachers.teacher_last_name"]}}
//     },
//     {
//         $group: {"_id": {"Asignatura": "$Asignatura"}, "Numero profesores": {$sum: 1}}
//     }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//************************************************* RETO 2 ***************************************************/

// 1 -------------------------

// marksModel.aggregate([{
//     $match: {"$or": [{mark: {"$gt": 8}}, {date: {"$lt": new Date("2020-12-31")}}]}
// },
// {
//     $project: {"_id": 0, "Alumno": {"$concat": ["$student_first_name", " ", "$student_last_name"]}, "Nota": "$mark", "Fecha": "$date"}
// }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

// 2 --------------------------------

// marksModel.aggregate([{
//     $match: {date: {"$gt": new Date("2022, 12, 31")}}
// },
// {
//     $project: {"_id": 0, "Asignatura": "$subject_name", "mark": 1}
// },
// {
//     $group: {"_id": {"Asignatura": "$Asignatura"}, "Nota media": {"$avg": "$mark"}}
// },
// {
//     $project: {"_id": 0, "Asignatura": "$_id.Asignatura", "Nota media": 1}
// }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

// 3 -------------------------------------------

// marksModel.aggregate([{
//     $match: {date: {"$gt": new Date("2022, 12, 31")}}
// },
// {
//     $project: {"_id": 0, "Alumno": {"$concat":["$student_first_name", " ", "$student_last_name"]}, "mark": 1}
// },
// {
//     $group: {"_id": {"Alumno": "$Alumno"}, "Nota media": {"$avg": "$mark"}}
// },
// {
//     $project: {"_id": 0, "Alumno": "$_id.Alumno", "Nota media": 1}
// }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

// 4 ---------------------------------------------------

// marksModel.aggregate([{
//     $unwind: "$teachers"
// },
// {
//     $match: {"$and": [{"teachers.teacher_first_name": "Maria Jose"}, {"teachers.teacher_last_name": "Requena"}]}
// },
// {
//     $project: {"_id": 0, "Alumno": {"$concat": ["$student_first_name", " ", "$student_last_name"]}, "Asignaturas": "$subject_name", "Profesor": {"$concat": ["$teachers.teacher_first_name", " ", "$teachers.teacher_last_name"]}}
// },
// {
//     $group: {"_id": {"Alumno": "$Alumno", "Profesor": "$Profesor"}, "Asignaturas": {"$sum": 1}}
// },
// {
//     $project: {"_id": 0, "Alumno": "$_id.Alumno", "Asignaturas": 1, "Profesor": "$_id.Profesor"}
// }
// ]).then(res => {
//     console.log(res)
//     mongoose.disconnect()
// }).catch(err => console.log(err))