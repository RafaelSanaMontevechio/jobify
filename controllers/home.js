const categoryModel = require('../models/category');
const vacancyModel = require('../models/vacancy');

const getIndex = dbConection => async (req, res) => {
    const categoriasDb = await categoryModel.getAllCategories(dbConection)();
    const vagas = await vacancyModel.getAllVacancies(dbConection)();
    const categorias = categoriasDb.map(cat => {
        return {
            ...cat,
            vagas: vagas.filter(vaga => vaga.categoria === cat.id)
        }
    });
    res.render('home', {
        categorias
    });
}

module.exports = {
    getIndex
}