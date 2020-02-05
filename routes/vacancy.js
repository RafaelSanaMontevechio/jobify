const init = dbConnection => {
    const router = require('express').Router();
    const vacancyController = require('../controllers/vacancy');

    router.get('/:id', vacancyController.getVacancyById(dbConnection));

    return router;
}

module.exports = init