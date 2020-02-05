const categoryModel = require('../models/category');
const vacancyModel = require('../models/vacancy');

const getAdminHome = (req, res) => {
    res.render('admin/home');
}

/** Administração das categorias */

const categories = dbConnection => async (req, res) => {
    const categorias = await categoryModel.getAllCategories(dbConnection)();
    res.render('admin/categorias', { categorias });
}

const createFormNewCategory = (req, res) => {
    res.render('admin/nova-categoria');
}

const saveNewCategory = dbConnection => async (req, res) => {
    await categoryModel.saveCategory(dbConnection)(req.body.categoria);
    res.redirect('/admin/categorias');
}

const createFormEditCategory = dbConnection => async (req, res) => {
    const categoria = await categoryModel.editCategory(dbConnection)(req.params.id);
    res.render('admin/editar-categoria', { categoria });
}

const saveCategoryEdited = dbConnection => async (req, res) => {
    await categoryModel.saveCategoryEdited(dbConnection)(req.params.id, req.body.categoria);
    res.redirect('/admin/categorias');
}

const deleteCategory = dbConnection => async (req, res) => {
    await categoryModel.deleteCategory(dbConnection)(req.params.id);
    res.redirect('/admin/categorias');
}

/** Administração das vagas */

const vacancies = dbConnection => async (req, res) => {
    const vagas = await vacancyModel.getAllVacancies(dbConnection)();
    res.render('admin/vagas', { vagas });
}

const createFormNewVacancy = dbConnection => async (req, res) => {
    const categorias = await categoryModel.getAllCategories(dbConnection)();
    res.render('admin/nova-vaga', { categorias });
}

const saveNewVacancy = dbConnection => async (req, res) => {
    const { titulo, descricao, categoria } = req.body;
    await vacancyModel.saveNewVacancy(dbConnection)(categoria, titulo, descricao);
    res.redirect('/admin/vagas');
}

const createFormEditVacancy = dbConnection => async (req, res) => {
    const categorias = await categoryModel.getAllCategories(dbConnection)();
    const vaga = await vacancyModel.editVacancy(dbConnection)(req.params.id);
    res.render('admin/editar-vaga', { categorias, vaga });
}

const saveVacancyEdited = dbConnection => async (req, res) => {
    const { titulo, descricao, categoria } = req.body;
    await vacancyModel.saveVacancyEdited(dbConnection)(req.params.id, categoria, titulo, descricao);
    res.redirect('/admin/vagas');
}

const deleteVacancy = dbConnection => async (req, res) => {
    await vacancyModel.deleteVacancy(dbConnection)(req.params.id);
    res.redirect('/admin/vagas');
}

module.exports = {
    getAdminHome,
    categories,
    createFormNewCategory,
    saveNewCategory,
    createFormEditCategory,
    saveCategoryEdited,
    deleteCategory,
    vacancies,
    createFormNewVacancy,
    saveNewVacancy,
    createFormEditVacancy,
    saveVacancyEdited,
    deleteVacancy
}