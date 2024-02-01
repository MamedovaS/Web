
const Pool = require('pg').Pool
const pool = new Pool({
    user: "root",
    password: 'root',
    host: "127.0.0.1",
    port: 5500,
    database: "node_postgres"
});

module.exports = pool;