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
import Button from '@mui/material/Button';
import { PDFDownloadLink, Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

const styles = StyleSheet.create({
  content: {
    fontSize: 12,
    margin: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    paddingTop: 5,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  date: {
    fontSize: 12,

  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 1,
    marginTop: 15,
    flex: 1,
  },
  isi: {
    fontSize: 10,
    margin: 30,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    marginLeft: 30,
    marginRight: 30
  },
  tableRow: {
    // margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "40%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12
  },
  tableInfo: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 10,
    padding: 6
  },
  tablettd: {
    width: "55%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: 'center',
  },
  tableMengetahui: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: 'center'
  },

  tableColHeader1: {
    width: "170px",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12
  },
  tableIsiacara: {
    width: "100%",
    borderStyle: "solid",
    borderTopWidth: 1,
    fontSize: 12,
    textAlign: 'left'
  },
  tableIsiacara1: {
    width: "100%",
    borderStyle: "solid",
    borderTopWidth: 1,
    fontSize: 12,
    textAlign: 'left'
  },
  tableCol: {
    width: "5%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12
  },
  tableColl: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontSize: 12
  },
  image: {
    paddingBottom: 10,
    marginHorizontal: 20,
    width: "100%"
  },
  signatureGambar: {
    flexDirection: 'row',

  },
  tableTembusan: {
    width: "40%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: 'center'
  },
  tableAcara: {
    width: "40%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: 'center',
  },
  tableKet: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: 'center'
  },
  Namattd: {
    textAlign:'left',
    marginRight:100,
  }
});

