import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';
import { Paper } from '@mui/material';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DbService from '../shared/service/DataBaseService';


  
const UsersListComponent = () => {
const [users,setUsers]= useState([])
const {
  login,
  setLogin,
  showUserDashboard,
  setShowuserDashboard,
  showAdminDashboard,
  setShowadminDashboard,adminLogin, setAdminlogin
} = useLogin();
const navigate = useNavigate()
useEffect(()=>{
  if(sessionStorage.getItem("admin")){
    setLogin(true)
    setShowuserDashboard(false)
    setShowadminDashboard(true)
  }
  if(!showAdminDashboard){
    navigate("/login")
  }
axios.get('http://localhost:8888/users').then((res)=>{
    console.log(res.data)
    setUsers(res.data)

})


},[users])
const deleteuser=(id)=>{
  if(window.confirm("Are you sure You want to delete this User?")){
  DbService.delete("users",id).then((res)=>{

  })
const fileindex=users.find((user)=>user.id===id)
users.pop(fileindex)
  console.log('Delete button clicked');
}
}


    
  return (
    <div>

<Container  sx={{ width: "80%", height: "100vh", display: 'flex', flexDirection: 'column' }}>
  <Title>Users List</Title>
  <Paper elevation={3} style={{ width: '100%', marginBottom: '20px' }}>
    <Table style={{ minWidth: '700px' }}>
      <TableHead>
        <TableRow style={{ backgroundColor: 'black' }}>
          <TableCell style={{ color: 'white', minWidth: '150px' }}>Name</TableCell>
          <TableCell style={{ color: 'white', minWidth: '200px' }}>Email</TableCell>
          <TableCell style={{ color: 'white', minWidth: '150px' }}>Contact</TableCell>
          <TableCell style={{ color: 'white', minWidth: '150px' }}>Booked Rooms</TableCell>
          <TableCell style={{ color: 'white', minWidth: '100px' }}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((row, index) => (
          <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.contact}</TableCell>
            <TableCell>
              <Button onClick={()=>{navigate(`/admindashboard/bookedrooms/${row.id}`)}}>
                Booked Rooms
              </Button>
            </TableCell>
            <TableCell>
              <DeleteIcon 
                style={{ cursor: 'pointer', color: 'red' }}
                onClick={() => {
                  // Handle delete functionality here
                 deleteuser(row.id)
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
</Container>




    </div>
  )
}

export default UsersListComponent