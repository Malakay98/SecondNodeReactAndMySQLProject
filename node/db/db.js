import sequelize from "sequelize";

// I configure my connection to the db with sequelize
// I pass as a parameters in order the database, user, password, host and the type db that i use
const db = new sequelize("blogs", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
