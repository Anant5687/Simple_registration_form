import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import outerStyle from './Registration.module.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const navigate = useNavigate()
    const style = { marginTop: "8%", marginLeft: "8%", width: "20vw" }
    const [data, setData] = useState({
        fname: "",
        lname: "",
        gender: "",
        dob: ""
    })

    const changeHandeler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const clickandeler = () => {
        if (data.fname.trim() === "" || data.lname.trim()=== "" || data.gender.trim()==="" || data.dob.trim()==="" ) {
alert("All fields are required")
        }else {
            axios.post(`http://localhost:4040/api/post`, data).then((res) => {
                console.log(res.data)
                setData({
                    fname: "",
                    lname: "",
                    gender: "",
                    dob: ""
                })
                navigate('/data')
                alert("Your data is successfully saved")
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <h1 align="center" className={outerStyle.h1}>Registration Form</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" name="fname" onChange={changeHandeler} value={data.fname} label="First Name" variant="outlined" style={style} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" name="lname" onChange={changeHandeler} value={data.lname} label="Last Name" variant="outlined" style={style} />
                    </Grid>
                </Grid>
            </Box>
            <InputLabel id="demo-simple-select-label"
                style={{ marginTop: "3%", width: "53vw", marginLeft: "4%" }}
            >Gender</InputLabel>
            <Select name="gender" onChange={changeHandeler} value={data.gender}
                labelId="demo-simple-select-label"
                label="Gender"
                id="demo-simple-select"
                style={{ marginTop: "1%", width: "48vw", marginLeft: "4%" }}
            >
                <MenuItem value={"Male"} >Male</MenuItem>
                <MenuItem value={"Female"}> Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-label"
                style={{ marginTop: "3%", width: "48vw", marginLeft: "4%" }}
            >Date Of birth</InputLabel>
            <TextField type="date" name="dob" onChange={changeHandeler} value={data.dob}
                style={{ marginTop: "1%", width: "48vw", marginLeft: "4%" }} />

                <Button variant="contained" onClick={clickandeler}
                    style={{ marginTop: "3%", width: "44vw", marginLeft: "7%", height: "8vh" }} >Submit Data</Button>
        </>
    )
}

export default RegistrationPage
