import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Header";
import StatBox from "./StatBox";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../pages/global/Topbar";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import { Helmet } from 'react-helmet-async';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Welcome = () => {
  const [theme, colorMode] = useMode();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const [greeting, setGreeting] = useState("Selamat Datang Di Dashboard");

  useEffect(() => {
    const getGreetingMessage = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        return "Selamat Pagi!";
      } else if (currentHour < 18) {
        return "Selamat Siang!";
      } else {
        return "Selamat Malam!";
      }
    };

    setGreeting(getGreetingMessage());
  }, []);

  // Data pengumuman peminjaman
  const announcements = [
    {
      title: "Ruangan",
      description: "Dear all , Ruangan 706 Tidak dapat dipakai hingga tanggal 15 September ,Terima kasih.",
    },
    {
      title: "Pemeliharan",
      description: "Akan dilakukan pemeliharaan pada tanggal  12 oktober jam 10 wib ,diharapkan tidak melakukan peminjaman di rentang waktu 9.30 wib. ",
    },
    {
      title: "Perubahan Status Peminjaman",
      description: "Status peminjaman nomor 54321 telah berubah menjadi 'Dalam Proses'. Mohon segera tindaklanjuti.",
    },
    // Tambahkan pengumuman lainnya sesuai kebutuhan
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>SIBor | Dashboard</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <Box
                  display={smScreen ? "flex" : "block"}
                  flexDirection={smScreen ? "row" : "column"}
                  justifyContent={smScreen ? "space-between" : "start"}
                  alignItems={smScreen ? "center" : "start"}
                  m="10px 0"
                >
                  <Header title="DASHBOARD" />
                </Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card sx={{ backgroundColor: colors.primary[400] }}>
                      <CardContent>
                        <Typography variant="h4" component="div">
                        {greeting}, 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Silahkan Melakukan Peminjaman Sesuai Prosedur
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={12} xl={12} mt={5}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          Pengumuman
                        </Typography>
                        <Carousel showArrows={true}
                        style={{ backgroundColor: colors.primary[400] }}>
                          {announcements.map((announcement, index) => (
                            <div key={index}>
                              <h3>{announcement.title}</h3>
                              <p>{announcement.description}</p>
                            </div>
                          ))}
                        </Carousel>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Welcome;
