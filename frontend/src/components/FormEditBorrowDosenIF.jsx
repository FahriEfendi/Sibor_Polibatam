import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider,Box } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);




const FormEditBorrow = () => {
  const [theme, colorMode] = useMode();
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [nama, setNama] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("0");
  const [sesi, setSesi] = useState("");
  const [nama_pengguna, setNama_pengguna] = useState("");
  const [jumlah_pengguna, setJumlah_pengguna] = useState("");
  const [barang, setBarang] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    setStatus(parseInt(event.target.value));
  };

  useEffect(() => {
    const getBorrowroomByIdIF = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/BorrowroomByIdIF/${id}`
        );

        setNama_kegiatan(response.data.nama_kegiatan);
        setNama(response.data.nama);
        setJumlah_pengguna(response.data.jumlah_pengguna);
        setBarang(response.data.barang);
        setRuangan(response.data.ruangan);
        setNote(response.data.note);
        setSesi(response.data.sesi);
        setNama_pengguna(response.data.nama_pengguna);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setStatus(response.data.status);
        const borrowDate = dayjs.utc(response.data.borrow_date);
        setBorrow_date(borrowDate)
        const untilDate = dayjs.utc(response.data.until_date);
        setUntil_date(untilDate)
        console.log(response)


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBorrowroomByIdIF();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/BorrowroomIF/${id}`, {
        nama_kegiatan: nama_kegiatan,
        nama:nama,
        jumlah_pengguna: jumlah_pengguna,
        barang: barang,
        ruangan: ruangan,
        note: note,
        status: status,
        sesi: sesi,
        phone: phone,
        email: email,
        nama_pengguna: nama_pengguna,
        borrow_date: borrow_date,
        until_date: until_date
      });


      navigate("/daftarpinjamanif");
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
              <title>SIBor | Ubah Pengajuan</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <div>
                  <h1 className="title">Ubah Pengajuan Ruangan</h1>
                  <h2 className="subtitle">Ubah Pengajuan</h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form onSubmit={updateProduct}>
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
                            id="outlined-controlled"
                            label="Nama Kegiatan"
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
                            id="outlined-controlled"
                            label="Nama Pengguna Ruangan"

                            value={nama_pengguna}
                            onChange={(e) => setNama_pengguna(e.target.value)}
                            InputLabelProps={{
                              shrink: true,
                            }}
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
                          <TextField fullWidth
                            label="Catatan"
                            id="fullWidth"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          />
                           <br />
                          <br />
                          <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker
                              label="Tanggal Pinjam"
                              format="YYYY/MM/DD"
                              value={borrow_date}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setBorrow_date(value)}
                            />
                            <DatePicker
                              label="Sampai Tanggal"
                              format="YYYY/MM/DD"
                              value={until_date}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setUntil_date(value)}
                            />
                          </LocalizationProvider>
                          {user && (user.role === 1 || user.role === 3 ||user.role === 5 ||user.role === 9 || user.role === 4) && (
                          <div>
                            <div className="control">
                              <span className="mr-5 has-text-weight-medium">Status Persetujuan Peminjamaan:</span>
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="answer"
                                  checked={status === 1}
                                  value="1"
                                  onChange={handleChange}
                                />
                                Menunggu Verifikasi Tata Usaha
                              </label>

                              <label className="radio">
                                <input
                                  type="radio"
                                  name="answer"
                                  checked={status === 2}
                                  value="2"
                                  onChange={handleChange}
                                />
                               Menunggu Verifikasi Staff BMN
                              </label>

                              <label className="radio">
                                <input
                                  type="radio"
                                  name="answer"
                                  checked={status === 3}
                                  value="3"
                                  onChange={handleChange}
                                />
                                Menunggu Verifikasi Ketua BMN
                              </label>
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="answer"
                                  checked={status === 4}
                                  value="4"
                                  onChange={handleChange}
                                />
                                Ditolak BMN
                              </label>
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="answer"
                                  checked={status === 5}
                                  value="6"
                                  onChange={handleChange}
                                />
                                Ruangan Dapat Digunakan
                              </label>
                            </div>

                          </div>
                             )}
                          <div className="field">
                          <div className="control">
                          <Button type="submit" variant="contained" color="info">
                      Simpan
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

export default FormEditBorrow;
