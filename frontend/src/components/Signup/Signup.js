import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customerapp from '../../customer/Dashboard';
import Adminapp from '../Admin/Adminapp';
import PropTypes from "prop-types";
import { Component } from 'react';
import sign2 from "../../Images/sig2.jpg";
const theme = createTheme();
export default function SignUpSide(props) {

  // const url = "http://localhost:5000/api/auth/login";

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  //    let name,value;
  const handleInput = (event) => {
    const newdata = { ...user }
    newdata[event.target.name] = event.target.value
    // name = event.target.name;
    // value = event.target.value;
    setUser(newdata)
    console.log(newdata)
  }

  const postData = async (urlapi, urlnav) => {

    await axios.post(urlapi,
      {

        email: user.email,
        password: user.password,
      })
      .then(res => {
        console.log(res.data.authtoken);
        localStorage.setItem('token', res.data.authtoken);
        navigate(urlnav)

      }).catch((error) => console.log(error));
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (user.email === "" || user.password === "") {
      return;
    }

    if (document.getElementById('iscustomer').checked) {
      console.log("customer");
      props.givewho('consumer');
      postData(`http://localhost:5000/api/auth/login`, '/consumer/dashboard');
      props.setlogin(true);
      console.log(props.setlogin);
    }
    else if (document.getElementById('isadmin').checked) {
      console.log("admin");
      navigate('/admin/dashboard');
      props.givewho('admin');
      props.setlogin(true);
    }
    else {
      console.log("delivery");
      navigate('/delivery/dashboard');
      props.setlogin(true);
      props.givewho('delivery');
    }
  };

  return (
    <div class='mt-5'>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            style={{ backgroundImage: `url(${sign2})` }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />







                {/* <TextField
                margin="normal"
                required
                fullWidth
                label="Enter Your Name"
                name="name"
                value={user.name}
                onChange={handleInput}
                autoComplete="name"
                autoFocus
              />

<TextField
                margin="normal"
                required
                fullWidth
                value={user.phone}
                onChange={handleInput}
                label="Phone No."
                name="phone"
                autoComplete="number"
                autoFocus
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={user.email}
                onChange={handleInput}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={user.password}
                onChange={handleInput}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                value={user.cpassword}
                onChange={handleInput}
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}


                <input type="radio" value="Consumer" name="loggertype" id="iscustomer" /> Consumer<br />
                <input type="radio" value="Administration" name="loggertype" id="isadmin" /> Administration<br />
                <input type="radio" value="Delivery" name="loggertype" id="isdelivery" /> Delivery<br />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={postData}
                  sx={{ mt: 3, mb: 2 }
                  }
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/SignInSide" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}