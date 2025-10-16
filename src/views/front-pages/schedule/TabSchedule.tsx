'use client'

import { Fragment, SyntheticEvent, useState } from 'react'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Tab from '@mui/material/Tab'

import ScheduleCard from './ScheduleCard'

type ScheduleItem = {
  name: string
  address: string
  avatar?: string
}

export type Data = {
  upcoming: ScheduleItem[]
  completed: ScheduleItem[]
  missed: ScheduleItem[]
}

const data: Data = {
  upcoming: [
    {
      name: 'Micheal Hughes',
      address: '101 Boulder, California (CA), 933130',
      avatar: '/images/avatars/1.png',
    },
    {
      name: 'Daisy Coleman',
      address: '939 Orange, California (CA), 910614',
      // avatar: '/images/avatars/4.png',
    },
    {
      name: 'Glenn Todd',
      address: '1713 Garnet, California (CA), 939573',
      avatar: '/images/avatars/2.png',
    },
    {
      name: 'Arthur West',
      address: '156 Blaze, California (CA), 925878',
      avatar: '/images/avatars/3.png',
    },
  ],
  completed: [
    {
      name: 'Rose Cole',
      address: '61 Unions, California (CA), 922523',
      // avatar: '/images/avatars/4.png',
    },
    {
      name: 'Polly Spencer',
      address: '865 Delta, California (CA), 932830',
      avatar: '/images/avatars/4.png',
    },
    {
      name: 'Jerry Wood',
      address: '37 Marjory, California (CA), 951958',
      avatar: '/images/avatars/5.png',
    },
    {
      name: 'Sam McCormick',
      address: '926 Reynolds, California (CA), 910279',
      avatar: '/images/avatars/6.png',
    },
  ],
  missed: [
    {
      name: 'Alex Walton',
      address: '78 Judson, California (CA), 956084',
      avatar: '/images/avatars/7.png',
    },
    {
      name: 'Eula Griffin',
      address: '56 Bernard, California (CA), 965133',
      avatar: '/images/avatars/8.png',
    },
    {
      name: 'Lula Barton',
      address: '95 Gaylord, California (CA), 991955',
      // avatar: '/images/avatars/4.png',
    },
    {
      name: 'Craig Jacobs',
      address: '73 Sandy, California (CA), 954566',
      // avatar: '/images/avatars/4.png',
    },
  ],
}

const TabSchedule = () => {
  const [value, setValue] = useState<keyof Data>('upcoming')

  const handleChange = (event: SyntheticEvent, newValue: keyof Data) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
          <Tab value='upcoming' label='Upcoming' />
          <Tab value='completed' label='Completed' />
          <Tab value='missed' label='Missed' />
        </TabList>
        <TabPanel value={value} className='pbs-0'>
          <CardContent>
            {data[value].map((item: ScheduleItem, index: number) => {
              return (
                <Fragment key={index}>
                  <ScheduleCard title={item.name} avatar={item?.avatar} status={value} />
                  {index !== data[value as keyof Data].length - 1 && (
                    <Divider className='mlb-2 border-dashed' />
                  )}
                </Fragment>
              )
            })}
          </CardContent>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default TabSchedule
