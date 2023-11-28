const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        validate: [password => password.length >= 6, "El password debe ser minimo de 6 caracteres"]
    }
})

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    comments: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ["Admin", "User"]
    }
})

const credentialsSchema = mongoose.Schema({
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.pre("save", function(next){
    console.log("Middleware de entrada")
    if(this.login.length > 10){
        console.log("Tu login tiene mas de 10 caracteres")
        next()
    }else console.log("Tienes que introducir mas de 10 caracteres")
})

let userModel = mongoose.model("User", userSchema, "user")
let profileModel = mongoose.model("Profile", profileSchema, "profile")
let credentialsModel = mongoose.model("Credentials", credentialsSchema, "credentials")

module.exports = {userModel, profileModel, credentialsModel}