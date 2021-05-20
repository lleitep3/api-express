const config = {
  database: {
    drive: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    host: 'localhost',
    port: 3306,
    database: 'todo_api',
    user: 'root', // <-- Verificar seu usuário de acesso
    password: '' // <-- Verificar sua senha
  }
}

module.exports = config
