import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import characterRouter from "./routes/characters.js";
import userRouter from "./routes/users.js";
dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
const db_access = process.env.MONGODB_ACCESS;
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter)
app.use('/character', characterRouter)

//set up an express server



app.get('/', (req, res) => {
    res.send("Hello World")
})

mongoose.connect(db_access).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
    process.exit(1)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})