const FormEditBorrow = () => {
  const [theme, colorMode] = useMode();
  const [nama_kegiatan, setNama_kegiatan] = useState("");
  const [nama_peminjam, setNama_peminjam] = useState("");
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
  const [dosen_id, setDosen_id] = useState("");
  const [until_date, setUntil_date] = useState("");
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfData, setPdfData] = useState([]);
  


  const handleGeneratePDF = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1000); // Simulate generating the PDF, you can replace this with actual PDF generation logic
  };

  const handleChange = (event) => {
    setStatus(parseInt(event.target.value));
  };

 
  const MyDocument = ({data}) => {
    console.log(data)
    return(
    <Document>
      <Page size="A4" style={styles.body}>
        {data.map((item, index) => (
          <React.Fragment>
            <View key={index} style={styles.content}>
              <Image
                style={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Logo_Politeknik_Negeri_Batam.png" // Ganti dengan URL logo yang valid
              />
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.subtitle}>
                  No.BO.27.2.1-V5 Borang Permintaan Penyelengaraan Kegiatan
                </Text>
                <Text style={styles.date}>4 Agustus 2021</Text>
                <View style={styles.line} />
              </View>
            </View>
            <Text style={styles.isi}>Identitas Acara</Text>
            <View>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Nama Kegiatan</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.nama_kegiatan}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Hari/Tanggal/Bln/Thn</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.borrow_date}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Jam</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.sesi}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Penanggung Jawab</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.dosen_id}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Pendamping Acara/Peserta</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.dosen_id}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Pendamping Kegiatan /Pembawa Acara (MC)</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.nama_peminjam}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Jumlah Tamu</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.jumlah_pengguna} Orang</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Sifat</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
  
                    <Text>  <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> Acara Polibatam</Text>
                    <Text> <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> Acara Mahasiswa</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Tempat Kegiatan</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>{item.ruangan}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader1}>
                    <Text> Sususan Acara (standart)</Text>
                    <Text>   -Pembukaan</Text>
                    <Text>   -Laporan</Text>
                    <Text>   -Sambutan-sambutan</Text>
                    <Text>   -Penyerahan cindera mata</Text>
                    <Text>   -Doa</Text>
                    <Text>   -Penutup</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableAcara}>
                    <Text>Acara</Text>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Persentasi Profil</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Diskusi</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Kunjungan /Silaturahmi</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Promosi</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Lain-lain</Text>
                    </View>
                  </View>
                  <View style={styles.tableKet}>
                    <Text>Keterangan</Text>
                    <View style={styles.tableIsiacara}>
                      <Text> </Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> </Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> </Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> </Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.isi}>Persiapan</Text>
            <View>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader1}>
                    <Text> Penugasan</Text>
  
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableAcara}>
                    <Text>Kegiatan</Text>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Persiapan Ruangan</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Persiapan Dokumentasi</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Kunjungan di area Politeknik</Text>
                    </View>
                    <View style={styles.tableIsiacara1}>
                      <Text> <Image
                        style={{ width: 10, height: 10, marginRight: 5 }}
                        source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                      /> Transportasi (Lain-lain)</Text>
                    </View>
  
                  </View>
                  <View style={styles.tableKet}>
                    <Text>PIC/Keterangan</Text>
                    <View style={styles.tableIsiacara}>
                      <Text> BMN</Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> Humas</Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> Humas/Unit terkait</Text>
                    </View>
                    <View style={styles.tableIsiacara}>
                      <Text> BMN</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Konsumsi</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
  
                    <Text>  <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> Snack Box + coffe & tea + aqua</Text>
                    <Text> <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> Buffet snack + coffe & tea+Aqua</Text>
                    <Text> <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> Makan Siang/Malam (box/buffet+ coffe &tea+aqua)</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text> Cindermata</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text> :</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text>  <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> __________  jumlah: ______</Text>
                    <Text> <Image
                      style={{ width: 10, height: 10, marginRight: 5 }}
                      source={'https://cdn.icon-icons.com/icons2/2714/PNG/512/rectangle_thin_icon_171559.png'}
                    /> __________  jumlah: ______</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableMengetahui}>
                    <Text>Mengetahui</Text>
                  </View>
                  <View style={styles.tableTembusan}>
                    <Text>Tembusan</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tablettd}>
                    <Text> Penanggung Jawab,
                      <View style={styles.signatureGambar}>
                        <Image
                          style={{ width: 100, height: 100, marginRight: 5 }}
                          src="https://thumbs.dreamstime.com/b/approved-stamp-approved-web-icon-black-isolated-white-background-vector-illustration-approved-stamp-black-isolated-white-134340691.jpg"
                        />
                      </View>
                    </Text>
                      <Text>{item.dosen_id}</Text>
                  </View>
                  <View style={styles.tablettd}>
                    <Text> Mengetahui,*
                      <View style={styles.signatureGambar}>
                        <Image
                          style={{ width: 100, height: 100, marginRight: 5 }}
                          src="https://thumbs.dreamstime.com/b/approved-stamp-approved-web-icon-black-isolated-white-background-vector-illustration-approved-stamp-black-isolated-white-134340691.jpg"
                        />
                      </View>
                    </Text>
                     <Text>Fuliza Lubis</Text>
                  </View>
                  <View style={styles.tableColl}>
                    <Text> -PAMDAL</Text>
                    <Text> -Sttaf BMN</Text>
                    <Text> -Sttaf Humas</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableInfo}>
                    <Text> * Kegiatan mahasiswa dan kegiatan yang memerlukan bantuan sarana/prasarana/protokoler,kolom"Mengetahui"diketahui oleh Koordinator Umum</Text>
                    <Text> * Kegiatan promosi wajib membuat laporan kegiatan dan copy laporan kegiatan diserahkan ke Koordinator Umum</Text>
                  </View>
                </View>
              </View>
            </View>
  
          </React.Fragment>
        ))}
      </Page>
    </Document>)
  } 


  useEffect(() => {
    const getBorrowroomByIdIF = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/BorrowroomByIdIF/${id}`
        );

        setNama_kegiatan(response.data.nama_kegiatan);
        setNama_peminjam(response.data.nama_peminjam);
        setJumlah_pengguna(response.data.jumlah_pengguna);
        setBarang(response.data.barang);
        setRuangan(response.data.ruangan);
        setNote(response.data.note);
        setDosen_id(response.data.dosen_id);
        setSesi(response.data.sesi);
        setNama_pengguna(response.data.nama_pengguna);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setStatus(response.data.status);
        setBorrow_date(response.data.borrow_date);

          // Konversi borrow_date ke objek Day.js
      const borrowDateObject = dayjs(response.data.borrow_date);

      // Format tanggal sebagai "Senin, 14 Agustus 2023"
      const formattedDate = borrowDateObject.locale('id').format('dddd, D MMMM YYYY');

        setPdfData([
          {
            nama_kegiatan: response.data.nama_kegiatan,
            dosen_id:response.data.user.nama,
            ruangan:response.data.room.ruangan,
            sesi:response.data.sesi_if.sesi,
            jumlah_pengguna:response.data.jumlah_pengguna,
            nama_peminjam:response.data.nama_peminjam,
            borrow_date: formattedDate, // Menggunakan tanggal yang sudah diformat
            phone: response.data.phone,
            email: response.data.email,
          },
        ]);
        const borrowDate = dayjs.utc(response.data.borrow_date);
        setBorrow_date(borrowDate)
        const untilDate = dayjs.utc(response.data.until_date);
        setUntil_date(untilDate)

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
        nama_peminjam: nama_peminjam,
        jumlah_pengguna: jumlah_pengguna,
        barang: barang,
        ruangan: ruangan,
        note: note,
        status: status,
        sesi: sesi,
        phone: phone,
        email: email,
        dosen_id: dosen_id,
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
                            value={nama_peminjam}
                            onChange={(e) => setNama_peminjam(e.target.value)}
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
                              format="DD/MM/YYYY"
                              value={borrow_date}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setBorrow_date(value)}
                            />
                            <DatePicker
                              label="Sampai Tanggal"
                              format="DD/MM/YYYY"
                              value={until_date}
                              timezone="Asia/Jakarta"
                              onChange={(value) => setUntil_date(value)}
                            />
                          </LocalizationProvider>

                          <div>
                            <div className="control">
                              {user && (user.role === 4 || user.role === 5 || user.role === 3 || user.role === 9) && (
                                <span className="mr-5 has-text-weight-medium">Status Persetujuan Peminjamaan:</span>
                              )}
                              {user && (user.role === 4) && (
                                <label className="radio">
                                  <input
                                    type="radio"
                                    name="answer"
                                    checked={status === 0}
                                    value="0"
                                    onChange={handleChange}
                                  />
                                  Menunggu Verifikasi Dosen Pembimbing
                                </label>
                              )}
                              {user && (user.role === 4 || user.role === 5) && (
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
                              )}
                              {user && (user.role === 3 || user.role === 5) && (
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
                              )}
                              {user && (user.role === 3 || user.role === 9) && (
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
                              )}
                              {user && (user.role === 9) && (
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
                              )}
                              {user && (user.role === 9) && (
                                <label className="radio">
                                  <input
                                    type="radio"
                                    name="answer"
                                    checked={status === 5}
                                    value="5"
                                    onChange={handleChange}
                                  />
                                  Ruangan Dapat Digunakan
                                </label>
                              )}
                            </div>
                          </div>
                          {user && status === 5 && (
                            <div>
                              <button onClick={handleGeneratePDF} disabled={isGenerating}>
                                {isGenerating ? 'Generating...' : 'Generate PDF'}
                              </button>
                              {isGenerating ? null : (
                                <PDFDownloadLink document={<MyDocument data={pdfData} />} fileName="document.pdf" >
                                  {({ loading }) =>
                                    loading ? 'Loading document...' : 'Download PDF'
                                  }
                                </PDFDownloadLink>
                              )}
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
