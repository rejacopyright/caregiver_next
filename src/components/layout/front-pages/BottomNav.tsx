'use client'

import { usePathname, useRouter } from 'next/navigation'

import CustomAvatar from '@core/components/mui/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'

type DataType = {
  path: string
  label: string
  icon: string
  activeIcon: string
}

const data: DataType[] = [
  {
    path: '/',
    label: 'Home',
    icon: 'ri-home-5-line',
    activeIcon: 'ri-home-5-fill',
  },
  {
    path: '/schedule',
    label: 'Schedule',
    icon: 'ri-calendar-schedule-line',
    activeIcon: 'ri-calendar-schedule-fill',
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: 'ri-user-4-line',
    activeIcon: 'ri-user-4-fill',
  },
]

const BottomNav = () => {
  const router = useRouter()
  const path = usePathname()

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50'>
      <div className='md:max-is-[550px] mlb-0 mli-auto text-center'>
        <Card style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <CardContent className='p-3'>
            <div className='flex justify-around gap-4'>
              {data.map((item, index) => {
                const isActive =
                  path === item.path || (item.path !== '/' && path.startsWith(item.path))

                return (
                  <div
                    key={index}
                    className='flex flex-col items-center gap-2 cursor-pointer'
                    onClick={() => router.push(item.path)}>
                    <CustomAvatar
                      variant='rounded'
                      skin={isActive ? 'filled' : 'light'}
                      color='primary'>
                      <i className={item.icon}></i>
                    </CustomAvatar>
                    <Typography
                      className={clsx('leading-2 text-[9pt] font-semibol', {
                        'text-blue-700': isActive,
                        'text-gray-400': !isActive,
                      })}>
                      {item.label}
                    </Typography>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BottomNav
