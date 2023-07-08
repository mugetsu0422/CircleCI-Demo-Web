import knexObj from 'knex';
import * as dotenv from 'dotenv'
dotenv.config()

export default knexObj({
  client: 'mysql2',
  connection: {
    host: 'matcha.mysql.database.azure.com',
    port: 3306,
    user: 'matcha',
    password: 'Tkpm@group03',
    database: 'matcha_english_learning_website',
    timezone: '+00:00',
  }
});