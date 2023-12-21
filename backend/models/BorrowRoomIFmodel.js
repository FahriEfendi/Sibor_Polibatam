import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Usermodel.js";
import Room from "./Roommodel.js";
import Sesi_IF from "./SesiIFmodel.js";


const {DataTypes} = Sequelize;

const BorrowIF = db.define('borrow_room_if',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_peminjam:{
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
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    until_date:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    sesi:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    jumlah_pengguna:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
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

Users.hasMany(BorrowIF);
BorrowIF.belongsTo(Users, {foreignKey: 'userId'});

Users.hasMany(BorrowIF);
BorrowIF.belongsTo(Users, {foreignKey: 'dosen_id'});


Room.hasMany(BorrowIF);
BorrowIF.belongsTo(Room, {foreignKey: 'ruangan'});

Sesi_IF.hasMany(BorrowIF);
BorrowIF.belongsTo(Sesi_IF, {foreignKey: 'sesi'});



export default BorrowIF;