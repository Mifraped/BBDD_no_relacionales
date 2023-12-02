const photosModel = require("../models/photo")

const getPhoto = (req, res) => {

    photosModel.find({nombre_usuario: req.query.nombre_usuario})
    .then(result => {
        let respuesta
        if(result.length == 0){
            respuesta = {error: true, codigo: 200, message: "Usuario no encontrado"}
        }else{
            respuesta = {error: false, codigo: 200, message: "Enviando fotos", data: result}
        }
        res.send(respuesta)
        console.log(result)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

const postPhoto = (req, res) => {

    let photo = new photosModel({
        nombre_usuario: req.body.nombre_usuario,
        url: req.body.url,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
    })

    photo.save()
    .then(result => {
        res.send({error: false, codigo: 200, message: "Foto guardada", data: result})
        console.log(result)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

const putPhoto = (req, res) => {

    photosModel.updateOne({titulo: req.body.titulo}, {descripcion: req.body.descripcion})
    .then(result => {
        let respuesta
        if(result.modifiedCount > 0){
            respuesta = {error: false, codigo: 200, message: "Foto modificada", data: result}
        }else{
            respuesta = {error: true, codigo: 200, message: "No se encontro la foto", data: result}
        }
        res.send(respuesta)
        console.log(result)
    }).catch(err => {
        res.send(err)
        console.log(err)
    })
}

const deletePhoto = (req, res) => {

    if(!req.body.titulo){
        
        photosModel.deleteMany({nombre_usuario: req.body.nombre_usuario})
    .then(result => {
        let respuesta
        if(result.deletedCount > 0){
            respuesta = {error: false, codigo: 200, message: "Fotos eliminadas", data: result}
        }else{
            respuesta = {error: true, codigo: 200, message: "No se pudieron eliminar las fotos", data: result}
        }
        res.send(respuesta)
        console.log(result)
    }).catch(error => {
        res.send(result)
        console.log(error)
    })
    }else{
        photosModel.deleteOne({nombre_usuario: req.body.nombre_usuario, titulo: req.body.titulo})
    .then(result => {
        let respuesta
        if(result.deletedCount > 0){
            respuesta = {error: false, codigo: 200, message: "Foto eliminada", data: result}
        }else{
            respuesta = {error: true, codigo: 200, message: "No se pudo eliminar la foto", data: result}
        }
        res.send(respuesta)
        console.log(result)
    }).catch(err => {
        res.send(err)
        console.log(err)
    })
    }
}

module.exports = {getPhoto, postPhoto, putPhoto, deletePhoto}