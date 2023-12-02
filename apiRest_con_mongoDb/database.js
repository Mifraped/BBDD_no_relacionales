let mongoose = require("mongoose")

mongoose.connect("mongodb+srv://maikelfranklin:MONGOmakelele-7@cluster0.vws5ljp.mongodb.net/")
.then(db => console.log("Database connected on " + db.connection.host))
.catch(error => console.log(error))