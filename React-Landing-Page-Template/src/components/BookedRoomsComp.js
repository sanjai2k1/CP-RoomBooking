import React, { useEffect, useState } from 'react';
import DbService from '../shared/service/DataBaseService';
import { useParams } from 'react-router-dom';
import { useLogin } from '../components/LoginContext';
import { Card, CardContent, CardMedia, Typography, CardActions, Button,Box } from '@mui/material';


export const BookedRoomsComp = () => {
    const [bookedRooms,setBookedRooms]=useState([])
    const {id} = useParams()
    const {login,showUserDashboard,setShowuserDashboard} = useLogin()
    const [user,setUser]=useState()

    useEffect( ()=>{
      
        DbService.getById("users",id).then((res)=>{
            setBookedRooms(res.data.bookedrooms)
            setUser(res.data)
          })
     
    },[])

    
      
      
    
    

    return (
  <div>
    <h2>Selected Rooms</h2>
    <Box display="flex" flexWrap="wrap" gap={2}>
        {bookedRooms ? bookedRooms.map(room => (
          
          <Card  sx={{
            maxWidth: 345,
            backgroundColor: "WHEAT",
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }} key={room.id}>
          <CardMedia
            component="img"
            height="140"
            image={room.image}
            alt={"img"}
          />
          <CardContent>
           
            <Typography  sx={{ fontWeight : "600"}} color="text.secondary">
              {room.info}
            </Typography>
            <Typography sx={{ fontWeight : "800"}} color="text.secondary">
              {room.city}
            </Typography>
            <Typography variant="body5" color="text.secondary">
            &#x20b9; {room.price} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {room.bookeddate ? room.bookeddate : "Not Booked"}
            </Typography>
          </CardContent>
          <CardActions>
            
   
          </CardActions>
        </Card>
          
        )) : (
          <p>No rooms booked yet.</p>
        ) }
        </Box>
     
     
    </div>

    )
  
}


