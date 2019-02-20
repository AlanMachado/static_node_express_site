var express = require('express');
var data = require('./data.json');
var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render("index.pug", {
        projects: data.projects
    });
});

app.get('/about', (req, res) => {
    res.render('about.pug');
});

app.get('/projects/:id', (req, res) => {
    var projects = data.projects;
    var project = projects.find((project, index, array) => project.id == req.params.id);
    res.render("project.pug", {
        project: project
    })
});

app.use(function(req, res, next) {
    return res.status(404).render("error.pug");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
