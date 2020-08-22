import { Pool } from 'pg'
import fs from 'fs'
import path from 'path'

const queryPath = path.join(process.cwd(), 'server', 'queries')

// Import queries from files
const TABLE_PACKS = fs.readFileSync(path.join(queryPath, 'create-pack-table.sql'), 'utf-8')

const port: number = typeof process.env.PGPORT !== 'undefined' ? parseInt(process.env.PGPORT, 10) : 5432

// Initiate DB connection pool (see node-postgres)
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_USER,
  port,
  host: process.env.DB_HOST,
  password: process.env.POSTGRES_PASSWORD
})

// Retry connecting 5 times to PostgreSQL server because of Docker Compose setup time
const connect = async ():Promise<void> => {
  for (let i = 5; i !== 0; i--) {
    try {
      await pool.connect()
      break
    } catch (err) {
      console.log(err)
      console.log(`Retries left: ${i - 1}`)
      // Wait 3 seconds before trying to reconnect
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }
}

// Creates the packs table inside the database
const createTable = async ():Promise<void> => {
  pool.query(TABLE_PACKS)
    .then(() => console.log('Created DB table'))
    .catch(err => console.error(err))
}

// Connect to the db, then create the schema
const createConnection = async ():Promise<void> => connect().then(() => createTable())

// Selects all packs that should be visible in the main page
// Parameters are whether they are in stock, and show=true
const getVisiblePacks = async ():Promise<any[]> =>
  pool.query('SELECT id, name, img, price, slug FROM packs WHERE show = true AND amount > 0')
    .then(res => res.rows)

// Select further details for a specific pack
const getPackDetails = async (slug: string):Promise<any[]> =>
  pool.query('SELECT * FROM packs WHERE slug=$1', [slug])
    .then(res => res.rows[0])

export {
  createConnection,
  getVisiblePacks,
  getPackDetails
}
