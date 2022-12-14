
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
app.get("/verify",(req,res)=>{
    // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === "felipeopazo") {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
})