const express = require('express');
const path = require('path');

const router = express.Router();

//Ruta principal

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
})

router.get("/registros.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registros.html"));
})

router.get("/TercerEndpoint.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/TercerEndpoint.html"));
})

router.get("/CuartoEndpoint.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/CuartoEndpoint.html"));
})

module.exports=router;