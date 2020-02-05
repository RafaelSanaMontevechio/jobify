const getAllVacancies = dbConnection => async () => {
    const db = await dbConnection;
    const vacancies = await db.all('select * from vagas');
    return vacancies;
}

const saveNewVacancy = dbConnection => async (category, title, description) => {
    const db = await dbConnection;
    await db.run(`insert into vagas(categoria, titulo, descricao) values (${category}, '${title}', '${description}');`);
}

const editVacancy = dbConnection => async (id) => {
    const db = await dbConnection;
    const vacancy = await db.get('select * from vagas where id = ' + id);
    return vacancy;
}

saveVacancyEdited = dbConnection => async (id, category, title, description) => {
    const db = await dbConnection;
    await db.run(`update vagas set categoria = ${category}, titulo = '${title}', descricao = '${description}' where id = ` + id);
}

const deleteVacancy = dbConnection => async (id) => {
    const db = await dbConnection;
    await db.run('delete from vagas where id = ' + id);
}

module.exports = {
    getAllVacancies,
    saveNewVacancy,
    editVacancy,
    saveVacancyEdited,
    deleteVacancy
}