const profesionalModel = require("../models/profesional")

const getProfesional = (req, res) => {

    let respuesta

    if(!(req.query.name && req.query.lastName)){
        profesionalModel.find({})
        .then(result => {
            if(result.length == 0){
                respuesta = {error: true, codigo: 200, message: "No hay profesionales para mostrar", data: result}
            }else{
                respuesta = {error: false, codigo: 200, message: "Enviando profesionales", data: result}
            }
            res.send(respuesta)
            console.log(result)
        }).catch(err =>{
            console.log(err)
            res.send(err)
        })
    }else{
        profesionalModel.find({"$and": [{"name": req.query.name}, { "lastName": req.query.lastName}]})
        .then(result => {
            if(result.length == 0){
                respuesta = {error: true, codigo: 200, message: "Profesional no encontrado", data: result}
            }else{
                respuesta = {error: false, codigo: 200, message: "Enviando profesional", data: result}
            }
            res.send(respuesta)
            console.log(result)
        }).catch(err => console.log(err))
    }
}

const postProfesional = (req, res) => {

    let profesional = new profesionalModel({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality,
        oscarsNumber: req.body.oscarsNumber,
        profession: req.body.profession
    })

    profesional.save()
    .then(result => {
        res.send({error: false, codigo:200, message: "Profesional guardado", data: result})
        console.log(result)
    }).catch(err => console.log(err))
}

const putProfesional = (req, res) => {
    profesionalModel.updateOne({name: req.body.name, lastName: req.body.lastName}, {age: req.body.age, isRetired: req.body.isRetired, nationality: req.body.nationality, oscarsNumber: req.body.oscarsNumber, profession: req.body.profession})
    .then(result => {
        let respuesta
        if(result.modifiedCount > 0){
            respuesta = {error: false, codigo: 200, message: "Modificado correctamente", data: result}
        }else{
            respuesta = {error: true, codigo: 200, message: "No se encontro el profesional", data: result}
        }
        res.send(respuesta)
        console.log(result);
    }).catch(err => console.log(err))
}

const deleteProfesional = (req, res) => {
    profesionalModel.deleteOne({name: req.body.name, lastName: req.body.lastName})
    .then(result => {
        let respuesta
        if(result.deletedCount > 0){
            respuesta = {error: false, codigo: 200, message: "Profesional borrado", data: result}
        }else{
            respuesta = {error: true, codigo: 200, message: "No se encontro al profesional", data: result}
        }
        res.send(respuesta)
        console.log(result)
    }).catch(err => console.log(err))
}

module.exports = {getProfesional, postProfesional, putProfesional, deleteProfesional}