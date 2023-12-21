import Borrow_room from "../models/BorrowRoomELmodel.js";
import Users from "../models/Usermodel.js";
import {Op} from "sequelize";
import Room from "../models/Roomelmodel.js";
import { SMTPClient } from 'emailjs';
import moment from "moment-timezone";


export const getBorrowroomEL = async (req, res) => {
    try {
        let response;
        if ((req.role === 1 || req.role === 3 || req.role === 5|| req.role === 9||req.role === 6||req.role === 8) && req.jur_id === 4|| req.jur_id === 5){
            response = await Borrow_room.findAll({
                attributes: ['uuid','nama_kegiatan','ruangan','borrow_date','borrow_time','until_time','until_date','note','status','updateBy', 'note','phone','nama_pengguna','dosen_id'],
                include: [
                    {
                        model: Users,
                        attributes: ['nama', 'role', 'id', 'jur_id']
                    },
                    {
                        model: Room, // Gabungkan dengan model Room
                        attributes: ['ruangan'] // Pilih atribut yang ingin Anda tampilkan dari tabel Room
                    }

                ]
            });
        } else {
            response = await Borrow_room.findAll({
                attributes: ['uuid','nama_kegiatan','ruangan','borrow_date','borrow_time','until_time','until_date','note','status','updateBy', 'note','phone','nama_pengguna','dosen_id'],
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
                    }

                ]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getBorrowroomByIdEL = async(req, res) =>{
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
                attributes:['uuid','nama_kegiatan','nama','ruangan','borrow_date','borrow_time','until_time','until_date','note','status','updateBy', 'note','phone','nama_pengguna','jumlah_pengguna','dosen_id','email'],
                where:{
                    id: borrowroom.id
                },
                include:[{
                    model: Users,
                    attributes:['nama', 'role','id','jur_id']
                }]
            });
        }else {
          response = await Borrow_room.findOne({
              attributes:['uuid','nama_kegiatan','nama','ruangan','borrow_date','borrow_time','until_time','until_date','note','status','updateBy', 'note','phone','nama_pengguna','jumlah_pengguna','dosen_id','email'],
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

export const createBorrowroomEL = async(req, res) =>{
    const {nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,nama_pengguna,jumlah_pengguna,email} = req.body;
    try {
        await Borrow_room.create({
            nama:nama,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            jumlah_pengguna: jumlah_pengguna,
            ruangan: ruangan,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 0,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            borrow_time: borrow_time,
            until_time: until_time,
            prodi_id: prodi_id,
            phone: phone,
            email:email
        });
        res.status(201).json({msg: "Pengajuan Ditambahkan."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBorrowroomDosenEL = async(req, res) =>{
    const {nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,nama_pengguna,jumlah_pengguna,email} = req.body;
    try {
        await Borrow_room.create({
            nama:nama,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            jumlah_pengguna: jumlah_pengguna,
            ruangan: ruangan,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 1,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            borrow_time: borrow_time,
            until_time: until_time,
            prodi_id: prodi_id,
            phone: phone,
            email:email
        });
        res.status(201).json({msg: "Pengajuan Ditambahkan."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBorrowroomTUEL = async(req, res) =>{
    const {nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,nama_pengguna,jumlah_pengguna,email} = req.body;
    try {
        await Borrow_room.create({
            nama:nama,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            jumlah_pengguna: jumlah_pengguna,
            ruangan: ruangan,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 0,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            borrow_time: borrow_time,
            until_time: until_time,
            prodi_id: prodi_id,
            phone: phone,
            email:email
        });
        res.status(201).json({msg: "Pengajuan Ditambahkan."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateBorrowroomEL = async(req, res) =>{
    try {
        const borrowroom = await Borrow_room.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!borrowroom) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,nama_pengguna,jumlah_pengguna,status,email} = req.body;
        if(req.role === 3 || req.role === 5 ||req.role === 9 ||req.role === 1 ||req.role === 8||req.role === 4){
            await Borrow_room.update({nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,status,nama_pengguna,jumlah_pengguna,email,updateBy: req.uuid},{
                where:{
                    id: borrowroom.id
                }
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
            await Borrow_room.update({nama_kegiatan,nama, ruangan,dosen_id,jur_id, prodi_id,phone,borrow_date,until_date,borrow_time,until_time,nama_pengguna,jumlah_pengguna,status,email,updateBy: req.uuid},{
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

export const deleteBorrowroomEL = async(req, res) =>{
    try {
        const borrowroom = await Borrow_room.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!borrowroom) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_kegiatan, ruangan_id,dosen_id,jur_id, prodi_id} = req.body;
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

export const checkRoomAvailabilityEL = async (req, res) => {
    try {
      const { ruangan, borrow_date, until_date,jumlah_pengguna,borrow_time,until_time } = req.body;
      const borrowDate = moment.tz(borrow_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const untilDate = moment.tz(until_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const borrowTime = moment.tz(borrow_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      const untilTime = moment.tz(until_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
  
      // Pengecekan jumlah_pengguna lebih besar dari max_pengguna ruangan
      const roomInfo = await Room.findOne({
        where: {
          id: ruangan,
        },
      });
  
      if (jumlah_pengguna > roomInfo.max_people) {
        return res.status(200).json({
          available: false,
          errorMessage: "Jumlah pengguna melebihi batas maksimal ruangan",
        });
      }

       // Pengecekan peminjaman yang sudah ada untuk sesi tertentu
       const existingBookings = await Borrow_room.findAll({
        where: {
            ruangan: ruangan,
            [Op.or]: [
                { 
                    [Op.and]: [
                        { borrow_date: { [Op.lte]: borrowDate } },
                        { until_date: { [Op.gte]: borrowDate } },
                        { 
                            [Op.or]: [
                                { 
                                    [Op.and]: [
                                        { borrow_time: { [Op.lte]: borrowTime } },
                                        { until_time: { [Op.gte]: borrowTime } }
                                    ]
                                },
                                { 
                                    [Op.and]: [
                                        { borrow_time: { [Op.lte]: borrowTime } },
                                        { until_time: { [Op.gte]: borrowTime } }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ],
        },
    });
    const approvedBookings = await Borrow_room.findAll({
        where: {
          status: 0,
          ruangan: ruangan,
          [Op.or]: [
            { [Op.and]: [{ borrow_date: { [Op.lte]: borrowDate } }, { until_date: { [Op.gte]: borrowDate } }] },
            { [Op.and]: [{ borrow_date: { [Op.lte]: untilDate } }, { until_date: { [Op.gte]: untilDate } }] },
            { [Op.and]: [{ borrow_date: { [Op.gte]: borrowDate } }, { until_date: { [Op.lte]: untilDate } }] },
          ],
        },
      });
       
     /*  if (existingBookings.length > 0) {
        // Check if any existing booking has status 5
        const hasStatus5 = existingBookings.some((booking) => booking.status === 5);
  
        if (hasStatus5) {
          return res.status(200).json({
            available: false,
            errorMessage:  `Ruangan ${ruangan} pada jam sudah dipinjam.`,
          });
        }
  
        // Allow booking if none of the existing bookings has status 5
        return res.status(200).json({ available: true });
      }
       */

      // Pengecekan jumlah pengguna total dan sesi yang sama
      const totalUsersWithStatus5 = approvedBookings.reduce((acc, booking) => {
        return booking.status === 5 ? acc + booking.jumlah_pengguna : acc;
      }, 0);
      
      const totalUsers = totalUsersWithStatus5 + existingBookings.reduce((acc, booking) => {
        // Only include existing bookings with status 5 in the total count
        return booking.status === 5 ? acc + booking.jumlah_pengguna : acc;
      }, 0) + parseInt(jumlah_pengguna);
      
      // Check if the total number of users with status 5 is greater than the maximum limit
      if (totalUsersWithStatus5 > roomInfo.max_people) {
        // Reject the new booking if the maximum limit for status 5 is reached
        return res.status(200).json({
          available: false,
          errorMessage: `Jumlah pengguna pada ruangan ini sudah mencapai atau melebihi batas maksimal.`,
        });
      }
      
      // Check if the total number of users is greater than or equal to the overall maximum limit
      if (totalUsers > roomInfo.max_people) {
        // Reject the new booking if the overall maximum limit is reached
        return res.status(200).json({
          available: false,
          errorMessage: `Jumlah pengguna pada ruangan melebihi kapasitas tersedia /ruangan telah dibooking .`,
        });
      }
  
      res.status(200).json({ available: true });
    } catch (error) {
      console.error("Error checking room availability:", error);
      res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  };