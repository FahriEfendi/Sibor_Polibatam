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


const FormEditUser = () => {
  const [nama, setNama] = useState("");
  const [jur_id, setJur_id] = useState("");
  const [nim_nik, setNim_nik] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [theme, colorMode] = useMode();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setNama(response.data.nama);
        setNim_nik(response.data.nim_nik);
        setRole(response.data.role);
        setJur_id(response.data.jur_id);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama: nama,
        nim_nik: nim_nik,
        password: password,
        confPassword: confPassword,
        role: role,
        jur_id: jur_id
      });
      navigate("/users");
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
              <title>SIBor | Ubah Pengguna</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <div>
                  <h1 className="title">Ubah Pengguna</h1>
                  <h2 className="subtitle">Update User</h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form onSubmit={updateUser}>
                          <p className="has-text-centered">{msg}</p>
                          <TextField fullWidth
                            label="Nama Lengkap"
                            id="fullWidth"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                          />
                         <br />
                          <br />
                          <TextField fullWidth
                            label="NIM/NIK"
                            id="fullWidth"
                            value={nim_nik}
                            onChange={(e) => setNim_nik(e.target.value)}
                          />
                           <br />
                          <TextField
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required // This attribute makes the field required
                          />
                          <TextField
                            type="password"
                            label="Konfrimasi Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required // This attribute makes the field required
                          />
                           <br />
                          <br />
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Jurusan</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={jur_id}
                              label="Jurusan"
                              onChange={(e) => setJur_id(e.target.value)}
                            >
                              <MenuItem value={1}>Teknik Informatika</MenuItem>
                              <MenuItem value={2}>Teknik Mesin</MenuItem>
                              <MenuItem value={3}>Manajemen Bisnis</MenuItem>
                              <MenuItem value={4}>Teknik Elektro</MenuItem>
                              <MenuItem value={5}>Admin</MenuItem>
                             
                            </Select>
                          </FormControl>
                          <br />
                          <br />
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={role}
                              label="Role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                             <MenuItem value={1}>Admin</MenuItem>
                              <MenuItem value={2}>Mahasiswa</MenuItem>
                              <MenuItem value={3}>BMN</MenuItem>
                              <MenuItem value={4}>Dosen</MenuItem>
                              <MenuItem value={5}>Tata Usaha</MenuItem>
                              <MenuItem value={6}>PAMDAL</MenuItem>
                              <MenuItem value={7}>Kalab</MenuItem>
                              <MenuItem value={8}>PIC Lab</MenuItem>
                              <MenuItem value={9}>Ketua BMN</MenuItem>

                            </Select>
                          </FormControl>
                          <br />
                          <br />
                          <div className="field">
                            <div className="control">
                              <button type="submit" className="button is-success">
                                Update
                              </button>
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

export default FormEditUser;
