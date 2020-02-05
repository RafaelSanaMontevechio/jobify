const init = dbConection => {
    const router = require('express').Router();
    
    const home = require('../controllers/home');
    
    const vacancyRouter = require('./vacancy');
    const adminRouter = require('./admin');

    router.get('/', home.getIndex(dbConection));

    router.use('/vaga', vacancyRouter(dbConection));
    router.use('/admin', adminRouter(dbConection));

    return router;
}

module.exports = init;
