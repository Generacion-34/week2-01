const express = require('express');
const router = express.Router();
const services = require('../services.json')
const projects = require('../projects.json')

// colocar las rutas aquí
router.get('/', (req, res) => {
    // return res.send("Bienvenida generación 34");
    return res.render('home')
});

router.get('/about-us', (req, res) => {
    return res.render('about-us')
})

router.get('/services', (req, res) => {
    return res.render('services', { services })
})

router.get('/services/:id', (req, res) => {
    // console.log(req.params.id);//{ id: '5' }
    const { id } = req.params // ->{id = 2}
    const service = services.find((service) => service.id === parseInt(id))
    // console.log(service);
    return res.render('services_id', { service })
})

router.get('/about-me', (req, res) => {
    return res.render("about-me")
})

router.get('/projects', (req, res) => {
    // console.log(projects);
    return res.render("projects", { projects })
})

router.get('/projects/:id', (req, res) => {
    const { id } = req.params
    const project = projects.find((project) => {
        return project.id === parseInt(id)
    })
    // console.log(project);s
    return res.render("project_id", { project })
})

module.exports = router;
