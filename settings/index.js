const config = {
  database: {
    drive: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    host: 'localhost',
    port: 3307,
    database: 'todo_api',
    user: 'myuser', // <-- Verificar seu usuário de acesso
    password: 'mypass' // <-- Verificar sua senha
  }
}
module.exports = config
