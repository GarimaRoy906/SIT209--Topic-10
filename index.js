const express= require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello, Garima Roy here")
})


app.listen(process.env.PORT||4000, ()=>{
    console.log("app is running")
})