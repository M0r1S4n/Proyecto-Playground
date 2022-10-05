const express = require ('express');

const app = express ();

const path = require ('path');

const publicpath = path.resolve (__dirname,'./publics')

app.use(express.static(publicpath));

app.set ('puerto', process.env.PORT || 3001)

app.listen (app.get ('puerto'), ()=>{
    console.log (`Servidor corriendo ${app.get('puerto')}`)
});

app.get ('/', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/index.html'))
});
app.get ('/register', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/register.html'))
});
app.get ('/login', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/login.html'))
});

