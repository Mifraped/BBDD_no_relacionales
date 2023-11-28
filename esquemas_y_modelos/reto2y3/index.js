const mongoose = require("mongoose")
// const User = require("./userMDB")
// const Profile = require("./profileMDB")
// const Credentials = require("./credentialsMDB")
const models = require("./modelos")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/", {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new models.userModel({
    login: "PepePerez",
    password: "pepepassword"
})

const profileDocument = new models.profileModel({
    name: "Julian",
    surname: "Perez",
    dateOfBirth: "07/09/1984",
    comments: "Nada que comentar",
    rol: "Admin"
})

let credentialsDocument = new models.credentialsModel({
    address: "C/ Ferrol, 17",
    phone: 3230721,
    email: "email@gmail.es"
})

userDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

profileDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

credentialsDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})