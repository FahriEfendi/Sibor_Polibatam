import { Sequelize } from "sequelize";

const db = new Sequelize('ta_rev','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;