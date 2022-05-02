import express from "express";
// CORS provide a Connect/Express middleware that can be used to enable CORS with various options
// Cross-Origin Resource Sharing (CORS) its a mechanism that uses additional HTTP headers to allow a user-agent to obtain permission to accces selected resources from a serverZ
import cors from "cors";
import db from "./db/db.js";
import blogRoutes from "./routes/routes.js"


const app = express()

app.use(cors())
app.use(express.json())
// blogs is going to be my reference route
app.use('/blogs', blogRoutes)

try {
    db.authenticate()
    console.log("Connected to the db!")
} catch (error) {
    console.log(`Not connected to the db. ${error}`)
}


// app.get('/', (req, res) => {
//     res.send("Que haces trolo")
// })

app.listen(420, () => {
    console.log("Server running in http://localhost:420/")
})
