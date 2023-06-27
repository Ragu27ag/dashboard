
import React from 'react'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

const Buttons = () => {
  return (
    <div style = {{marginLeft:'210px'}}>
        <h1>Buttons</h1>
         <Box sx={{ flexGrow: 1 ,display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',flexDirection:'row',textAlign:'flex-start'}}>

        <Grid div xs={4}>
          <div style = {{height:'700px',width:'510px' ,border : '2px grey solid' , borderRadius:'4px',color:'#858796'}}>
            <p style = {{textAlign:'start', color:'#4e73df'}}>Circle Buttons</p>
            <Divider/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>

          </div>
        </Grid>
        <Grid div xs={4}>
          <div style = {{height:'815px',width:'510px',border : '2px grey solid' , borderRadius:'4px',color:'#858796'}}>
          <p style = {{textAlign:'start',color:'#4e73df'}}>Split Buttons Icons</p>
            <Divider/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut minima eaque numquam nostrum, atque, adipisci excepturi quis iure ea facilis, tempora perferendis ut esse pariatur ducimus nisi. Quod, eos?</p>

          </div>
        </Grid>
 
    </Box>
  </div>
  )
}

export default Buttons