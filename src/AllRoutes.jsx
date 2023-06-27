import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainbar from './components/Mainbar'
import Buttons from './components/Buttons'
import Cards from './components/Cards'

const AllRoutes = () => {
    const series = [
        {
          type: 'bar',
          stack: '',
          yAxisKey: 'eco',
          data: [0, 10000, 20000, 30000, 40000],
        },
        {
          type: 'bar',
          stack: '',
          yAxisKey: 'eco',
          data: [5, 6, 2, 8, 9],
        },
        {
          type: 'line',
          yAxisKey: 'pib',
          color: 'red',
          data: [1000, 1500, 3000, 5000, 10000],
        },
      ];
  return (
    <Routes>
        <Route path = '/' element = {<Mainbar series={series}/>}></Route>
        <Route path = '/Buttons' element = {<Buttons/>}></Route>
        <Route path = '/Cards' element = {<Cards/>}></Route>
    </Routes>
  )
}

export default AllRoutes