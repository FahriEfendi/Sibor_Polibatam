
import bcrypt from "bcrypt";
import Users from "../models/Usermodel.js";

export const Login = async(req, res) => {
    const user = await Users.findOne({
        where: {
            nim_nik: req.body.nim_nik
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});    
    const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) return res.status(400).json({msg: "Password Salah!"});
        req.session.userId = user.uuid;
        const uuid = user.uuid;
        const nama = user.nama;
        const nim_nik = user.nim_nik;
        const jur_id = user.jur_id;
        
        res.status(200).json();   
}


export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await Users.findOne({
        attributes:['uuid','nama','nim_nik','role','jur_id'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}


