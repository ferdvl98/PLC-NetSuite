import mysql from 'mysql2/promise';

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'lowCodeTemplate'
}

const connection = await mysql.createConnection(config)


export class DataBaseModel {

  static async getFields() {
    const results = await connection.query('SELECT * FROM fields_types')
    console.log(results)
  }

}