const Pool = require('pg').Pool
const pool = new Pool({
    user: "root",
    password: 'root',
    host: "localhost",
    port: 5432,
    database: "node_postgres"
});

module.exports = pool;