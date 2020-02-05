const getVacancyById = dbConnection => async (req, res) => {
    const db = await dbConnection;
    const vacancy = await db.get('select * from vagas where id = ' + req.params.id);
    res.render('vaga', {
        vacancy
    });
}

module.exports = {
    getVacancyById
}