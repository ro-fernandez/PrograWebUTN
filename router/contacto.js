const { Router } = require ("express");
const nodemailer = require("nodemailer");
const contacto = new Router();

contacto.get("/contacto", (req,res) =>{
    res.render('contacto', {
        titulo: 'Fotografía | Contacto'
    });
});

contacto.post("/enviar-email", (req,res) =>{
    const apynom = req.body.apynom;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const promo = req.body.promo;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    let mailOptions = {
        to: "rofernandez.ph@gmail.com",
        from: "Remitente",
        subject: `${asunto}`,
        html: `<h1>Nueva consulta</h1>
        <h2>Nombre: ${apynom}</h2>
        <h2>Email: ${email}</h2>
        <h2>Teléfono / Celular: ${telefono}</h2>
        <h2>Promo en la que está interesado: ${promo}</h2>
        <h2>Mensaje: ${mensaje}</h2>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.render('enviado', {
                titulo: 'Fotografía | Formulario Enviado'
            });
            res.status(200).jsonp(reqbody);
        }
    });
});

module.exports = contacto;