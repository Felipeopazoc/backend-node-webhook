
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
    res.json(req.body);
})
app.get("/webhook",(req,res)=>{
    const verify_token = "felipeopazo2409";

    res.json(req.body);
    const mode = req.body["hub.mode"];
    const token = req.body["hub.verify_token"];
    const challenge = req.body["hub.challenge"];
   
    // Check if a token and mode were sent
    if (mode && token) {
        // Check the mode and token sent are correct
        if (mode === "subscribe" && token === verify_token) {
        // Respond with 200 OK and challenge token from the request
         res.json("Verificado");
        //res.status(200).send(challenge);
        } 
    }else{
        // Responds with '403 Forbidden' if verify tokens do not match
        res.json("No Verificado")
    }
})