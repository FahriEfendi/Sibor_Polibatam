import Borrow_room from "../models/BorrowRoomIFmodel.js";
import Users from "../models/Usermodel.js";
import Room from "../models/Roommodel.js";
import { Op } from "sequelize";
import sesi_if from "../models/SesiIFmodel.js";
import { SMTPClient } from 'emailjs';
import moment from "moment-timezone";



export const getBorrowroomIF = async (req, res) => {
    try {
        let response;
        if ((req.role === 1 || req.role === 3 || req.role === 5 || req.role === 9 || req.role === 6 || req.role === 8) && req.jur_id === 1 || req.jur_id === 5) {
            response = await Borrow_room.findAll({
                attributes: ['uuid', 'nama_kegiatan', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note', 'sesi'],

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
                attributes: ['uuid', 'nama_kegiatan', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note', 'sesi'],
                where: {
                    [Op.or]: [
                        { userId: req.userId },
                        { dosen_id: req.userId },
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

export const getBorrowroomByIdIF = async (req, res) => {
    try {
        const borrowroom = await Borrow_room.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!borrowroom) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === 3 || req.role === 5 || req.role === 9 || req.role === 1 || req.role === 8 || req.role === 6 || req.role === 4) {
            response = await Borrow_room.findOne({
                attributes: ['uuid', 'nama_kegiatan', 'nama_peminjam', 'ruangan', 'status', 'borrow_date', 'until_date', 'updateBy', 'note', 'sesi', 'phone', 'nama_pengguna', 'dosen_id', 'email', 'jumlah_pengguna'],
                where: {
                    id: borrowroom.id
                },
                include: [{
                    model: Users,
                    attributes: ['nama', 'role', 'id', 'jur_id']
                },
                {
                    model: sesi_if,
                    attributes: ['sesi']
                },
                {
                    model: Room,
                    attributes: ['ruangan']
                },]
            });

        } else {
            response = await Borrow_room.findOne({
                attributes: ['uuid', 'nama_kegiatan', 'nama_peminjam', 'ruangan', 'status', 'borrow_date', 'until_date', 'sesi', 'updateBy', 'note', 'sesi', 'phone', 'nama_pengguna', 'dosen_id', 'email', 'jumlah_pengguna'],
                where: {
                    [Op.and]: [{ id: borrowroom.id }, { userId: req.userId }]
                },
                include: [{
                    model: Users,
                    attributes: ['nama', 'role', 'id', 'jur_id']
                },
                {
                    model: sesi_if,
                    attributes: ['sesi']
                },
                {
                    model: Room,
                    attributes: ['ruangan']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createBorrowroomIF = async (req, res) => {
    const { nama_kegiatan, nama_peminjam, ruangan, dosen_id, jur_id, prodi_id, borrow_date, until_date, nama_pengguna, sesi, phone, email, jumlah_pengguna, barang } = req.body;
    try {
        // Mengambil data dosen berdasarkan dosen_id dari tabel users
        const user = await Users.findOne({
            attributes: ['email_pribadi', 'nama'], // Pilih kolom yang ingin Anda ambil
            where: {
                id: dosen_id,
            },
        });

        if (!user) {
            return res.status(404).json({ msg: 'Dosen tidak ditemukan.' });
        }

        const { email_pribadi } = user;
        const { nama } = user;


        await Borrow_room.create({
            nama_peminjam: nama_peminjam,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            ruangan: ruangan,
            sesi: sesi,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 0,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            prodi_id: prodi_id,
            phone: phone,
            email: email,
            jumlah_pengguna: jumlah_pengguna,
            barang: barang
        });

        // Kirim email jika kondisi yang diinginkan terpenuhi
        if (!Borrow_room.email_sent) {
            const client = new SMTPClient({
                user: 'fahri.3312001092@students.polibatam.ac.id',
                password: 'Padang0795',
                host: 'smtp.office365.com',
                tls: true,
            });

            client.send(
                {
                    text: `Hai, ${nama}, Ada Verifikasi Peminjaman Ruangan Baru .`,
                    from: 'fahri.3312001092@students.polibatam.ac.id',
                    to: email_pribadi,
                    subject: 'Update Status Peminjaman',
                },
                async (err, message) => {
                    if (err) {
                        console.error('Error mengirim email:', err);
                    } else {
                        console.log('Email terkirim dengan sukses:', message);
                    }
                }
            );
        }
        res.status(201).json({ msg: "Pengajuan Ditambahkan." });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: error.message });
    }
}

export const createBorrowroomDosenIF = async (req, res) => {
    const { nama_kegiatan, nama, ruangan, dosen_id, jur_id, prodi_id, borrow_date, until_date, nama_pengguna, sesi, phone, email, jumlah_pengguna, barang } = req.body;
    try {
        await Borrow_room.create({
            nama: nama,
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
            email: email,
            jumlah_pengguna: jumlah_pengguna,
            barang: barang
        });
        res.status(201).json({ msg: "Pengajuan Ditambahkan." });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createBorrowroomTUIF = async (req, res) => {
    const { nama_kegiatan, nama, ruangan, dosen_id, jur_id, prodi_id, borrow_date, until_date, nama_pengguna, sesi, phone, email, jumlah_pengguna, barang } = req.body;
    try {
        await Borrow_room.create({
            nama: nama,
            nama_kegiatan: nama_kegiatan,
            nama_pengguna: nama_pengguna,
            ruangan: ruangan,
            sesi: sesi,
            userId: req.userId,
            dosen_id: dosen_id,
            jur_id: jur_id,
            status: 2,
            createBy: req.uuid,
            borrow_date: borrow_date,
            until_date: until_date,
            prodi_id: prodi_id,
            phone: phone,
            email: email,
            jumlah_pengguna: jumlah_pengguna,
            barang: barang
        });
        res.status(201).json({ msg: "Pengajuan Ditambahkan." });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateBorrowroomIF = async (req, res) => {
    try {
        const borrowroom = await Borrow_room.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!borrowroom) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { nama_kegiatan, nama_peminjam, ruangan, dosen_id, jur_id, prodi_id, note, borrow_date, until_date, status, nama_pengguna, sesi, phone, email, jumlah_pengguna } = req.body;
        if (req.role === 3 || req.role === 5 || req.role === 9 || req.role === 1 || req.role === 8 || req.role === 4) {
            await Borrow_room.update({ nama_kegiatan, nama_peminjam, ruangan, dosen_id, jur_id, prodi_id, sesi, nama_pengguna, status, borrow_date, until_date, email, jumlah_pengguna, note, phone, updateBy: req.uuid }, {
                where: {
                    id: borrowroom.id
                },
                include: [{
                    model: Users,
                    attributes: ['nama', 'role', 'id', 'jur_id']
                }]
            });

            if (status === 5 && !borrowroom.email_sent) {
                // Kirim email saat status adalah 6 dan email belum dikirim sebelumnya
                const client = new SMTPClient({
                    user: 'fahri.3312001092@students.polibatam.ac.id',
                    password: 'Padang0795',
                    host: 'smtp.office365.com',
                    tls: true,
                });

                client.send(
                    {
                        text: `Hai, ${nama_peminjam}, Status peminjaman ruangan Anda telah Disetujui, silahkan cek SIBor ada Update Status Peminjaman Ruangan.`,
                        from: 'fahri.3312001092@students.polibatam.ac.id',
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
                        text: `Hai, ${nama_peminjam}, Status peminjaman ruangan Anda telah Ditolak BMN, silahkan cek SIBor ada Update Status Peminjaman Ruangan.`,
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

        } else {
            if (req.userId !== borrowroom.userId) return res.status(403).json({ msg: "Akses terlarang" });
            await Borrow_room.update({ nama_kegiatan, nama_peminjam, ruangan, dosen_id, note, borrow_date, until_date, status, nama_pengguna, sesi, email, phone, jumlah_pengguna, updateBy: req.uuid }, {
                where: {
                    [Op.and]: [{ id: borrowroom.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Pengajuan berhasil diubah" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteBorrowroomIF = async (req, res) => {
    try {
        const borrowroom = await Borrow_room.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!borrowroom) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { nama_kegiatan, dosen_id, jur_id, prodi_id } = req.body;
        if (req.role === "admin", "TU") {
            await Borrow_room.destroy({
                where: {
                    id: borrowroom.id
                }
            });
        } else {
            if (req.userId !== borrowroom.userId) return res.status(403).json({ msg: "Akses terlarang" });
            await Borrow_room.destroy({
                where: {
                    [Op.and]: [{ id: borrowroom.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Pengajuan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const checkRoomAvailabilityIF = async (req, res) => {
    try {
      const { ruangan, borrow_date, until_date, sesi, jumlah_pengguna } = req.body;
      const borrowDate = moment.tz(borrow_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const untilDate = moment.tz(until_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
  
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
            sesi: sesi,
            [Op.or]: [
                { [Op.and]: [{ borrow_date: { [Op.lte]: borrowDate } }, { until_date: { [Op.gte]: borrowDate } }] },
                { [Op.and]: [{ borrow_date: { [Op.lte]: untilDate } }, { until_date: { [Op.gte]: untilDate } }] },
                { [Op.and]: [{ borrow_date: { [Op.gte]: borrowDate } }, { until_date: { [Op.lte]: untilDate } }] },
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
          errorMessage: `Jumlah pengguna pada ruangan ${ruangan} pada sesi ${sesi} yang memiliki status 5 sudah mencapai atau melebihi batas maksimal.`,
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
      
      // Continue with the logic if the room is available
      return res.status(200).json({ available: true, message: "Ruangan tersedia untuk peminjaman." });
    } catch (error) {
      console.error("Error checking room availability:", error);
      res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  };
  

















