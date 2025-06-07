import { SQL } from "bun";


export function startDBServer() {
    const sql = new SQL({
        hostname: "localhost",
        database: "notesDB",
        username: "admin",
        password: "123456",
        port: 5432,
        ssl: false,
        onconnect: client => {
            console.log("Connected to database");
        },
        onclose: client => {
            console.log("Connection closed");
        },
    });
    return sql;
}

