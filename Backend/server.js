import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

const __dirname = path.resolve();

app.use("/upload", express.static(path.join(__dirname, "/upload")));


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (rqs, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", index.html));
    });
}else{
    app.get("/", (req, res) => {
        res.send("API is Running ................");
    });
}

app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${port}.`)
});


