import React from 'react'
import TodaySales from './TodaySales'
import TopProduct from './TopProduct'
import Earnings from './Earning'


const Dashboard = () => {
  return (
    <div>
      <TodaySales/>
      <TopProduct/>
      <Earnings/>
    </div>
  )
}

export default Dashboard