import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Box } from '@mui/material';
import DbService from '../shared/service/DataBaseService';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';


const CardComponent = ({ image, city,info,price,id,setCards}) => {
  const navigate = useNavigate()
  
  const onDelete =(event)=>{
    if(window.confirm("Are You Sure You want to delete this room?")){
    DbService.delete("rooms",id).then((res)=>{
      window.alert("deleted")
      
      
    })
    DbService.get("rooms").then((res)=>{
    setCards(res.data)
    })
  }
  }
  const onEdit =()=>{
    navigate(`/admindashboard/edit/${id}`)
  }
 


    
    return ( 
      
      <Card  sx={{
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
          image={image}
          alt={"img"}
        />
        <CardContent>
         
          <Typography  sx={{ fontWeight : "600"}} color="text.secondary">
            {info}
          </Typography>
          <Typography  sx={{ fontWeight : "800"}} color="text.secondary">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          &#x20b9;{price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onEdit}>
            Edit
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  };


const EditandUpdateComponent = () => {
  const navigate = useNavigate()
  const [cards,setCards]=useState()
  const {login,showUserDashboard,setLogin,setShowuserDashboard,showAdminDashboard,setShowadminDashboard,adminLogin, setAdminlogin} = useLogin()

    useEffect(()=>{
      if(sessionStorage.getItem("admin")){
        setLogin(true)
        setShowuserDashboard(false)
        setShowadminDashboard(true)
      }
      if(!showAdminDashboard){
        navigate("/login")
      }else{
      DbService.get("rooms").then((res)=>{
        setCards(res.data)
      })
    }
    },[cards])
    // console.log(adminLogin,showAdminDashboard)
  
  return (
     <Box display="flex" flexWrap="wrap" gap={2}>
    {cards ? cards.map((card, index) => (
      <CardComponent
        key={index}
        image={card.image}
        city={card.city}
        info={card.info}
        price={card.price}
        id={card.id}
        setCards={setCards}
      />
    )) : <h1>Loading..</h1>}
  </Box>
  )
}

export default EditandUpdateComponent


