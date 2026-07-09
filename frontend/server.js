const express = require("express")
const mongoose = require("mongoose")
//npm i cors
const cors =require("cors");
require("dotenv").config();


const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("DB Connected Successfully"))
.catch((err)=>{console.log("Unable to connect DB ",err)});

app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log("Server Started at "+PORT);
})