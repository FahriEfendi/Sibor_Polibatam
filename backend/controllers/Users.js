import bcrypt from "bcrypt";
import User from "../models/Usermodel.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','nama','role','nim_nik','uuid']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['uuid','nama','role','nim_nik','jur_id'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const Register = async (req, res) => {
    const {nama, nim_nik, password, confPassword, role, jur_id } = req.body;
    if (password !== confPassword) {
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }

    try {
        // Periksa apakah ada pengguna dengan nama yang sama
        const existingName = await User.findOne({ where: { nama } });
        const existingNim = await User.findOne({ where: { nim_nik } });

        if (existingName && existingNim) {
            return res.status(400).json({ msg: "Nama dan NIM telah terdaftar" });
        } else if (existingName) {
            return res.status(400).json({ msg: "Nama telah terdaftar" });
        } else if (existingNim) {
            return res.status(400).json({ msg: "NIM telah terdaftar" });
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await User.create({
            nama: nama,
            nim_nik: nim_nik,
            password: hashPassword,
            role: role,
            jur_id: jur_id
        });

        res.json({ msg: "User berhasil didaftarkan" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {nama, nim_nik, password, confPassword, role,jur_id} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        const saltRounds = 10; // You can adjust the number of salt rounds as needed
        hashPassword = await bcrypt.hash(password, saltRounds);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            nama: nama,
            nim_nik: nim_nik,
            password: hashPassword,
            role: role,
            jur_id:jur_id
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}