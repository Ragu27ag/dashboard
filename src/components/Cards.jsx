import React from 'react'
import Box from '@mui/material/Box';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ForumIcon from '@mui/icons-material/Forum';



const Cards = () => {
  return (
    <div style = {{marginLeft:'210px'}}>
    <h1>Buttons</h1>
    <Box  >
      <Grid sx = {{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
        <Grid item xs={1} md={3}>
          <div style={{border : '2px grey solid' , borderLeft:'5px solid #4e73df', borderRadius:'4px',color:'#858796'}}>
            <p>Earnings (Monthly)   <CalendarTodayIcon sx={{fontSize:'20px'}}/></p>
           
            <p>$40,000</p>
            
            </div>
        </Grid>
        <Grid item xs={1} md={3}>
          <div style={{border : '2px grey solid' , borderLeft:'5px solid green', borderRadius:'4px',color:'#858796'}}> <p>Earnings (Annual) <AttachMoneyIcon sx={{fontSize:'25px',}}/></p>
            <p>$215,000</p></div>
        </Grid>
        <Grid item xs={1} md={3}>
          <div style={{border : '2px grey solid',borderLeft:'5px solid #36b9cc' , borderRadius:'4px',color:'#858796',width:'153px'}}><p style = {{textAlign:'center'}}>Tasks <ContentPasteIcon sx={{fontSize:'25px'}}/></p>
            <p style={{paddingLeft:'15px'}}>50%</p></div>
        </Grid>
        <Grid item xs={1} md={3}>
          <div style={{border : '2px grey solid',borderLeft:'5px solid #f6c23e'  , borderRadius:'4px',color:'#858796'}}><p>Pending Requests <ForumIcon sx={{fontSize:'20px'}}/></p>
            <p style={{paddingLeft:'15px'}}>18</p></div>
        </Grid>
      </Grid>
    </Box>
</div>
  )
}

export default Cards