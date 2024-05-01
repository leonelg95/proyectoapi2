const express = require('express');
const userSchema = require("../models/user");
const router = express.Router();


//create user // endpoint // ruta para crear usuario
router.post('/users', (req,res)=>{
   const user = userSchema(req.body);
   user
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// leer todos los usuarios 
router.get('/users', (req,res)=>{
   userSchema
   .find()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// leer usuario en especifico
router.get('/users/:id', (req,res)=>{
   
   const {id} = req.params;
   userSchema
   .findById(id)
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// editar usuario
router.put('/users/:id', (req,res)=>{
   const {id} = req.params;
   const {nombre, edad, email} = req.body;

   userSchema
   .updateOne({_id:id}, {$set: {nombre,edad,email}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// eliminar usuario
router.delete("/users/:id", (req, res) => {
   const { id } = req.params;
   userSchema
     .deleteOne({ _id: id })
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error }));
 });


module.exports = router;

