const { Router } = require ("express");
const router = new Router();

router.get('/', (req,res) =>{
    res.render('index', {
        titulo: 'Fotografía | Home'
    });
});

router.get("/promos", (req,res) =>{
    res.render('promos', {
        titulo: 'Fotografía | Promos'
    });
});

router.get("/portfolio", (req,res) =>{
    res.render('portfolio', {
        titulo: 'Fotografía | Portfolio'
    });
});

router.get("/politicas", (req,res) =>{
    res.render('politicas', {
        titulo: 'Fotografía | Políticas de Privacidad'
    });
});

router.get("*", (req,res) =>{
    res.render('error404', {
        titulo: 'Fotografía | Error 404'
    });
});

module.exports = router;