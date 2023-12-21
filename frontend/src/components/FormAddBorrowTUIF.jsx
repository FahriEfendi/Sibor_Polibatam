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
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const AddBorrowIF = () => {
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [nama, setNama] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [sesi, setSesi] = useState("");
  const [nama_pengguna, setNama_pengguna] = useState("");
  const [jumlah_pengguna, setJumlah_pengguna] = useState("");
  const [barang, setBarang] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
      await axios.post("http://localhost:5000/BorrowroomTuIF", {
        nama_kegiatan: nama_kegiatan,
        nama: nama,
        ruangan: ruangan,
        status: status,
        sesi: sesi,
        nama_pengguna: nama_pengguna,
        jumlah_pengguna: jumlah_pengguna,
        barang: barang,
        phone: phone,
        email: email,
        borrow_date: borrowDate,
        until_date: untilDate
      });

      // Tampilkan modal "Pengajuan Berhasil" setelah berhasil menyimpan data
      handleOpen();

      // Set timeout selama 3 detik sebelum melakukan navigasi
      setTimeout(() => {
        navigate("/daftarpinjamanif");
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
                            required
                            onChange={(e) => setNama(e.target.value)}
                            
                          />
                          <br />
                          <br />
                          <TextField fullWidth
                            label="Nama Kegiatan"
                            id="fullWidth"
                            value={nama_kegiatan}
                            required
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
                              <MenuItem value={1}>601 - Workspace Multimedia</MenuItem>
                              <MenuItem value={2}>601 - Workspace Virtual Reality</MenuItem>
                              <MenuItem value={3}>604 - Workspace Multimedia</MenuItem>
                              <MenuItem value={4}>606 - Workspace Rendering</MenuItem>
                              <MenuItem value={5}>607 - Lab Motion Capture</MenuItem>
                              <MenuItem value={6}>608 - Workspace Rendering</MenuItem>
                              <MenuItem value={7}>702 - Lab Komputer/Praktikum</MenuItem>
                              <MenuItem value={8}>704 - Workspace Software Development</MenuItem>
                              <MenuItem value={9}>705 - Workspace Animation Production</MenuItem>
                              <MenuItem value={10}>706 - Workspace Software Development</MenuItem>

                            </Select>
                          </FormControl>

                          <br />
                          <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Jam Mulai</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={sesi}
                              label="Jam Mulai"
                              onChange={(e) => setSesi(e.target.value)}
                            >
                              <MenuItem value={1}>08:00 - 12:00</MenuItem>
                              <MenuItem value={2}>13:00 - 17:00</MenuItem>
                              <MenuItem value={3}>18:00 - 22:00</MenuItem>


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
                            <DatePicker
                              type="datetime-local"
                              label="Hingga Tanggal"
                              value={until_date}
                              format="YYYY/MM/DD"
                              onChange={(value) => setUntil_date(value.format("YYYY-MM-DDTHH:mm"))}
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

export default AddBorrowIF;