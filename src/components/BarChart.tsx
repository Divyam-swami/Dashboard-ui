"use client"


import React from 'react'
import {BarChart as Bargraph  ,ResponsiveContainer, XAxis , Bar, YAxis} from 'recharts'
import { motion } from 'framer-motion'


const data=[
    {
        name:"Jan",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"Feb",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"Mar",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"Apr",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"May",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"June",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"July",
        total: Math.floor(Math.random()* 500000) + 1000
    },
    {
        name:"Aug",
        total: Math.floor(Math.random()* 500000) + 1000
    },
     {
        name:"Sept",
        total: Math.floor(Math.random()* 500000) + 1000
    },
     {
        name:"Oct",
        total: Math.floor(Math.random()* 500000) + 1000
    },
     {
        name:"Nov",
        total: Math.floor(Math.random()* 500000) + 1000
    },
     {
        name:"Dec",
        total: Math.floor(Math.random()* 500000) + 1000
    },

]

export default function BarChart() {
  return(
    <motion.div
    initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration:.5,
            delay: .5
          }
        },
      }}
    >
   <ResponsiveContainer width={"100%"} height={300}>
      <Bargraph data={data}>
          <XAxis dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12}
          />
                
          <YAxis
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12}
          tickFormatter={(value => `₹${value}`)}/>
     <Bar dataKey={"total"} fill='#f000ff' radius={[4,4,0,0]}/>
      </Bargraph>

  </ResponsiveContainer>
  </motion.div>
  )
}
