const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/proyecto_final_mongo")
.then(db => {
    console.log("Database connected on " + db.connection.host)
}).catch(err => console.log(err))

