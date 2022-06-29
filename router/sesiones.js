const { Router } = require('express');
const router  = new Router();

// const mysql = require('mysql');
// const session = require('express-session');

// router.use(session({
//     secret: '123456',
//     resave: true,
//     saveUninitialized: true
// }));

router.get('/sesiones', (req, res) => {
    res.render('sesiones', {
        titulo: 'Fotografía | Iniciar Sesión'
    });
});

// router.post('/registro', (req, res) => {
//     req.session.regenerate(function (err) {
//         if (err) next(err)
//         req.session.user = req.body;
//         req.session.save(function (err) {
//             if (err) return next(err)
//             res.redirect('solicitudes');
//         })
//     })
// });

// router.post('/logout', function (req, res, next) {
//     req.session.user = null
//     req.session.save(function (err) {
//       if (err) next(err)
//       req.session.regenerate(function (err) {
//         if (err) next(err)
//         res.redirect('sesiones')
//       })
//     })
// });

// // Conexión a base de datos

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'fernandez_rocio'
// });

// conn.connect((err) => {
//     if(err) throw err;
//     console.log("CONEXIÓN ESTABLECIDA");
// });

// // Sesiones y Select

// router.get('/solicitudes', (req, res) => {
//     const user = req.session.user;
//     if(typeof(user) === 'undefined'){
//         res.redirect('sesiones');
//         throw "SESIÓN CERRADA";
//     }
//     let sql = "SELECT * FROM solicitudes WHERE email = '" + user.email + "' AND dni = '" + user.dni + "'";
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.render('../views/solicitudes', {
//             titulo: 'Fotografía | Reservas',
//             user,
//             results: results
//         });
//     });
// });

// // Insert

// router.post('/save', (req, res) => {
//     let data = {email: req.body.email, dni: req.body.dni, promo: req.body.promo, mes: req.body.mes, quincena: req.body.quincena, dia: req.body.dia, horario: req.body.horario, locacion: req.body.locacion};
//     let sql = "INSERT INTO solicitudes SET ?";
//     let query = conn.query(sql, data, (err, results) => {
//         if(err) throw err;
//         res.redirect('/solicitudes');
//     });
// });

// // Update

// router.post('/update', (req, res) => {
//     let sql = "UPDATE solicitudes SET email = '" + req.body.email + "', dni = '" + req.body.dni + "', promo = '" + req.body.promo + "', mes = '" + req.body.mes + "', quincena = '" + req.body.quincena + "', dia = '" + req.body.dia + "', horario = '" + req.body.horario + "', locacion = '" + req.body.locacion + "'WHERE id_solicitud =" + req.body.id_solicitud;
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.redirect('/solicitudes');
//     });
// });

// // Delete

// router.post('/delete', (req, res) => {
//     let sql = "DELETE from solicitudes WHERE id_solicitud =" + req.body.id_solicitud;
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.redirect('/solicitudes');
//     });
// });

// // Muestra de BBDD total para administrador

// router.get('/solicitudes43875244', (req, res) => {
//     let sql = "SELECT * FROM solicitudes";
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.render('../views/solicitudes43875244', {
//             titulo: 'Fotografía | Reservas Totales',
//             results: results
//         });
//     });
// });

module.exports = router;