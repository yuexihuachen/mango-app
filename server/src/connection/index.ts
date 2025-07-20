
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
              // Connection pool settings
            max: 20, // Maximum connections in pool
            idleTimeout: 30, // Close idle connections after 30s
            maxLifetime: 0, // Connection lifetime in seconds (0 = forever)
            connectionTimeout: 30, // Timeout when establishing new connections
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
     console.log('sql', sql)
})()

export default sql;

