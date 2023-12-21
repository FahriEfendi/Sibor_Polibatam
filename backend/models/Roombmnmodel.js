import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes} = Sequelize;

const Room = db.define('room_bmn',{
    ruangan:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    max_people:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },


},{
    freezeTableName: true
});







export default Room;