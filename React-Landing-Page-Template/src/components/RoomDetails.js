import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const SelectedRooms = ({ bookedRooms }) => (
  <div>
    <h2>Selected Rooms</h2>
    <div className="row">
      {bookedRooms.length > 0 ? (
        bookedRooms.map(room => (
          <>
          <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={room.image}
          alt={"img"}
        />
        <CardContent>
         
          <Typography variant="body1" color="text.secondary">
            {room.info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.price}
          </Typography>
        </CardContent>
        <CardActions>
         
        </CardActions>
      </Card>
         
          </>
        ))
      ) : (
        <p>No rooms booked yet.</p>
      )}
    </div>
  </div>
);

export default SelectedRooms;
