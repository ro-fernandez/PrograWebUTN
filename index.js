require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./router/reservaciones'));
app.use(require('./router/contacto'));
app.use(require('./router/router'));

app.listen(port, () =>{
    console.log(`Usando el puerto http://localhost:${port}`);
});