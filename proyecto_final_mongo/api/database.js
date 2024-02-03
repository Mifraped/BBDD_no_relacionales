const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`mongodb+srv://maikelfranklin:${process.env.MONGO_PASSWORD}@cluster0.vws5ljp.mongodb.net/proyecto_final_mongo`)
    .then(db => {
        console.log("Database connected on " + db.connection.host)
    }).catch(err => console.log(err))

