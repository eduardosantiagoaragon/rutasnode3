const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app=express();
const port = 3005;

//middleware para el css y img, archivos estaticos
app.use(express.static(path.join(__dirname,"public")));

app.use("/", routes);

app.listen(port,()=>{
    console.log(`localhost:${port}`);
})