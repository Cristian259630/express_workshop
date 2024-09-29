const express = require('express');
const app = express();
const {pokemon} = require('./pokedex.json');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
/*
verbos HTTP -denotan una acción
GET - Obtener un recurso - es lo que ejecutan nuestros navegadores cada vez que ponemos una URL - se esta realizando una petición hacia 
un servidor y esa petición GET lo que hace regularmente es regresar una pagina web
POST
PATCH - Modificar algunos elementos
PUT
DELETE

*/

app.get("/" ,(req, res, next)=>{
    
    return res.status(200).send("Bienvenido al Pokedex");
});


app.post("/pokemon",(req ,res ,next) => {
    
    return res.status(200).send(req.body);

});



app.get('/pokemon', (req, res, next) => {
    
    return res.status(200).send(pokemon);
    
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id -1;
    if(id >= 0 && id <=150) {
         return res.status(200).send(pokemon[req.params.id - 1]);
    }
    return
        res.status(404).send("Pokemon no encontrado");  
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) =>{
    // condicion ? valor si verdadero: valor si falso    
    
    const name = req. params.name;

   /* for(i=0; i<pokemon.length; i++){
        if(pokemon[i].name.toUpperCase()==name.toUpperCase()){
            return res.status(200).send(pokemon[i]);

        }

    }*/

    const pk = pokemon.filter((p) => {

       return (p.name.toUpperCase() == name.toUpperCase()) && p;
        
    });

    

    if (pk.length > 0) { 
        return res.status(200).send(pk);
    } 
    return res.status(404).send("Pokemon no encontrado");
});



app.listen(process.env.PORT || 3000, () => {
   console.log("Server is Running...");
});
