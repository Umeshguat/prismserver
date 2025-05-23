


import mysql from 'mysql';

const db = mysql.createConnection({
  connectionLimit: 10, // adjust based on your app's needs
  host: '150.242.200.29',
  port: 3306,
  user: 'qubeta_prism',
  password: '=szPo_2icWop',
  database: 'qubeta_prism'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Wrap the query method with a promise
export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

export default db;
