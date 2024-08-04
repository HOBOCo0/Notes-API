require('dotenv').config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const cors = require("cors");





const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

// app.use((req, res, next) =>{
//     console.log("HTTP Method - "+ req.method+ ", URL - "+ req.url);
//     next();
// })

app.use("/users",userRouter);
app.use("/note", noteRouter);

app.get("/",(req,res)=>{
    res.send("Notes API to Practice API DEVELOPMENT ");
});

const PORT = process.env.PORT || 5000;

console.log("Connecting to MongoDB at:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

    app.listen(PORT,()=>{
        console.log("Server started on port no. 5000 from MongoDB"+ PORT);
    });

})
.catch((error)=>{
    console.log(error);
})


