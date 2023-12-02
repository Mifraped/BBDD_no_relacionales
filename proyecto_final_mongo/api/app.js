const express = require("express")
const cors = require("cors")
const profesionalRoutes = require("./src/routes/profesional.routes")
const errorHandling = require("./src/error/errorHandling")

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(profesionalRoutes)
app.use(errorHandling)
app.use((req, res, next) => {
    res.status(404).json({
        errror: true, codigo: 404, message: "Endpoint doesent found"
    })
})

module.exports = app