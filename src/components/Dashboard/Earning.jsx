import React from 'react'
import ContentHeader from '../ContentHeader'
import MonthlyLineChart from '../Chart/Curve'
import { Pie } from 'react-chartjs-2'
import GaugeChart from '../Chart/Pie'
const VisitorInsight = () => {
  return (
    <div className='p-4  h-full'>
         <ContentHeader title="Visitor Insights"/>
         <div className='w-full mt-10'>
            <MonthlyLineChart/>
         </div>
    </div>
  )
}

const EarningRate = () => {
    return (
        <div className='flex flex-col items-center md:items-start p-4 w-full'>
            <div className='w-full text-center md:text-left'>
                <ContentHeader title="Earnings" des="Total Expense"/>
                <h1 className='text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold'>$59850</h1>
                <p className='text-grayText text-[12px] md:text-[14px]'>Profit is 48% More than last Month</p>
            </div>

            <div className='w-full items-center flex mx-auto justify-center'>
                <GaugeChart/>
            </div>
        </div>
    )
}

const Earnings = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 p-4 lg:gap-x-4 gap-y-4">
            <div className="bg-primary2 rounded-md min-w-full">
                <EarningRate/>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-primary2 rounded-md h-full">
                <VisitorInsight/>
            </div>
        </div>
    )
}


export default Earnings;