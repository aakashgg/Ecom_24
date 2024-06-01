import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
const app = express();
import ConnectionDB from './config/connectionDB.js';
import routes from './routes/routes.js';
app.use(express.json());
dotenv.config();

app.use(cors());
const uri = process.env.URI;
const PORT = process.env.PORT;

ConnectionDB(uri);
app.use("/api/v1", routes);
app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`app running on PORT ${PORT}`);
})