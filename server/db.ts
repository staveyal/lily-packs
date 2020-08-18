import { Pool } from 'pg'
import fs from 'fs'
import path from 'path'

const queryPath = path.join(process.cwd(), 'server', 'queries')

// Import queries from files
const TABLE_PACKS = fs.readFileSync(path.join(queryPath, 'create-pack-table.sql'), 'utf-8')

const port: number = typeof process.env.PGPORT !== 'undefined' ? parseInt(process.env.PGPORT, 10) : 5432
// Create DB connection pool
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_USER,
  port,
  host: process.env.DB_HOST,
  password: process.env.POSTGRES_PASSWORD
})

// Retry connecting 5 times to PostgreSQL server because of Docker container setup time
const connect = async ():Promise<void> => {
  for (let i = 5; i !== 0; i--) {
    try {
      await pool.connect()
      break
    } catch (err) {
      console.log(err)
      console.log(`Retries left: ${i - 1}`)
      // Wait 3 seconds before trying to reconnect
      setTimeout(3)
    }
  }
}

connect()
const createTable = async ():Promise<void> => {
  pool.query(TABLE_PACKS)
    .then(() => console.log('Created DB table'))
    .catch(err => console.error(err))
}

export { createTable }
