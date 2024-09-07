"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    title: string,
    className?:string
}

export default function PageTitle({title,className}: Props) {
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
          delay: .04
        }
      },
    }}
    >
        <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>
    </motion.div>
  )
}