const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const fs = require('fs')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8')

const clinicController = require('./controller/clinic.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.use(bodyParser.json());

app.get('/api/clinics', (req, res) => {
    clinicController.getClinic().then(data => res.json(data));
});

app.post('/api/clinic', (req, res) => {
    console.log(req.body);
    clinicController.createClinic(req.body.clinic).then(data => res.json(data));
});

app.put('/api/clinic', (req, res) => {
    clinicController.updateClinic(req.body.clinic).then(data => res.json(data));
});

app.delete('/api/clinic/:id', (req, res) => {
    clinicController.deleteClinic(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})