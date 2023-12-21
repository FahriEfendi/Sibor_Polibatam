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
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const AddBorrowMB = () => {
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [nama, setNama] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [until_time, setUntil_time] = useState("");
  const [nama_pengguna, setNama_pengguna] = useState("");
  const [dosen_id, setDosen_id] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [borrow_time, setBorrow_time] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const saveBorrow = async (e) => {
    e.preventDefault();
    try {
      const borrowDate = moment.tz(borrow_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const untilDate = moment.tz(until_date, "YYYY-MM-DD", "Asia/Jakarta").format("YYYY-MM-DD");
      const borrowTime = moment.tz(borrow_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      const untilTime = moment.tz(until_time, "HH:mm:ss", "Asia/Jakarta").format("HH:mm:ss");
      await axios.post("http://localhost:5000/BorrowroomTuMB", {
        nama_kegiatan: nama_kegiatan,
        nama: nama,
        ruangan: ruangan,
        status: status,
        nama_pengguna: nama_pengguna,
        phone: phone,
        email: email,
        borrow_date: borrowDate,
        until_date: untilDate,
        borrow_time: borrowTime,
        until_time: untilTime
      });

       // Tampilkan modal "Pengajuan Berhasil" setelah berhasil menyimpan data
       handleOpen();

       // Set timeout selama 3 detik sebelum melakukan navigasi
       setTimeout(() => {
         navigate("/daftarpinjamanmb");
       }, 3000);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
                              <MenuItem value={1}>TA.31 - Ruang Kelas Biasa</MenuItem>
                              <MenuItem value={2}>TA.32 - Lab Komputer Layout Perkantoran</MenuItem>
                              <MenuItem value={3}>TA.51 - Studio Broadcast</MenuItem>
                              <MenuItem value={4}>TA.52 - Lab Komputer</MenuItem>
                              <MenuItem value={5}>TA.53 - Lab Komputer</MenuItem>
                              <MenuItem value={6}>TA.54 - Lab Komputer</MenuItem>
                              <MenuItem value={7}>TA.55 - Studio Blended Learning</MenuItem>
                              <MenuItem value={8}>TA.56 - Lab Komputer</MenuItem>
                              <MenuItem value={9}>TA.61 - Ruang Kelas Biasa</MenuItem>
                              <MenuItem value={10}>TA.62 - Ruang Kelas Biasa</MenuItem>

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
                              <Button type="submit" variant="contained" color="success" onClick={handleOpen}>
                                Buat
                              </Button>
                            </div>
                          </div>
                          <div>
                           
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Pesan
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                  Pengajuan Berhasil Dibuat!
                                </Typography>
                              </Box>
                            </Modal>
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

export default AddBorrowMB;