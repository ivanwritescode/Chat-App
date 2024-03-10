import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);

app.get("/", (req, res) => {
    res.send("Hello World!!");
})

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));