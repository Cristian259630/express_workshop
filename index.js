//Dependencies
const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const app = express();
// Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
// Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

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

app.get("/" ,index);
app.use("/user",user);
app.use(auth);
app.use("/pokemon",pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
   console.log("Server is Running...");
});
