const { Router } = require('express');
const router  = new Router();

const mysql = require('mysql');
const session = require('express-session');

// Sesiones

router.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}));

router.get('/reservaciones', (req, res) => {
    res.render('reservaciones', {
        titulo: 'Fotografía | Iniciar Sesión'
    });
});

router.post('/registro', (req, res) => {
    req.session.regenerate(function (err) {
        if (err) next(err)
        req.session.user = req.body;
        req.session.save(function (err) {
            if (err) return next(err)
            res.redirect('solicitudes');
        })
    })
});

router.post('/logout', function (req, res, next) {
    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)
      req.session.regenerate(function (err) {
        if (err) next(err)
        res.redirect('reservaciones')
      })
    })
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

// Select de las solicitudes de la sesión iniciada

router.get('/solicitudes', (req, res) => {
    const user = req.session.user;
    if(typeof(user) === 'undefined'){
        res.redirect('reservaciones');
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

// Insert de nueva solicitud de la sesión iniciada

router.post('/save', (req, res) => {
    let data = {email: req.body.email, dni: req.body.dni, apynom: req.body.apynom, promo: req.body.promo, mes: req.body.mes, quincena: req.body.quincena, dia: req.body.dia, horario: req.body.horario, locacion: req.body.locacion};
    let sql = "INSERT INTO solicitudes SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/solicitudes');
    });
});

// Update de solicitud existente de la sesión iniciada

router.post('/update', (req, res) => {
    let sql = "UPDATE solicitudes SET email = '" + req.body.email + "', dni = '" + req.body.dni + "', apynom = '" + req.body.apynom + "', promo = '" + req.body.promo + "', mes = '" + req.body.mes + "', quincena = '" + req.body.quincena + "', dia = '" + req.body.dia + "', horario = '" + req.body.horario + "', locacion = '" + req.body.locacion + "'WHERE id_solicitud =" + req.body.id_solicitud;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/solicitudes');
    });
});

// Delete de solicitud existente de la sesión iniciada

router.post('/delete', (req, res) => {
    let sql = "DELETE from solicitudes WHERE id_solicitud =" + req.body.id_solicitud;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/solicitudes');
    });
});

// Muestra de solicitudes total para administrador de la página

router.get('/solicitudes43875244', (req, res) => {
    let sql = "SELECT * FROM solicitudes";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('../views/solicitudes43875244', {
            titulo: 'Fotografía | Reservas Totales',
            results: results
        });
    });
});

module.exports = router;