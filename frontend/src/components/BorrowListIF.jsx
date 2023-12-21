import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Header from "./Header";
import axios from "axios";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import View from '@mui/icons-material/RemoveRedEye';
import { useSelector } from "react-redux";
import dayjs from 'dayjs';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const [theme, colorMode] = useMode();
  const [borrow_room, setBorrow_room] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [status, setStatus] = useState("");

  const navigateToEditPage = (uuid) => {
    // Gantilah '/borrowlist/edit/' sesuai dengan path yang sesuai untuk halaman edit Anda
    navigate(`/daftarpinjamanif/edit/${uuid}`);
  };

  const navigateToViewPage = (uuid) => {
    // Gantilah '/borrowlist/edit/' sesuai dengan path yang sesuai untuk halaman edit Anda
    navigate(`/daftarpinjamanif/view/${uuid}`);
  };

  function formatDate(date) {
    const formattedDate = dayjs(date).format('DD/MM/YYYY');
    return `${formattedDate}`;
  }

  // Transform the data to include the user's name
  const transformedData = borrow_room.map(item => ({
    ...item,
    ruangan: item.room.ruangan,
    sesi: item.sesi_if.sesi
  }));

  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return <Typography variant="body2">
          <FiberManualRecordIcon  fontSize="small" color="info" />Menunggu Verifikasi Dosen
        </Typography>;
      case 1:
        return <div>
          <FiberManualRecordIcon fontSize="small" color="info" />Menunggu Verifikasi Tata Usaha
        </div>;
      case 2:
        return<Typography variant="body2">
        <FiberManualRecordIcon  fontSize="small" color="info" />Menunggu Verifikasi Staff BMN
      </Typography>;
      case 3:
        return <Typography variant="body2">
        <FiberManualRecordIcon   fontSize="small" color="info" />Menunggu Verifikasi Ketua BMN
      </Typography>;
      case 4:
        return<Typography variant="body2">
        <FiberManualRecordIcon  fontSize="small" color="info" sx={{ color: red[500] }} />Ditolak BMN
      </Typography>;
       case 5:
        return <Typography variant="body2">
        <FiberManualRecordIcon  fontSize="small" color="success" />Ruangan Dapat Digunakan
      </Typography>;
      default:
        return "Unknown";
    }
  };

  const getBorrowroomIF = async () => {
    const response = await axios.get("http://localhost:5000/BorrowroomIF");
    setBorrow_room(response.data);
  };

  const openDeleteModal = (borrowroomId) => {
    setDeleteItemId(borrowroomId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteItemId(null);
    setDeleteModalOpen(false);
  };

  const handleDelete = async (borrowroomId) => {
    await axios.delete(`http://localhost:5000/BorrowroomIF/${borrowroomId}`);
    getBorrowroomIF();
    closeDeleteModal();
  };

  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "nama_kegiatan", headerName: "Nama Kegiatan", width: 200 },
    { field: "ruangan", headerName: "Ruangan", width: 180 },
    { field: "sesi", headerName: "Sesi", width: 150 },
    { field: "borrow_date", headerName: "Tanggal Pinjam", width: 150,
      renderCell: (params) => (
        <div>{formatDate(params.value)}</div>
      ),
    },
    { field: "until_date", headerName: "Tanggal Selesai", width: 150, renderCell: (params) => (
      <div>{formatDate(params.value)}</div>
    ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div>{getStatusLabel(params.value)}</div>
      ),
    },
    { field: "note", headerName: "Catatan", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div>
          {user && status === 5 && (
            <IconButton onClick={() => navigateToEditPage(params.row.uuid)}>
              <DescriptionIcon />
            </IconButton>
            )}
          <IconButton onClick={() => navigateToViewPage(params.row.uuid)}>
            <View />
          </IconButton>
          {user && (user.role === 1 || user.role === 3 || user.role === 5 || user.role === 9 || user.role === 4 || user.role === 8 || user.role === 2) && (
            <IconButton onClick={() => navigateToEditPage(params.row.uuid)}>
              <EditIcon />
            </IconButton>
          )}
          {user && (user.role === 1 || user.role === 3 || user.role === 8 || user.role === 9 || user.role === 5 || user.role === 4 || user.role === 2) && (
            <IconButton onClick={() => openDeleteModal(params.row.uuid)}>
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/BorrowroomIF")
      .then(response => {
        setBorrow_room(response.data);
      })
      .catch(error => {
        console.error("Error mengambil data:", error);
      });
  }, []);



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>SIBor | DaftarPeminjamanIF</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Header title="DaftarPinjamanIF " subtitle="Daftar Terbaru" />
                  {user && (user.role === 1 || user.role === 2 ) && (
                  <Button href="/daftarpinjamanif/add" variant="contained" color="success">
                    New
                  </Button>
                     )}
                      {user && (user.role === 1 || user.role === 4 ) && (
                  <Button href="/daftarpinjamanif/dosen/add" variant="contained" color="success">
                    New
                  </Button>
                     )}
                     {user && (user.role === 1 || user.role === 5 ) && (
                  <Button href="/daftarpinjamanif/tu/add" variant="contained" color="success">
                    New
                  </Button>
                     )}
                </Box>
                <Box
                  m="8px 0 0 0"
                  height="80vh"
                  sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                >
                  <DataGrid
                    rows={transformedData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    checkboxSelection
                    disableRowSelectionOnClick
                    getRowId={(row) => row.uuid}
                  />
                </Box>
              </Box>
              <div>
                <Dialog open={isDeleteModalOpen} onClose={closeDeleteModal}>
                  <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Apakah Anda yakin ingin menghapus pengajuan ini?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeDeleteModal} color="primary">
                      Batal
                    </Button>
                    <Button onClick={() => handleDelete(deleteItemId)} color="primary">
                      Ya, Hapus
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Team;
