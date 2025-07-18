// import postgres from 'postgres'

// const sql = postgres({ 
//   host                 : 'localhost',
//   port                 : 5432,
//   database             : 'note_db',   
//   username             : 'postgres',
//   password             : '123456',
//    ssl                  : false
//  })

// export default sql

import { SQL } from "bun";

let sql: any = null;

function resolveSql() {
  return new Promise((resolve) => {
        sql = new SQL({
            url: "postgres://postgres:123456@localhost:5432/note_db",
            hostname: "localhost",
            database: "note_db",
            username: "postgres",
            password: "123456",
            port: 5432,
            ssl: false,
            onconnect: client => {
                console.log("Connected to database");
                resolve(sql)
            },
            onclose: client => {
                console.log("Connection closed");
            },
        });
        
  });
}

(async function() {
    if (!sql) {
        console.log('sql', sql)
        await resolveSql()
    }
})()

export default sql;

