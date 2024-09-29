const express = require('express');
const morgan = require('morgan');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
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


app.use("/pokemon",pokemon);



app.listen(process.env.PORT || 3000, () => {
   console.log("Server is Running...");
});
