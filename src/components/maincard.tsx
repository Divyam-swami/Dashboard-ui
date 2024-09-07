"use client"
import React from 'react'
import Card, { CardProps } from './Card'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import { motion } from 'framer-motion'



const cardData: CardProps[]= [
    {
      label: "Total Revenue",
      amount: `₹10,24,450`,
      description: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      label: "Subscription",
      amount: "+2350",
      description: "+100.1% from last month",
      icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      icon: CreditCard,
    },
    {
      label: "Active now",
      amount: "+573",
      description: "+201 scince last hour",
      icon: Activity,
    },
  ]
  

export default function Maincard() {
  return (
    <motion.div
    initial="hidden" animate="visible" variants={{
        hidden: {
          opacity: 0
        },
        visible: {        
          opacity: 1,
          transition: {
            duration:.7,
            delay: .2
          }
        },
      }}
    >
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all 
    sm:grid-cols-2 xl:grid-cols-4">
      {cardData.map((d,i)=>(
               <Card key={i}
                amount={d.amount}
                description={d.description}
                label={d.label}
                icon={d.icon}
               />

      ))}
    </section>
    </motion.div>
  )
}