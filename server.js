const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const config = require('./config/default');
const debug = require('debug');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

require('./routes/routes.js')(app);

models.sequelize.sync()
    .then(() => {
        app.listen(config.port, () => {
            debug('Express server listening on port', config.port);
            console.log('Customer-Orders server listening on port', config.port);
        });
    })
    .catch((err) => { throw err; });

app.models = models;
module.exports = app;