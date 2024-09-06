'use client'

import React, { useState, useEffect } from 'react'
import { Nav } from './nav'
import { useWindowWidth } from '@react-hook/window-size'
import { ChevronRight, LayoutDashboard, Settings, UsersRound } from 'lucide-react'
import { Button } from './button'


export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const OnlyWidth = useWindowWidth()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const mobile = isClient ? OnlyWidth < 768 : false

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='relative min-w-[80px] pt-24 px-3 pb-10'>
      {!mobile && (
        <div className='absolute right-[-20px] top-7'>
          <Button onClick={toggleSidebar} variant={'secondary'} className='rounded-full p-1'>
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobile ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "User",
            href: "/user",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          },
        ]}
      />
    </div>
  )
}
