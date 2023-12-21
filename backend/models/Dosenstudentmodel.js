import { Sequelize, Op } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Dosenstudent = db.define('dosen_student', {
student_id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  dosen_id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  
}, {
  freezeTableName: true
});

export default Dosenstudent;
