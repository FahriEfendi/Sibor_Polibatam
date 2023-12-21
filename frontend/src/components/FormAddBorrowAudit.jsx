import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import moment from "moment-timezone";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



const AddBorrowAudit = () => {
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [nama, setNama] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [until_time, setUntil_time] = useState("");
  const [nama_pengguna, setNama_pengguna] = useState("");
  const [jumlah_pengguna, setJumlah_pengguna] = useState("");
  const [barang, setBarang] = useState("");
  const [dosen_id, setDosen_id] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [borrow_time, setBorrow_time] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);

  const checkRoomAvailability = async () => {
    try {
      const borrowDate = moment.tz(borrow_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const untilDate = moment.tz(until_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const borrowTime = moment.tz(borrow_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      const untilTime = moment.tz(until_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      const response = await axios.post("http://localhost:5000/checkRoomAvailabilityAudit", {
        ruangan: ruangan,
        borrow_time: borrowTime,
        until_time: untilTime,
        borrow_date: borrowDate,
        until_date: untilDate,
        jumlah_pengguna: jumlah_pengguna,
      });
  
      setIsRoomAvailable(response.data.available);
      return response.data; // Mengembalikan seluruh objek respons untuk digunakan di saveBorrow
    } catch (error) {
      console.error("Error checking room availability:", error);
      return { available: false, errorMessage: "Terjadi kesalahan saat memeriksa ketersediaan ruangan." };
    }
  };


  const saveBorrow = async (e) => {
    e.preventDefault();
    const result = await checkRoomAvailability();
    if (!result.available) {
      setMsg(result.errorMessage);
       return;
     }
    try {
      const borrowDate = moment.tz(borrow_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const untilDate = moment.tz(until_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const borrowTime = moment.tz(borrow_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      const untilTime = moment.tz(until_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      await axios.post("http://localhost:5000/BorrowroomAudit", {
        nama_kegiatan: nama_kegiatan,
        nama: nama,
        ruangan: ruangan,
        status: status,
        nama_pengguna: nama_pengguna,
        jumlah_pengguna: jumlah_pengguna,
        barang: barang,
        phone: phone,
        email: email,
        dosen_id: dosen_id,
        borrow_date: borrowDate,
        until_date: untilDate,
        borrow_time: borrowTime,
        until_time: untilTime
      });

      navigate("/daftarpinjamanaudit");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>SIBor | Pengajuan Ruangan</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <div>
                  <h1 className="title">Pengajuan Ruangan</h1>
                  <h2 className="subtitle">Buat Baru </h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form onSubmit={saveBorrow}>
                          <p className="has-text-centered">{msg}</p>
                          <TextField fullWidth
                            label="Nama Pengaju Ruangan"
                            id="fullWidth"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                          />
                          <br />
                          <br />
                          <TextField fullWidth
                            label="Nama Kegiatan"
                            id="fullWidth"
                            value={nama_kegiatan}
                            onChange={(e) => setNama_kegiatan(e.target.value)}
                          />
                          <br />
                          <br />
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Ruangan</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={ruangan}
                              label="Ruangan"
                              onChange={(e) => setRuangan(e.target.value)}
                            >
                              <MenuItem value={1}>Auditorium</MenuItem>
                              

                            </Select>
                          </FormControl>

                          <br />
                          <br />
                          <TextField fullWidth
                            label="Nama-Nama Pengguna Ruangan"
                            id="fullWidth"
                            value={nama_pengguna}
                            onChange={(e) => setNama_pengguna(e.target.value)}
                          />
                          <br />
                          <br />
                          <TextField fullWidth
                            label="Jumlah Pengguna Ruangan"
                            type="number"
                            id="fullWidth"
                            value={jumlah_pengguna}
                            onChange={(e) => setJumlah_pengguna(e.target.value)}
                          />
                            <br />
                          <br />
                          <TextField fullWidth
                            label="Penggunaan Barang"
                            id="fullWidth"
                            value={barang}
                            onChange={(e) => setBarang(e.target.value)}
                          />
                          <br />
                          <br />
                          <TextField fullWidth
                            label="No Tlp /WA"
                            id="fullWidth"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <br />
                          <br />
                          <TextField fullWidth
                            label="Email"
                            id="fullWidth"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <br />
                          <br />
                        
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Penanggung Jawab Kegiatan</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={dosen_id}
                              label="Penanggung Jawab Kegiatan"
                              onChange={(e) => setDosen_id(e.target.value)}
                            >
                              <MenuItem value={5}>Metta Santiputri, S.T., M.Sc., Ph.D</MenuItem>
                              <MenuItem value={6}>Uuf Brajawidagda, S.T., M.T., Ph.D</MenuItem>
                              <MenuItem value={7}>Ari Wibowo, S.T., M.T.</MenuItem>
                              <MenuItem value={12}>Ahmad Hamim Thohari, S.Tr., M.T.</MenuItem>
                              <MenuItem value={13}>Dodi Prima Resda, S.Pd., M.Kom</MenuItem>


                            </Select>
                          </FormControl>
                          <br />
                          <br />
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              type="datetime-local"
                              label="Tanggal Pinjam"
                              value={borrow_date}
                              format="YYYY/MM/DD"
                              onChange={(value) => setBorrow_date(value.format("YYYY-MM-DDTHH:mm"))}
                            />
                            <TimePicker
                              label="Mulai Jam"
                              value={borrow_time}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setBorrow_time(value.format("HH:mm:ss"))}
                            />
                            <DatePicker
                              type="datetime-local"
                              label="Hingga Tanggal"
                              value={until_date}
                              format="YYYY/MM/DD"
                              onChange={(value) => setUntil_date(value.format("YYYY-MM-DDTHH:mm"))}
                            />

                            <TimePicker
                              label="Mulai Jam"
                              value={until_time}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setUntil_time(value.format("HH:mm:ss"))}
                            />
                          </LocalizationProvider>

                          <br />
                          <br />
                          <div className="field">
                            <div className="control">
                              <Button type="submit" variant="contained" color="success">
                                Buat
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );



};

export default AddBorrowAudit;