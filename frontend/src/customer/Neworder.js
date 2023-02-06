import './Neworder.css'
import React, { Component, useState } from 'react'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import './Gridform.css'
import { MenuItem, Select, OutlinedInput, InputAdornment } from '@mui/material';
import { InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer/Footer';
export default function Neworder() {

    const url = "http://localhost:5000/api/orders/neworder";

    const [dateTime, setDateTime] = useState("");
    //  console.log(dateTime);

    const [order, setOrder] = useState({
        wastetype: '', amount: "", address: "", ptime: "", pdate:""
    })
    // let name,value;
    const handleInput = (event) => {
        const newdata = { ...order }
        newdata[event.target.name] = event.target.value;
        // name = event.target.name;
        // value = event.target.value;
        setOrder(newdata)
        console.log(newdata)
        
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log(localStorage.getItem("auth-token"))
        axios.post("http://localhost:5000/api/orders/neworder",
            {
                wastetype:String(order.wastetype),
                amount: String(order.amount),
                address: String(order.address),
                pdate: String(order.pdate),
                ptime: String(order.ptime),
                header: {
                    'Content-type':"application/json",
                    "auth-token":localStorage.getItem('token')
                }
                   
                
            })
            .then(res => {
                console.log(res)
            }).catch((error)=>{
                console.log("hello")
                console.log(error)
            });
    }




    //   const postData = async (e) =>{
    //     e.preventDefault();
    //     const {wastetype,amount,address}=order;

    //     const res = await fetch("http://localhost:3000/order",
    //     {
    //         method: "POST",
    //          headers :{
    //             "Content-Type" : "application/json" 
    //          },
    //          body: JSON.stringify({
    //             wastetype, amount  , address
    //          })
    //     })

    //     const data = await res.json();
    //     if(data.status === 500 || !data)
    //     {
    //         window.alert("Invalid");
    //         console.log("Invalid");
    //     }
    //     else{
    //         window.alert("done");
    //         console.log("done");
    //     }
    //  }


    return (
        <div>

            <Grid container component="main" sx={{ height: '100vh' }} >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    className="giveback"
                >
                    <h2 class='text-center my-2' style={{ fontFamily: "bolabong", fontWeight: "bold", color: "#B0E0E6" }}>What it takes to reach you?</h2>
                    <ol class="list-group list-group-numbered mx-2 " >
                        <li class="list-group-item bg-transparent my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>We fetched data from your form</li>
                        <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>Your order will be verified by Administrator</li>
                        <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>If verified then worker will be at your doorstep on your prefered date and time</li>
                        <li class="list-group-item bg-transparent  my-4" style={{ color: "white", fontFamily: "bolabong", fontWeight: "bold" }}>If not verified It will be rejected and you will be given the reason</li>
                    </ol>
                </Grid>



                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: "transparent" }} >
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
                            Place your waste order
                        </Typography>



                        <Box component="form" method='POST' noValidate sx={{ mt: 1 }}>

                            <InputLabel id="demo-simple-select-label" >Type of waste</InputLabel>
                            <Select
                                name='wastetype'
                                value={order.wastetype}
                                onChange={handleInput}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type of waste"
                                fullWidth
                            >
                                <MenuItem value="ow">Orgaic waste</MenuItem>
                                <MenuItem value="hw">Hazardous waste</MenuItem>
                                <MenuItem value="sw">Solid waste</MenuItem>
                                <MenuItem value="lw">Liquid waste</MenuItem>
                                <MenuItem value="rw">Recyclable waste</MenuItem>
                            </Select>



                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-amount"
                                name='amount'
                                value={order.amount}
                                onChange={handleInput}
                                fullWidth
                                startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                                label="Amount of waste"
                            />
                            <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name='address'
                                value={order.address}
                                onChange={handleInput}
                                fullWidth
                                label="here"
                                multiline
                            />
                            <br></br>
                            <br></br>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                            {/* <DesktopDatePicker
                                    
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        name='pdate'
                                        value={order.pdate}
                                    onChange={handleInput}
                                        sx={{ mt: 3 }}
                                        renderInput={(params) => <TextField {...params} />}
                                        fullWidth
                                        
                                    />
                                    <br></br>
                                    <br></br>

                                    <TimePicker
                                    // name='time'
                                    // value={order.time}
                                    label="Time"
                                    name='ptime'
                                    value={order.ptime}
                                    onChange={handleInput}
                                        
                                        
                                        sx={{ mt: 3 }}
                                        renderInput={(params) => <TextField {...params} />}
                                    /> */}

                            <InputLabel htmlFor="outlined-adornment-amount">Date</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name='pdate'
                                value={order.pdate}
                                onChange={handleInput}
                                fullWidth
                                label="here"
                                multiline
                            />
                            <br></br>

                            <InputLabel htmlFor="outlined-adornment-amount">time</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name='ptime'
                                value={order.ptime}
                                onChange={handleInput}
                                fullWidth
                                label="here"
                                multiline
                            />
                            <br></br>
                            {/* <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="DateTimePicker"
                                    value={dateTime}
                                    onChange={(newValue) => {
                                        setDateTime(newValue);
                                    }}
                                /> */}
                        {/* </LocalizationProvider> */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={postData}
                            sx={{ mt: 3, mb: 2 }
                            }
                        >
                            place order
                        </Button>

                    </Box>
                </Box>
            </Grid>
        </Grid>
        </div >

    )
}


