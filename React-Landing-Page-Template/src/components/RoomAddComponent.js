import React, { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import DbService from '../shared/service/DataBaseService';
import { Navigate, useNavigate } from 'react-router-dom';


const RoomAddComponent = () => {
 
    const [room, setRoom] = useState({
      city:"",
      image:"",
      info:"",
      price:0,
      bookeddate:""
    });

    const navigate=useNavigate()
  const handleChange = (event) => {
    const {name,value} = event.target
    console.log(name,value)
    // Handle form submission logic
    setRoom((prev)=>({
      ...prev,
      [name]:value
    }))
  };

  const handleSubmit = (event)=>{
    event.preventDefault()
    DbService.post("rooms",room).then((res)=>{

    })
    navigate("/admindashboard/editandupdate")

  }
  return (
    <Container maxWidth="sm" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <Box
      component="form"
      
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor:"white"

      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" component="h2" textAlign="center" mb={3}>
        City Information Form
      </Typography>
      
      <TextField
        label="City"
        variant="outlined"
        name="city"
        required
        defaultValue="Chennai"
        value={room.city}
        onChange={handleChange}
      />
      
      <TextField
        label="Image"
        variant="outlined"
        name="image"
        value={room.image}
        onChange={handleChange}

        required
      />
      
      <TextField
        label="Info"
        variant="outlined"
        name="info"
        value={room.info}
        onChange={handleChange}

        required
        multiline
        rows={4}
      />
      
      <TextField
        label="Price"
        variant="outlined"
        name="price"
        type="number"
        value={room.price}
        onChange={handleChange}

        required
      />
      
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  </Container>
  )
}

export default RoomAddComponent