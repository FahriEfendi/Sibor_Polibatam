import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes} = Sequelize;

const sesi_if = db.define('sesi_if',{
    sesi:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false,
    },


},{
    freezeTableName: true
});







export default sesi_if;