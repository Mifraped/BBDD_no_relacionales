const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/codenotch", {useNewUrlParser: false, useUnifiedTopology: false})

// const teachersSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     groups: [String]
// })

// const subjectsSchema = new mongoose.Schema({
//     title: String,
//     teachers: [teachersSchema]
// })

// const marksSchema = new mongoose.Schema({
//     date: Date,
//     mark: Number,
//     subject : subjectsSchema
// })

// const studentsSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     mark: [marksSchema]
// })

// let teacherModel = new mongoose.model("Teacher", teachersSchema)
// let subjectModel = new mongoose.model("Subject", subjectsSchema)
// let markModel = new mongoose.model("Mark", marksSchema)
// let studentModel = new mongoose.model("Student", studentsSchema)

// let teacher1 = new teacherModel({
//     firstName: "Cesar",
//     lastName: "Tejedor",
//     groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
// })
// let teacher2 = new teacherModel({
//     firstName: "Carmen",
//     lastName: "Puertas",
//     groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
// })
// let teacher3 = new teacherModel({
//     firstName: "Gabriel",
//     lastName: "Plata",
//     groups: ["Full-stack remoto mañana", "Full-stack remoto tarde"]
// })
// let teacher4 = new teacherModel({
//     firstName: "Soledad",
//     lastName: "Arroyo",
//     groups: ["Full-stack remoto mañana", "Full-stack remoto tarde"]
// })

// let subject1 = new subjectModel({
//     title: "Javascript",
//     teachers: [teacher1, teacher2]
// })
// let subject2 = new subjectModel({
//     title: "Angular",
//     teachers: [teacher3]
// })
// let subject3 = new subjectModel({
//     title: "Maquetacion",
//     teachers: [teacher4]
// })

// let mark1 = new markModel({
//     date: new Date("2023, 11, 29"),
//     mark: 7,
//     subject: subject1
// })
// let mark2 = new markModel({
//     date: new Date("2023, 11, 25"),
//     mark: 9,
//     subject: subject2
// })
// let mark3 = new markModel({
//     date: new Date("2023, 11, 20"),
//     mark: 4,
//     subject: subject3
// })
// let mark4 = new markModel({
//     date: new Date("2023, 11, 29"),
//     mark: 3,
//     subject: subject1
// })
// let mark5 = new markModel({
//     date: new Date("2023, 11, 29"),
//     mark: 5,
//     subject: subject1
// })
// let mark6 = new markModel({
//     date: new Date("2023, 11, 29"),
//     mark: 10,
//     subject: subject1
// })

// let student1 = new studentModel({
//     firstName: "Antonio",
//     lastName: "De Padua",
//     mark: [mark1, mark2, mark3]
// })
// let student2 = new studentModel({
//     firstName: "Jaime",
//     lastName: "Fraguas",
//     mark: [mark4]
// })
// let student3 = new studentModel({
//     firstName: "Juan",
//     lastName: "Muñoz",
//     mark: [mark5]
// })
// let student4 = new studentModel({
//     firstName: "Manuel",
//     lastName: "Rebollo",
//     mark: [mark6]
// })

// studentModel.insertMany([student1, student2, student3, student4])
// .then(() => {
//     console.log("Datos insertados")
//     mongoose.disconnect()
// }).catch(error => console.log(error))

//**************************************************************************************************************************************** */

const teachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

const subjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [teachersSchema]
})

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject : subjectsSchema
})

const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mark: [marksSchema]
})

let studentModel = new mongoose.model("Student", studentsSchema)

let alumno1 = new studentModel({
    firstName: "Antonio",
    lastName: "De Padua",
    mark:[
        {
            date: new Date("2023, 11, 29"),
            mark: 7,
            subject: {
                title: "Javascript",
                teachers:[
                    {
                        firstName: "Cesar",
                        lastName: "Tejedor",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    },
                    {
                        firstName: "Carmen",
                        lastName: "Puertas",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    }
                ]
            }
        },
        {
            date: new Date("2023, 11, 25"),
            mark: 9,
            subject: {
                title: "Angular",
                teachers:[
                    {
                        firstName: "Gabriel",
                        lastName: "Plata",
                        groups: ["Full-stack presencial mañana", "Full-stack remoto tarde"]
                    }
                ]
            }
        },
        {
            date: new Date("2023, 11, 20"),
            mark: 4,
            subject: {
                title: "Maquetacion",
                teachers:[
                    {
                        firstName: "Soledad",
                        lastName: "Arroyo",
                        groups: ["Full-stack presencial mañana", "Full-stack remoto mañana"]
                    }
                ]
            }
        }
    ]
})

let alumno2 = new studentModel({
    firstName: "Jaime",
    lastName: "Fraguas",
    mark:[
        {
            date: new Date("2023, 11, 29"),
            mark: 3,
            subject: {
                title: "Javascript",
                teachers:[
                    {
                        firstName: "Cesar",
                        lastName: "Tejedor",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    },
                    {
                        firstName: "Carmen",
                        lastName: "Puertas",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    }
                ]
            }
        }
    ]
})

let alumno3 = new studentModel({
    firstName: "Juan",
    lastName: "Muñoz",
    mark:[
        {
            date: new Date("2023, 11, 29"),
            mark: 5,
            subject: {
                title: "Javascript",
                teachers:[
                    {
                        firstName: "Cesar",
                        lastName: "Tejedor",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    },
                    {
                        firstName: "Carmen",
                        lastName: "Puertas",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    }
                ]
            }
        }
    ]
})

let alumno4 = new studentModel({
    firstName: "Manuel",
    lastName: "Rebollo",
    mark:[
        {
            date: new Date("2023, 11, 29"),
            mark: 10,
            subject: {
                title: "Javascript",
                teachers:[
                    {
                        firstName: "Cesar",
                        lastName: "Tejedor",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    },
                    {
                        firstName: "Carmen",
                        lastName: "Puertas",
                        groups: ["Full-stack presencial mañana", "Full-stack presencial tarde"]
                    }
                ]
            }
        }
    ]
})

//*************************************************INSERTAR ALUMNOS**********************/

// studentModel.insertMany([alumno1, alumno2, alumno3, alumno4])
// .then(() => {
//     console.log("Guardado correctamente")
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//*************************************************NOTAS DE UN ALUMNO******************************************************/

// studentModel.find({"$and": [{"firstName": "Antonio"}, {"lastName": "De Padua"}]}, {"mark": 1, "_id": 0})
// .then(result => {
//     for(nota res of result[0].mark){
//         console.log(nota);
//     }
//     mongoose.disconnect()
// })
// .catch(err => console.log(err))

//**************************************************ASIGNATURAS DE UN ALUMNO***************************************************/

// studentModel.find({"$and": [{"firstName": "Antonio"}, {"lastName": "De Padua"}]}, {"mark": 1, "_id": 0})
// .then(result => {
//     for(let nota of result[0].mark){
//         console.log(nota.subject);
//     }
//     mongoose.disconnect()
// })
// .catch(err => console.log(err))

//****************************************************PROFESORES DE UN ALUMNO************************************/

studentModel.find({"$and": [{"firstName": "Antonio"}, {"lastName": "De Padua"}]}, {"mark": 1, "_id": 0})
.then(result => {
    for(let nota of result[0].mark){
        for(let prof of nota.subject.teachers){
            console.log(prof)
        }
    }
    mongoose.disconnect()
})
.catch(err => console.log(err))