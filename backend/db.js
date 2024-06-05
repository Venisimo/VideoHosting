import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    password: 'kab207',
    host: "db",
    port: 5432,
    database: "videohosting"
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Ошибка подключения к PostgreSQL:', err);
    } else {
        console.log('Успешное подключение к PostgreSQL. Текущее время в базе данных:', res.rows[0].now);
    }
    // pool.end();
});

export default pool