const mongoose = require("mongoose")
const photosModel = require("./photosMDB")

const postPhoto = (nombre_usuario, url, titulo, descripcion) => {
    let data = {
        nombre_usuario: nombre_usuario,
        url: url,
        titulo: titulo,
        descripcion: descripcion
    }

    photosModel.create(data)
    .then(() => {
        console.log(data)
        mongoose.disconnect()
    }).catch(error => {
        console.log(error);
    })
}

const getAllPhotos = (nombre_usuario) => {

    photosModel.find({nombre_usuario: nombre_usuario})
    .then(items => {
        console.log(items)
        mongoose.disconnect()
    }).catch(err => console.log(err))

}

const putPhoto = (titulo, descripcion) => {

    photosModel.updateOne({titulo: titulo}, {descripccion: descripcion})
    .then(data => {
        console.log("Modificado correctamente")
        console.log(data)
        mongoose.disconnect()
    }).catch(error => console.log(error))

}

const deleteOnePhoto = (nombre_usuario, titulo) => {

    photosModel.deleteOne({nombre_usuario: nombre_usuario, titulo: titulo})
    .then(data => {
        console.log("Eliminado correctamente");
        console.log(data)
        mongoose.disconnect()
    }).catch(error => console.log(error))

}

const deleteAllPhotos = (nombre_usuario) => {

    photosModel.deleteMany({nombre_usuario: nombre_usuario})
    .then(data => {
        console.log("Eliminado correctamente")
        console.log(data)
    }).catch(error => console.log(error))

}

module.exports = {postPhoto, getAllPhotos, putPhoto, deleteOnePhoto, deleteAllPhotos}