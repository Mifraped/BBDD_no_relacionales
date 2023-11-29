const mongoose = require("mongoose")

const photosSchema = new mongoose.Schema({

    nombre_usuario: String,
    url: {
        type: String,
        required: true
    },
    titulo: String,
    descripccion: String
})

module.exports = mongoose.model("Photos", photosSchema, "photos")