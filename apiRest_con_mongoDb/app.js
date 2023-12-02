const express = require("express")
const cors = require("cors")
const photosRoutes = require("./src/routes/photos.routes")
const errorHandling = require("./src/error/errorHandling")

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(photosRoutes)
app.use(errorHandling)
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        codigo: 404,
        message: "Endpoint doesnt found"
    })
})

module.exports = app