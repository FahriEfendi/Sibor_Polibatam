import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [nim_nik, setNim_nik] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      // Diasumsikan `jur_id` adalah properti dari objek user
      const jurId = user.jur_id;
      
      if (jurId === 3) {
        navigate("/dashboard");
      } else if (jurId === 1) {
        navigate("/dashboard");
      } else {
        navigate("/dashboard"); // Navigasi default jika jur_id bukan 1 atau 2
      }
      
      dispatch(reset());
    }
  }, [user, isSuccess, dispatch]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ nim_nik, password }));
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
    <div className="hero-body">
    <Helmet>
              <title>SIBor | Log in</title>
            </Helmet>
      <Container>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <form onSubmit={Auth} className="box">
                  {isError && (
                    <Typography variant="body1" align="center">
                      {message}
                    </Typography>
                  )}
                  <Typography variant="h4" align="center" gutterBottom>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Logo_Politeknik_Negeri_Batam.png" alt="Logo" width={64} height={64} />
                  </Typography>
                  <TextField
                    type="text"
                    label="NIM/NIK"
                    value={nim_nik}
                    onChange={(e) => setNim_nik(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required // This attribute makes the field required
                  />
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
                  <div style={{ marginTop: '1rem' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      fullWidth
                      disabled={isLoading}
                    >
                      {isLoading ? <CircularProgress size={24} /> : 'Log in'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  </section>
  );
};

export default Login;
