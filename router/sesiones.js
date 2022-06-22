const { Router } = require('express');
const router  = new Router();

const mysql = require('mysql');
const session = require('express-session');

router.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}));

router.get('/sesiones', (req, res) => {
    res.render('sesiones', {
        titulo: 'Fotografía | Iniciar Sesión'
    });
});

router.post('/registro', (req, res) => {
    req.session.my_variable = req.body;
    res.redirect('solicitudes');
});

// Conexión a base de datos

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fernandez_rocio'
});

conn.connect((err) => {
    if(err) throw err;
    console.log("CONEXIÓN ESTABLECIDA");
});

// Sesiones y Select

router.get('/solicitudes', (req, res) => {
    const user = req.session.my_variable;
    delete req.session.my_variable;
    if(typeof(user) === 'undefined'){
        res.redirect('sesiones');
        throw "SESIÓN CERRADA";
    }
    let sql = "SELECT * FROM solicitudes WHERE email = '" + user.email + "' AND dni = '" + user.dni + "'";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('../views/solicitudes', {
            titulo: 'Fotografía | Reservas',
            user,
            results: results
        });
    });
});

// Insert

router.post('/save', (req, res) => {
    let data = {email: req.body.email, dni: req.body.dni, promo: req.body.promo, mes: req.body.mes, quincena: req.body.quincena, dia: req.body.dia, horario: req.body.horario, locacion: req.body.locacion};
    let sql = "INSERT INTO solicitudes SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/solicitudes');
    });
});

module.exports = router;