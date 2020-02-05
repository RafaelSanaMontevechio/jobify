const getAllCategories = dbConnection => async () => {
    const db = await dbConnection;
    const categories = await db.all('select * from categorias');
    return categories;
}

const saveCategory = dbConnection => async (category) => {
    const db = await dbConnection;
    await db.run(`insert into categorias(categoria) values ('${category}');`);
}

const editCategory = dbConnection => async (id) => {
    const db = await dbConnection;
    const category = await db.get('select * from categorias where id = ' + id);
    return category;
}

const saveCategoryEdited = dbConnection => async (id, category) => {
    const db = await dbConnection;
    await db.run(`update categorias set categoria = '${category}' where id = ` + id);
}

const deleteCategory = dbConnection => async (id) => {
    const db = await dbConnection;
    await db.run('delete from categorias where id = ' + id);
}

module.exports = {
    getAllCategories,
    saveCategory,
    editCategory,
    saveCategoryEdited,
    deleteCategory
}