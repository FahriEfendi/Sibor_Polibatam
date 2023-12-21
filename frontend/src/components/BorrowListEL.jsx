import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Header from "./Header";
import axios from "axios";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import View from '@mui/icons-material/RemoveRedEye';
import { useSelector } from "react-redux";
import dayjs from 'dayjs';


const Team = () => {
  const [theme, colorMode] = useMode();
  const [borrow_room, setBorrow_room] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);


  const navigateToEditPage = (uuid) => {
    // Gantilah '/borrowlist/edit/' sesuai dengan path yang sesuai untuk halaman edit Anda
    navigate(`/daftarpinjamanel/edit/${uuid}`);
  };

  const navigateToViewPage = (uuid) => {
    // Gantilah '/borrowlist/edit/' sesuai dengan path yang sesuai untuk halaman edit Anda
    navigate(`/daftarpinjamanel/view/${uuid}`);
  };
  function formatDate(date) {
    const formattedDate = dayjs(date).format('DD/MM/YYYY');
    return `${formattedDate}`;
  }

  // Transform the data to include the user's name
  const transformedData = borrow_room.map(item => ({
    ...item,
    userNama: item.user.nama,
    ruangan: item.room_el.ruangan


  }));
  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return <Typography variant="body2">
          <FiberManualRecordIcon  fontSize="small" color="info" />Menunggu Persetujuan Dosen
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
    const response = await axios.get("http://localhost:5000/BorrowroomEL");
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
  // Render actions with update and delete icons
  const renderActions = (params) => (
    <div>
    <IconButton onClick={() =>  navigateToViewPage(params.row.uuid)}>
      <View />
    </IconButton>
    {user && (user.role === 1 || user.role === 3 ||user.role === 5 ||user.role === 9 ||user.role === 4||user.role === 8||user.role === 2) && (
    <IconButton onClick={() => navigateToEditPage(params.row.uuid)}>
        <EditIcon />
      </IconButton>
      )}
    {user && (user.role === 1 || user.role === 3 ||user.role === 8 ||user.role === 9||user.role === 4||user.role === 5||user.role === 2) && (
      <IconButton onClick={() => openDeleteModal(params.row.uuid)}>
          <DeleteIcon />
        </IconButton>
   )}
  </div>
  );
  const colors = tokens(theme.palette.mode);
  const columns = [

    { field: "nama_kegiatan", headerName: "Nama Kegiatan", width: 200 },
    { field: "ruangan", headerName: "Ruangan", width: 180 },
    { field: "borrow_date", headerName: "Tanggal Pinjam", width: 150,
    renderCell: (params) => (
      <div>{formatDate(params.value)}</div>
    ),
  },
    { field: "borrow_time", headerName: "Waktu Pinjam", width: 150 },
    { field: "until_date", headerName: "Tanggal Selesai", width: 150, renderCell: (params) => (
      <div>{formatDate(params.value)}</div>
    ), },
    { field: "until_time", headerName: "Waktu Selesai", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div>{getStatusLabel(params.value)}</div>
      ),
    },
    { field: "note", headerName: "Catatan", width: 200 },

    { field: 'userNama', headerName: "Dibuat Oleh", width: 250, },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: renderActions,

    },

  ];



  useEffect(() => {
    axios.get("http://localhost:5000/BorrowroomEL")
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
              <title>SIBor | DaftarPeminjamanEL</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Header title="DaftarPinjamanEL " subtitle="Daftar Terbaru" />
                  <Button href="/daftarpinjamanel/add" variant="contained" color="success">
                    New
                  </Button>
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
                  <DataGrid rows={transformedData} columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    checkboxSelection
                    disableRowSelectionOnClick
                    getRowId={(row) => row.uuid} />
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
