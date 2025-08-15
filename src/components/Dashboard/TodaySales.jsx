import React from 'react'
import ContentHeader from '../ContentHeader'
import {SalesData} from "../../Data/index"
import BarChart from '../Chart/Chart'
import WrapperDiv from './WrapperDiv'
const SalesDetails = () => {
  return (
    <div className='p-4'>
        <ContentHeader title="Today Sales" des="Sales Summery"/>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                SalesData && 
                
                SalesData.map((data)=> {
                    return(
                        <div key={data.id} className='bg-primary1 p-4 rounded-md'>
                            <img src={data.icon} alt="" />

                            <div className='mt-2 '>
                                <p className='text-[15px] font-semibold text-white/80 pb-1'>{data.count}</p>
                                <h1 className='text-white/80 text-[10px] md:text-[12px] font-medium'>{data.title}</h1>
                                <p style={{color: data.color}} className='text-[8x] md:text-[10px] font-medium'> {data.des}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>  
    </div>
  )
}

// sales chart function
const SalesChart = () => {
    return(
        <div className='flex-0.2 p-4'>
            <ContentHeader title="Level"/>
            <div className='w-full h-[120px]'>
                <BarChart/>
            </div>

            <div className='flex justify-center w-full gap-20 lg:gap-0 items-center pt-4 mt-4'>
                <button className='flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium lg:border-r border-grayText/30 lg:w-full'>
                    <span className='h-2 w-2 rounded-full bg-grayText'></span>Volume
                </button>
                <button className='flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium  lg:w-full'>
                    <span className='h-2 w-2 rounded-full bg-grayText'></span>Service
                </button>
            </div>
        </div>
    )
}

const TodaySales = ()=> {
    return(
        <div>
            <WrapperDiv>
                <div className='flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md '>
                    <SalesDetails/>
                </div>
                <div className='flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md '>
                    <SalesChart/>
                </div>
            </WrapperDiv>
        </div>
    )
}

export default TodaySales;