const express = require('express');
const app = express();

/*
verbos HTTP -denotan una acción
GET - Obtener un recurso - es lo que ejecutan nuestros navegadores cada vez que ponemos una URL - se esta realizando una petición hacia 
un servidor y esa petición GET lo que hace regularmente es regresar una pagina web
POST
PATCH - Modificar algunos elementos
PUT
DELETE

*/

app.listen(3000, ()=>{
   console.log("Server is Running...")
});
