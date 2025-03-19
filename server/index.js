const express=require("express");
const dotenv=require("dotenv").config();
const dbConnection=require("./config/dbConnection")

const app=express();
dbConnection();


app.use(express.json());
const cors = require("cors");
app.use(cors());

//for notice
const notice=require('./routes/notices.routes');
app.use('/api/notices',notice)

//for achievements
const achievement=require('./routes/achievements.routes')
app.use('/api/achievements',achievement)

//for events
const event=require('./routes/events.routes')
app.use('/api/events',event)

//for landingImages
const landing=require("./routes/landing.routes")
app.use('/api/landing',landing)

const PORT=process.env.PORT
app.listen(PORT,()=>{
   console.log("Server started at port ",PORT);
   
})