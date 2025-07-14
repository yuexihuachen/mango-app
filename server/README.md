To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

// 启动本地服务
docker run --name some-postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres


### SQL
- sql``.values() format
```
import { sql } from "bun";

const users = await sql`
  SELECT * FROM users
  WHERE active = ${true}
  LIMIT ${10}
`;

// Select with multiple conditions
const activeUsers = await sql`
  SELECT * 
  FROM users 
  WHERE active = ${true} 
  AND age >= ${18}
`;

// Basic insert with direct values
const [user] = await sql`
  INSERT INTO users (name, email) 
  VALUES (${name}, ${email})
  RETURNING *
`;

// Using object helper for cleaner syntax
const userData = {
  name: "Alice",
  email: "alice@example.com",
};

const [newUser] = await sql`
  INSERT INTO users ${sql(userData)}
  RETURNING *
`;

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

await sql`INSERT INTO users ${sql(users)}`;

await sql`UPDATE users SET ${sql(user, "name", "email")} WHERE id = ${user.id}`;
// uses all keys from the object to update the row
await sql`UPDATE users SET ${sql(user)} WHERE id = ${user.id}`;
```
