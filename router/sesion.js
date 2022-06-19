// const { Router } = require ("express");
// const session = require('express-session');
// const router = new Router();

// const sesion = express();

// sesion.use(session({
//     secret: '123456',
//     resave: true,
//     saveUninitialized: true
// }));

// sesion.get("/", (req, res) => {
//     res.render("home");
// });

// sesion.post("/registro", (req, res) => {
//     req.session.my_variable = req.body;
//     res.redirect('perfil');
// });

// sesion.get("/perfil", (req, res) => {
//     const user = req.session.my_variable;
//     delete req.session.my_variable;
//     res.render("perfil", {
//         user,
//     });

// });

// module.exports = sesion;