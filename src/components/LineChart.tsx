"use client";
import React from "react";
import { motion } from "framer-motion"; 
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

// Sample data
const data = [
  { name: "jan", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "feb", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "mar", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "apr", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "may", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "jun", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "jul", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "aug", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "sep", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "oct", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "nov", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
  { name: "dec", subscription: Math.floor(Math.random() * 5000) + 1000, Revenue: Math.floor(Math.random() * 50000) + 1000, value: Math.floor(Math.random() * 10000) + 1000 },
];

export default function LineChart() {
  const [opacity, setOpacity] = React.useState<{ [key: string]: number }>({
    Revenue: 1,
    subscription: 1,
  });

  // Handle mouse enter event
  const handleMouseEnter = (data: Payload) => {
    const { dataKey } = data;
    if (typeof dataKey === 'string') {
      setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = (data: Payload) => {
    const { dataKey } = data;
    if (typeof dataKey === 'string') {
      setOpacity((op) => ({ ...op, [dataKey]: 1 }));
    }
  };

  return (
    <motion.div  initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1
        }
      },
    }}>
    <ResponsiveContainer width="100%" height={400}>
      <Chart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} className="capitalize" />
        <YAxis tickFormatter={(value) => `₹${value}`} fontSize={12} />
        <Tooltip />
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Line
          type="monotone"
          dataKey="Revenue"
          strokeOpacity={opacity.Revenue}
          stroke="#1F51FF"
        />
        <Line
          type="monotone"
          dataKey="subscription"
          strokeOpacity={opacity.subscription}
          activeDot={{ r: 12 }}
          stroke="#F000FF"
        />
      </Chart>
    </ResponsiveContainer>
    </motion.div>
  );
}
