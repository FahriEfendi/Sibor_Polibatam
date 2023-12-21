import { Sequelize } from "sequelize";
import db from "../config/Database.js";



const {DataTypes} = Sequelize;

const Role = db.define('role',{
    nama:{
        type: DataTypes.STRING,
        allowNull: false,
    },
   
},{
    freezeTableName: true
});
export default Role;