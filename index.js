
const express = require("express");

const app = express()

app.listen(3000,()=>{
    console.log("El servidor esta activo");
});

app.get("/",(req,res)=>{
    res.json("Hola")
});

app.post("/webhook",(req,res)=>{
    console.log(req.body);
})