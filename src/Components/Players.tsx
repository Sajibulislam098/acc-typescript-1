import React from 'react'
import { IPlayer } from '../Interfaces'
import './Players.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface props {
    player: IPlayer
    removePlayer(playerToRemove: string): void;
}

const Players = ({ player, removePlayer }: props) => {

    return (
        <div className='singlePlayer'>



            <div className="d-flex w-100 justify-content-between stylesdisplay">
               
            {/* <Card sx={{ minWidth: 345 }}> */}
     
      <CardContent>
      
        <Typography gutterBottom variant="h3" component="div">
        {player.playersName}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {player.role}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button variant="outlined" color="error" onClick={() => {
                    removePlayer(player.playersName)
                }} className=' '>Remove</Button>
      </CardActions>
    {/* </Card> */}
                {/* <h5 className="mb-1">{player.playersName} </h5>
                <h5 className="mb-1">{player.role} </h5> */}
             
            </div>
        </div>
    )
}

export default Players