const path = require('path');

/**
 * Conexão com o sqlite
 */

const sqlite = require('sqlite');
const dbConection = sqlite.open(path.resolve(__dirname, 'banco.sqlite'), { Promise });

/**
 * Cria as tabelas caso não existam
 */

const init = async () => {
  const db = await dbConection;
  await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT);');
  await db.run('create table if not exists vagas (id INTEGER PRIMARY KEY, categoria INTEGER, titulo TEXT, descricao TEXT);');
}

const app = require('./app')(dbConection);
const port = process.env.PORT || 3000;

init();

app.listen(port, (err) => {
  if (err) {
    console.log('Não foi possivel iniciar o servidor do Jobify');
  } else {
    console.log('Servidor do Jobify rodando...');
  }
});
