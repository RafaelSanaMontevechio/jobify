const init = dbConnection => {
    const router = require('express').Router();
    const adminController = require('../controllers/admin');

    router.get('', adminController.getAdminHome);

    /**  Categorias */
    router.get('/categorias', adminController.categories(dbConnection));
    router.get('/categorias/nova', adminController.createFormNewCategory);
    router.get('/categorias/editar/:id', adminController.createFormEditCategory(dbConnection));
    router.get('/categorias/delete/:id', adminController.deleteCategory(dbConnection));

    router.post('/categorias/nova', adminController.saveNewCategory(dbConnection));
    router.post('/categorias/editar/:id', adminController.saveCategoryEdited(dbConnection));

    /** Vagas */
    router.get('/vagas', adminController.vacancies(dbConnection));
    router.get('/vagas/nova', adminController.createFormNewVacancy(dbConnection));
    router.get('/vagas/editar/:id', adminController.createFormEditVacancy(dbConnection));
    router.get('/vagas/delete/:id', adminController.deleteVacancy(dbConnection));

    router.post('/vagas/nova', adminController.saveNewVacancy(dbConnection));
    router.post('/vagas/editar/:id', adminController.saveVacancyEdited(dbConnection));

    return router;
}

module.exports = init