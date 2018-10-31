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

const onError = (error) => {
    if (error.syscall !== 'listen') throw error;

    const porty = app.address;

    const bind =
        typeof porty === 'string'
            ? `Pipe ${porty}`
            : `Port + ${porty}`;

    switch (error.code) {
        case 'EACCES':
            debug(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            debug(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = app.address();
    const bind =
        typeof addr === 'string'
            ? `Pipe ${addr}`
            : `Port ${addr.port}`;

    debug(`Listening on ${bind}`);
};

models.sequelize.sync()
    .then(() => {
        app.listen(config.port, () => {
            debug('Express server listening on port', config.port);
            console.log('Customer-Orders server listening on port', config.port);
        });
        app.on('error', onError);
        app.on('listening', onListening);
    })
    .catch((err) => { throw err; });

app.models = models;
module.exports = app;