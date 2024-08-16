// import React, { Fragment } from 'react'
// import { useLogin } from '../components/LoginContext'
// import{ useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import DbService from '../shared/service/DataBaseService';

// const HomeComp = () => {
//   const {login,setLogin,showUserDashboard,setShowuserDashboard} = useLogin()
//   const [roomData,setRoomData] = useState([])
//   const {id} = useParams()
//   const [user,setUser]=useState()
//   const [bookedRooms, setBookedRooms] = useState([]);

//   const navigate = useNavigate()

//   useEffect(()=>{
//     if(sessionStorage.getItem("user")){
//       setLogin(true)
//       setShowuserDashboard(true)
      
    
//     DbService.getById("users",id).then((res)=>{
      
//       setUser(res.data)
//       console.log(user)
      
//     })
//     DbService.get("rooms").then((res)=>{
//       setRoomData(res.data)

      
      
//     })
  
//   }
//   else{
//     navigate("/login")
//   }


//   },[])
//   useEffect(()=>{
    
//     setBookedRooms(roomData)
//     console.log(bookedRooms)
//   },[])
//   if(login && showUserDashboard)
//   {
//   return (

    
//     <div className="text-center">
//     <h1>Welcome to the User Dashboard</h1>
//     <p>Select an option from the sidebar to begin.</p>
//   </div>
//   )
// }
// return<Fragment></Fragment>
// }

// export default HomeComp

import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
// import data from '../data/roomdata.json'; // Import your data
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DbService from '../shared/service/DataBaseService';
import { useLogin } from '../components/LoginContext';
import { Card, CardContent, CardMedia, Typography, CardActions, Button,Box } from '@mui/material';

const HomeComp = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [roomData,setRoomData] = useState([])
  const [availableRooms, setAvailableRooms] = useState([]);
  const [bookedRooms, setBookedRooms] = useState([]);
  const {login,setLogin,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()
  // Load data from localStorage on component mount
  const navigate = useNavigate()
      const [user,setUser]=useState()
  const {id} = useParams()


  useEffect(()=>{
    console.log(bookedRooms)
    if(sessionStorage.getItem("user")){
      setLogin(true)
      setShowuserDashboard(true)
      
    
    DbService.getById("users",id).then((res)=>{
      
      setUser(res.data)
   
      
    })
    DbService.get("rooms").then((res)=>{
      setRoomData((prev)=>[...res.data])
      setAvailableRooms((prev)=>[...res.data])

      
      
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
  return (
   
      <Box display="flex" flexWrap="wrap" gap={2}>
        {roomData.length>0 ? availableRooms.map(room => (
          
          <Card key={room.id}  sx={{
            maxWidth: 345,
            backgroundColor: "WHEAT",
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}>
          <CardMedia
            component="img"
            height="140"
            image={room.image}
            alt={"img"}
          />
          <CardContent>
           
            <Typography sx={{ fontWeight : "600"}} color="text.secondary">
              {room.info}
            </Typography>
            <Typography sx={{ fontWeight : "800"}} color="text.secondary">
              {room.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            &#x20b9; {room.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>navigate(`/userdashboard/${id}/view/${room.id}`)} >
              View Room
            </Button>
   
          </CardActions>
        </Card>
          
        )):<h1>Loading..</h1>}
        </Box>
     
    
  );
  }
  return <></>

};

export default HomeComp;
