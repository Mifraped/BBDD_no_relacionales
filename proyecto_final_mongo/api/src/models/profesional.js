const {Schema,model} = require("mongoose")

const profesionalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isRetired: {
        type: Boolean,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    oscarsNumber: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
})

module.exports = model("Profesional", profesionalSchema, "profesional")