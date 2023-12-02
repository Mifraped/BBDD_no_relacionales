const {Schema, model} = require("mongoose")

const photosSchema = new Schema({
    nombre_usuario: String,
    url: {
        type: String,
        required: true
    },
    titulo: String,
    descripcion: String
})

module.exports = model("Photo", photosSchema)