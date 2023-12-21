import Borrow_room from "../models/BorrowRoomIFmodel.js";
import Users from "../models/Usermodel.js";
import Room from "../models/Roommodel.js";
import {Op} from "sequelize";
import sesi_if from "../models/SesiIFmodel.js";
import { SMTPClient } from 'emailjs';



export const getBorrowroomIF = async (req, res) => {
    try {
        let response;
        if ((req.role === 1 || req.role === 3 || req.role === 5|| req.role === 9||req.role === 6||req.role === 8) && req.jur_id === 1 || req.jur_id === 5) {
            response = await Borrow_room.findAll({
                attributes: ['uuid', 'nama_kegiatan', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note','sesi'],
               
                include: [
                    {
                        model: Users,
                        attributes: ['nama', 'role', 'id', 'jur_id']
                    },
                    {
                        model: Room, // Gabungkan dengan model Room
                        attributes: ['ruangan'] // Pilih atribut yang ingin Anda tampilkan dari tabel Room
                    },
                    {
                        model: sesi_if, // Gabungkan dengan model Room
                        attributes: ['sesi'] // Pilih atribut yang ingin Anda tampilkan dari tabel Room
                    }

                ]
            });
        } else {
            response = await Borrow_room.findAll({
                attributes: ['uuid', 'nama_kegiatan', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note','sesi'],
                where: {
                    [Op.or]: [
                        { userId: req.userId }, // Ambil pengajuan berdasarkan userId
                        { dosen_id: req.userId }, // Ambil pengajuan berdasarkan dosen_id
                       
                           
                    ]
                },
                include: [
                    {
                        model: Users,
                        attributes: ['nama', 'role', 'id', 'jur_id']
                    },
                    {
                        model: Room, // Gabungkan dengan model Room
                        attributes: ['ruangan'] // Pilih atribut yang ingin Anda tampilkan dari tabel Room
                    },
                    {
                        model: sesi_if, // Gabungkan dengan model Room
                        attributes: ['sesi'] // Pilih atribut yang ingin Anda tampilkan dari tabel Room
                    }

                ]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getBorrowroomByIdIF = async(req, res) =>{
    try {
        const borrowroom = await Borrow_room.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!borrowroom) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if (req.role === 3 || req.role === 5 ||req.role === 9 ||req.role === 1||req.role === 8||req.role === 6 ||req.role === 4){
            response = await Borrow_room.findOne({
                attributes:['uuid', 'nama_kegiatan','nama', 'ruangan', 'status', 'borrow_date', 'until_date', 'updateBy', 'note','sesi','phone','nama_pengguna','dosen_id','email','jumlah_pengguna'],
                where:{
                    id: borrowroom.id
                },
                include:[{
                    model: Users,
                    attributes:['nama', 'role','id','jur_id','email']
                }]
            });
        }else {
            response = await Borrow_room.findOne({
                attributes:['uuid', 'nama_kegiatan','nama', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note','sesi','phone','nama_pengguna','dosen_id','email','jumlah_pengguna'],
                where:{
                    [Op.and]:[{id: borrowroom.id}, {userId: req.userId}]
                },
                include:[{
                    model: Users,
                    attributes:['nama', 'role','id','jur_id','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBorrowroomIF = async(req, res) =>{
    const {nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,borrow_date,until_date,nama_pengguna,sesi,phone,email,jumlah_pengguna,barang} = req.body;
    try {
        await Borrow_room.create({
            nama:nama,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            ruangan: ruangan,
            sesi: sesi,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 1,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            prodi_id: prodi_id,
            phone: phone,
            email:email,
            jumlah_pengguna: jumlah_pengguna,
            barang: barang
        });
        res.status(201).json({msg: "Pengajuan Ditambahkan."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateBorrowroomIF = async(req, res) =>{
    try {
        const borrowroom = await Borrow_room.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!borrowroom) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_kegiatan,nama, ruangan,dosen_id, jur_id, prodi_id,note,borrow_date,until_date,status,nama_pengguna,sesi,phone,email,jumlah_pengguna} = req.body;
        if(req.role === 3 || req.role === 5 ||req.role === 9 ||req.role === 1 ||req.role === 8||req.role === 4){
            await Borrow_room.update({nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,sesi,nama_pengguna,status,borrow_date,until_date,email,jumlah_pengguna,note,phone,updateBy: req.uuid},{
                where:{
                    id: borrowroom.id
                },
                include:[{
                    model: Users,
                    attributes:['nama', 'role','id','jur_id','email']
                }]
            });

            if (status === 5 && !borrowroom.email_sent) {
                // Kirim email saat status adalah 6 dan email belum dikirim sebelumnya
                const client = new SMTPClient({
                  user: 'no-reply@polibatam.ac.id',
                  password: 'Lay17443',
                  host: 'smtp.office365.com',
                  tls: true,
                });
          
                client.send(
                  {
                    text: `Hai, ${nama}, Status peminjaman ruangan Anda telah Disetujui, silahkan cek SIBor ada Update Status Peminjaman Ruangan.`,
                    from: 'no-reply@polibatam.ac.id',
                    to: email, 
                    subject: 'Update Status Peminjaman',
                  },
                  async (err, message) => {
                    if (err) {
                      console.error('Error mengirim email:', err);
                    } else {
                      console.log('Email terkirim dengan sukses:', message);
                      // Tandai email sebagai sudah dikirim
                      await Borrow_room.update({ email_sent: true }, {
                        where: {
                          id: borrowroom.id
                        }
                      });
                    }
                  }
                );
              }

              if (status === 4 && !borrowroom.email_sent) {
                // Kirim email saat status adalah 6 dan email belum dikirim sebelumnya
                const client = new SMTPClient({
                  user: 'no-reply@polibatam.ac.id',
                  password: 'Lay17443',
                  host: 'smtp.office365.com',
                  tls: true,
                });
          
                client.send(
                  {
                    text: `Hai, ${nama}, Status peminjaman ruangan Anda telah Ditolak BMN, silahkan cek SIBor ada Update Status Peminjaman Ruangan.`,
                    from: 'no-reply@polibatam.ac.id',
                    to: email, 
                    subject: 'Update Status Peminjaman',
                  },
                  async (err, message) => {
                    if (err) {
                      console.error('Error mengirim email:', err);
                    } else {
                      console.log('Email terkirim dengan sukses:', message);
                      // Tandai email sebagai sudah dikirim
                      await Borrow_room.update({ email_sent: true }, {
                        where: {
                          id: borrowroom.id
                        }
                      });
                    }
                  }
                );
              }
             
        }else{
            if(req.userId !== borrowroom.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Borrow_room.update({nama_kegiatan,nama, ruangan,dosen_id,note,borrow_date,until_date,status,nama_pengguna,sesi,email,phone,jumlah_pengguna,updateBy: req.uuid},{
                where:{
                    [Op.and]:[{id: borrowroom.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Pengajuan berhasil diubah"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
  

export const deleteBorrowroomIF = async(req, res) =>{
    try {
        const borrowroom = await Borrow_room.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!borrowroom) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_kegiatan,dosen_id,jur_id, prodi_id} = req.body;
        if(req.role === "admin","TU"){
            await Borrow_room.destroy({
                where:{
                    id: borrowroom.id
                }
            });
        }else{
            if(req.userId !== borrowroom.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Borrow_room.destroy({
                where:{
                    [Op.and]:[{id: borrowroom.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Pengajuan berhasil dihapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


