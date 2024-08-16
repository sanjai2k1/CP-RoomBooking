// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import DbService from '../shared/service/DataBaseService'
// const ViewComp = () => {
//     const {id}=useParams()
//     const [room,setRoom]=useState()

//     console.log(id)
//     useEffect(()=>{
//         DbService.getById("rooms",id).then((res)=>{
      
            
//             setRoom(res.data).then()
//             console.log(room)
         
            
//           })
//     },[])
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default ViewComp



import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
// import data from '../data/roomdata.json'; // Import your data
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DbService from '../shared/service/DataBaseService';
import { useLogin } from '../components/LoginContext';
import { Card, CardContent, CardMedia, Typography, CardActions, Button,Box } from '@mui/material';

const ViewComp = () => {
    const [roomData,setRoomData] = useState()
    const [availableRooms, setAvailableRooms] = useState();
    const {login,setLogin,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()
    // Load data from localStorage on component mount
    const navigate = useNavigate()
    const {id} = useParams()
  
    useEffect(()=>{
      if(sessionStorage.getItem("user")){
        setLogin(true)

        setShowuserDashboard(true)
    
      DbService.getById
      ("rooms",id).then((res)=>{
        setRoomData((prev)=>[res.data])
        setAvailableRooms((prev)=>[res.data])
  
        
        
      })
   
    }
    else{
      navigate("/login")
    }
  
  
    },[])

 
  // const addItem = (room) => {
  //   bookedRooms.push(room)
  //   sessionStorage.setItem(id,JSON.stringify(bookedRooms))
    
   
  //   // setInputValue('');
  // };
  // Function to handle booking a room
  

  // Function to handle city selection
 
if(login && showUserDashboard)
  {
    console.log(roomData)
  return (
   
      <Box display="flex" flexWrap="wrap" gap={2} sx={{height:"100vh"}}>
        {roomData ? 
          
          <Card key={roomData.id} sx={{ maxWidth: 345,maxHeight:500,
            backgroundColor: "WHEAT",
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
           }}>
          <CardMedia
            component="img"
            height="140"
            image={roomData[0].image}
            alt={"img"}
          />
          <CardContent>
           
            <Typography sx={{ fontWeight : "600"}} color="text.secondary">
              {roomData[0].info}
            </Typography>
            <Typography sx={{ fontWeight : "800"}} color="text.secondary">
              {roomData[0].city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            &#x20b9; {roomData[0].price}
            </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
          
        :<h1>Loading..</h1>}
        </Box>
     
    
  );
  }
  return <></>

};

export default ViewComp;