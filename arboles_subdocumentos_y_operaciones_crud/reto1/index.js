const mongoose = require("mongoose")
const photosModel = require("./photosMDB")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/", {useNewUrlParser: false, useUnifiedTopology: false})

let photosDocument1 = new photosModel({
    nombre_usuario: "Antonio",
    url: "https://www.nationalgeographic.com.es/medio/2022/07/05/oregon-coast_cd6855b6_1600x2000.jpg",
    titulo: "Astronomia",
    descripccion: "Anochecer estrellado"
})
let photosDocument2 = new photosModel({
    nombre_usuario: "Antonio",
    url: "https://static.vecteezy.com/system/resources/previews/002/030/159/non_2x/sunset-on-the-tropical-beach-free-photo.jpg",
    titulo: "Purpura",
    descripccion: "Amanecer en la playa"
})
let photosDocument3 = new photosModel({
    nombre_usuario: "Julian",
    url: "https://thumbs.dreamstime.com/b/superficie-del-agua-de-la-ola-oce%C3%A1nica-mar-que-practica-surf-124362369.jpg",
    titulo: "Ola ke ase",
    descripccion: "Ola rompiendo"
})
let photosDocument4 = new photosModel({
    nombre_usuario: "Mercedes",
    url: "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais",
    titulo: "Glovo",
    descripccion: "Globos sobrevolando montañas"
})

//**********************************SAVE*****************/

// photosDocument1.save()
// .then(data => {
//     console.log(data)
//     return photosDocument2.save()
// }).then(data => {
//     console.log(data)
//     return photosDocument3.save()
// }).then(data => {
//     console.log(data)
//     return photosDocument4.save()
// }).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
//      mongoose.disconect
// })

//***********************************CREATE**************************************************/

// let data = {
//     nombre_usuario: "Mercedes",
//     url: "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais",
//     titulo: "Glovo",
//     descripccion: "Globos sobrevolando montañas"
// }
// let document = new photosModel(data)

// photosModel.create(data)
// .then(() => {
//     console.log(data)
//     mongoose.disconnect()
// }).catch(error => {
//     console.log(error);
// })

//+++++++++++++++++++++++++++++++++++++INSERT MANY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// photosModel.insertMany([photosDocument1, photosDocument2, photosDocument3, photosDocument4])
// .then(() => {
//     console.log("Guardado correctamente")
//     mongoose.disconnect()
//     return 
// }).then(() => {

// })
// .catch((error) => {
//     console.log(error);
// })

//****************************************************Obtener fotos************************/

// photosModel.find({nombre_usuario: "Antonio"})
// .then(items => {
//     console.log(items)
//     mongoose.disconnect()
// }).catch(err => console.log(err))

//******************************************************Modificar fotos**************************/

// photosModel.updateOne({titulo: "Ola ke ase"}, {descripccion: "Sol surfeando"})
// .then(data => {
//     console.log("Modificado correctamente")
//     console.log(data)
// }).catch(error => console.log(error))

//******************************************************Eliminar foto****************************/

// photosModel.deleteOne({nombre_usuario: "Mercedes", titulo: "Glovo"})
// .then(data => {
//     console.log("Eliminado correctamente");
//     console.log(data)
//     mongoose.disconnect()
// }).catch(error => console.log(error))

//**********************************************************Eliminar todas las fotos***************/

// photosModel.deleteMany({nombre_usuario: "Antonio"})
// .then(data => {
//     console.log("Eliminado correctamente")
//     console.log(data)
// }).catch(error => console.log(error))