import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Usermodel.js";
import Room from "./Roommbmodel.js";

const {DataTypes} = Sequelize;

const BorrowMB = db.define('borrow_room_mb',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    nama_kegiatan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
      nama_pengguna:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    createBy:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    updateBy:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    borrow_date:{
        type: DataTypes.STRING,
        allowNull: true
    },
    until_date:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    borrow_time:{
        type: DataTypes.STRING,
        allowNull: true
    },
    until_time:{
        type: DataTypes.STRING,
        allowNull: true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    jumlah_pengguna:{
        type: DataTypes.STRING,
        allowNull: true
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ruangan:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    note:{
        type: DataTypes.STRING,
        allowNull: true
    },
    dosen_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }

},{
    freezeTableName: true
});

Users.hasMany(BorrowMB);
BorrowMB.belongsTo(Users, {foreignKey: 'userId'});

Room.hasMany(BorrowMB);
BorrowMB.belongsTo(Room, {foreignKey: 'ruangan'});



export default BorrowMB;