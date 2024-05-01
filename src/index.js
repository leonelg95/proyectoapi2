const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT|| 8080;
require('dotenv').config();
const userRoute = require("./routes/user");


//middleware
app.use(express.json());
app.use('/api', userRoute)

//routes

app.get ('/' , (req,res) => {

    res.send('Bienvenidos a mi api ')


});


// mongo db coneccions

mongoose.connect( process.env.MONGODB_URI)
.then(() => console.log('Conexion exitosa'))
.catch((ERROR) => console.log('No fue posible conectarse a mongodb'));


app.listen(port,() => 
console.log('Servidor escuchando en el puerto', port));



