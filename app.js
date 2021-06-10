require('dotenv').config();
const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');


app.use( express.static( path.resolve(__dirname, './public') ) );

app.listen( process.env.PORT || 3000, ()=>{
    console.log('Servidor escuchando por el puerto ' + process.env.PORT);
} );

app.get( '/',  ( req, res )=>{
    res.sendFile( path.resolve(__dirname, './views/home.html') );
});

app.get( '/register', ( req, res )=>{
    res.sendFile( path.resolve(__dirname, './views/register.html') )
});

app.get( '/login', ( req, res )=>{
    res.sendFile( path.resolve(__dirname, './views/login.html') )
});