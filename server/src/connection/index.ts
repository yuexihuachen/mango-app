import { SQL } from "bun";

let sql;
try {
sql = new SQL({
        hostname: "localhost",
        database: "notesDB",
        username: "postgres",
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
} catch (error) {
    console.error(error)
} finally {
    
}


export default sql as unknown as SQL;

