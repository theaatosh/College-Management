const express=require("express");
const dotenv=require("dotenv").config();
const dbConnection=require("./config/dbConnection")

const app=express();
dbConnection();


app.use(express.json());

const notice=require('./routes/notices.routes');
app.use('/api/notices',notice)

const achievement=require('./routes/achievements.routes')
app.use('/api/achievements',achievement)

const PORT=process.env.PORT
app.listen(PORT,()=>{
   console.log("Server started at port ",PORT);
   
})