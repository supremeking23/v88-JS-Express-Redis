const initOptions = {
	/* initialization options */
	connect(client, dc, useCount) {
		const cp = client.connectionParameters;
		console.log("Connected to database:", cp.database);
	},

	query(e) {
		console.log("QUERY:", e.query);
	},
};
const pgp = require("pg-promise")(initOptions);

const connection = {
	host: "localhost",
	port: 5432,
	database: "express_users",
	user: "postgres",
	password: "postgres",
};
// "postgres://postgres:postgres@localhost:5432/express_users"
const dbConnection = pgp(connection);

module.exports = dbConnection;

// const Pool = require("pg").Pool;
// const pool = new Pool({
// 	user: "me",
// 	host: "localhost",
// 	database: "api",
// 	password: "password",
// 	port: 5432,
// });
