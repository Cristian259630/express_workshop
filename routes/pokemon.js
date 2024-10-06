
const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');





pokemon.post("/",(req ,res ,next) => {
    
    return res.status(200).send(req.body);

});



pokemon.get('/',async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    
    return res.status(200).json({code: 1, message: pkmn});
    
});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id -1;
    if(id >= 0 && id <=150) {
         const pkmn = await db.query("SELECT * FROM WHERE pok_id"+id+";");
         return res.status(200).send(pk[req.params.id - 1]);
    }
    return
        res.status(404).send("Pokemon no encontrado");  
});

pokemon.get('/:name([A-Za-z]+)', async (req, res, next) =>{
    // condicion ? valor si verdadero: valor si falso    
    
    const name = req. params.name;
    const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_name"+name+";")
    if (pkmn.length > 0) { 
        return res.status(200).send(pkmn);
    } 
    return res.status(404).send("Pokemon no encontrado");
});


module.exports = pokemon;