
import { Box, Button, Grid } from '@mui/material'
import React from 'react'

import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ForumIcon from '@mui/icons-material/Forum';


import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

import {
  Chart,
  PieSeries,
  
} from '@devexpress/dx-react-chart-material-ui';


const Mainbar = ({series}) => {
  

  const data = [
    { argument:'Direct', value:60 },
    { argument:'Social', value:30 },
    { argument:'Referal', value:10 },
    
  ];
   
  return (
   
    
    <div style = {{marginLeft:'210px'}}>
    <div style = {{ display:'flex', flexWrap:'wrap',justifyContent:'space-between' ,width: 'calc(100% -210px)'}}>
        <div style = {{paddingLeft:'10px',textAlign:'center'}}>
            <h3>Dashboard</h3>
        </div>
        <div style = {{paddingRight:'10px',alignContent:'center',textAlign:'center',margin:'10px'}} >
        <Button variant="contained">Generate Report</Button>
        </div>
    </div>
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
    
    <Box sx = {{ textAlign:'start' , display:'flex' ,flexWrap:'wrap',justifyContent:'space-around' ,marginTop:'10px'}}>
    <div style={{ border:'1px solid grey' , borderRadius:'4px'}}   >
    <p style={{margin:0,color:'#4e73df'}}>Earnings OverView</p>
    <ChartContainer
      series={series}
      width={500}
      height={300}
      // sx = {{
      //   display:'inline'
      // }}
      
      xAxis={[
        {
          id: 'years',
          data: ['jan', 'mar', 'may', 'jul', 'sep'],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      
      <LinePlot />
      <ChartsXAxis label="" position="bottom" axisId="years" />
      <ChartsYAxis label="" position="left" axisId="eco" />
      {/* <ChartsYAxis label="PIB" position="right" axisId="pib" /> */}
    </ChartContainer>
    </div>

    <div style = {{ border:'1px solid grey' , borderRadius:'4px'}}>
    <p style={{margin:0,color:'#4e73df'}}>Revenue Sources</p>
    <Chart
      data={data}
      width={400}
      height={300}
    >
      <PieSeries valueField="value" argumentField="argument" />
      
    </Chart>
    <p style={{textAlign:'center'}}><span style={{color:'rgb(66, 165, 245)'}}>Direct</span>&nbsp;&nbsp;<span style={{color:'rgb(255, 112, 67)'}}>Social</span>&nbsp;&nbsp;<span style={{color:'rgb(156, 204, 101)'}}>Referal</span>     </p> 
    </div>
  </Box>
  </div>
  
  )
}

export default Mainbar