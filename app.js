const express = require ('express')

const app=express();

//configuracion de express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('funciona wujuuuu');
});

app.use(require('./routes'));

module.exports = app;