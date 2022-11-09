
const express = require("express");

const port = process.env.PORT || 3000;

const app = express()
app.use(express.json());

app.listen(port,()=>{
    console.log("El servidor esta activo");
});

app.get("/",(req,res)=>{
    res.json("Hola");
});

app.post("/webhook",(req,res)=>{
    console.log(req.body);
})