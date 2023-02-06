import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
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
import sign1 from "../../Images/sig1.jpg";





const theme = createTheme();

export default function SignInSide() {

  const url="http://localhost:5000/api/auth/signup";

  
  
    

  const [user,setUser] = useState({
     name:'', email:""  , phone:"",password:""
  })
  //    let name,value;
  const handleInput = (event) => 
  {
     const newdata = {...user}
     newdata[event.target.name] = event.target.value
     // name = event.target.name;
     // value = event.target.value;
     setUser(newdata)
     console.log(newdata)
  }

  const postData = async (e) =>{
         
         axios.post(url,
             {
             name:user.name,
             email: user.email,
             phone:user.phone,
             password:user.password,
              // header:{
              //    Authorization:`Bearer ${localStorage.getItem("auth-token")}`
                 
              // }  
         })
         .then(res=>{
             console.log(res.data.authtoken)
             alert("You Are successfully Registered")
         }) 
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
   
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
            // backgroundImage: ; 
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          style={{backgroundImage: `url(${sign1})`}}
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
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <TextField
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
              />



              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               */}
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={postData}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                <Link to="/SignUpSide" variant="body2">
                    {"Already have an account? Sign In"}
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