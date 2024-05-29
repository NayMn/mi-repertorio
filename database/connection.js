import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
})

try {
    await pool.query("SELECT NOW()")
    console.log('postgres conectado...')
} catch (error) {
    console.log(error)

}