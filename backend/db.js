import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    password: 'kab207',
    host: "localhost",
    port: 5432,
    database: "Videohosting"
})
export default pool