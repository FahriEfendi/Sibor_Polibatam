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
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';


import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);



const FormViewBorrow = () => {
  const [theme, colorMode] = useMode();
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [jumlah_pengguna, setJumlah_pengguna] = useState("");
  const [barang, setBarang] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("0");
  const [sesi, setSesi] = useState("");
  const [nama_pengguna, setNama_pengguna] = useState("");
  const [phone, setPhone] = useState("");
  const [borrow_date, setBorrow_date] = useState("");
  const [borrow_time, setBorrow_time] = useState("");
  const [dosen_id, setDosen_id] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [until_time, setUntil_time] = useState("");
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams();


  const handleChange = (event) => {
    setStatus(parseInt(event.target.value));
  };


  useEffect(() => {
    const getBorrowroomByIdAudit = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/BorrowroomByIdAudit/${id}`
        );

        setNama_kegiatan(response.data.nama_kegiatan);
        setJumlah_pengguna(response.data.jumlah_pengguna);
        setBarang(response.data.barang);
        setRuangan(response.data.ruangan);
        setNote(response.data.note);
        setDosen_id(response.data.dosen_id);
        setSesi(response.data.sesi);
        setNama_pengguna(response.data.nama_pengguna);
        setPhone(response.data.phone);
        setStatus(response.data.status); // Set state dengan nilai integer dari database
        const borrowDate = dayjs.utc(response.data.borrow_date);
        setBorrow_date(borrowDate)
        const untilDate = dayjs.utc(response.data.until_date);
        setUntil_date(untilDate)
        const borrowTime = dayjs.utc(response.data.borrow_time, 'HH:mm:ss');
        setBorrow_time(borrowTime)
        const untilTime = dayjs.utc(response.data.until_time, 'HH:mm:ss');
        setUntil_time(untilTime)
        console.log(response)


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBorrowroomByIdAudit();
  }, [id]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>SIBor | Lihat Pengajuan</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <div>
                  <h1 className="title">Lihat Pengajuan Ruangan</h1>
                  <h2 className="subtitle">Lihat Pengajuan</h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form>
                          <p className="has-text-centered">{msg}</p>
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
                              <MenuItem value={1}>Auditorium</MenuItem>
                             

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
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Penanggung Jawab Kegiatan</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={dosen_id}
                              label="Penanggung Jawab Kegiatan"
                              onChange={(e) => setDosen_id(e.target.value)}
                            >
                              <MenuItem value={14}>Adhitomo Wirawan, S.ST., M.BA</MenuItem>
                              <MenuItem value={15}>Adi Irawan Setiyanto, S.E., M.Ec.Dev.</MenuItem>
                              <MenuItem value={16}>Aditya Wirangga Pratama, M.AB</MenuItem>
                              <MenuItem value={17}>Bambang Hendrawan, S.T., M.S.M.</MenuItem>
                              <MenuItem value={18}>Dr. Muhammad Zaenuddin, S.Si., M.Sc.</MenuItem>

                            </Select>
                          </FormControl>

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
                            <TimePicker
                              label="Mulai Jam"
                              value={borrow_time}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setBorrow_time(value)}
                            />
                            <DatePicker
                              label="Sampai Tanggal"
                              format="YYYY/MM/DD"
                              value={until_date}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setUntil_date(value)}
                            />
                            <TimePicker
                              label="Hingga Jam"
                              value={until_time}
                              timezone="Asia/Jakarta"

                              onChange={(value) => setUntil_time(value)}
                            />
                          </LocalizationProvider>
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

export default FormViewBorrow;
