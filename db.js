const Pool = require('pg').Pool
const pool = new Pool({
    user: "root",
    password: 'root',
    host: "localhost",
    port:3306,
    database: "node_postgres"
});

module.exports = pool;