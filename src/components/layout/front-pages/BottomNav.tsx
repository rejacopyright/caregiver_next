'use client'

import { useRouter } from 'next/navigation'

import CustomAvatar from '@core/components/mui/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
    path: '/scedhule',
    label: 'Scedhule',
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

  return (
    <div className='fixed bottom-0 left-0 right-0'>
      <div className='md:max-is-[550px] mlb-0 mli-auto text-center'>
        <Card style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <CardContent className='p-3'>
            <div className='flex justify-around gap-4'>
              {data.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center gap-2'
                  onClick={() => router.push(item.path)}>
                  <CustomAvatar variant='rounded' skin='light' color='primary'>
                    <i className={item.icon}></i>
                  </CustomAvatar>
                  <Typography className='leading-2 text-[9pt] font-semibold'>
                    {item.label}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BottomNav
