const mongoose = require("mongoose")
const esquemas = require("./esquemas")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/", {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new esquemas.userEsquema({
    login: "PepePerezzz",
    password: "pepepassword"
})

const profileDocument = new esquemas.profileEsquema({
    name: "Julian",
    surname: "Perez",
    dateOfBirth: "07/09/1984",
    comments: "Nada que comentar",
    rol: "Admin"
})

let credentialsDocument = new esquemas.credentialsEsquema({
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