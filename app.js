const init = dbConection => {

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();

    const routes = require('./routes');

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: true }));

    /** Middleware */
    app.use('/admin', (req, res, next) => {
        if (req.hostname === 'localhost') {
            next();
        } else {
            res.send('Not Allowed');
        }
    });

    app.use(routes(dbConection));

    return app;
}

module.exports = init