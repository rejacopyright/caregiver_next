'use client'

import { Fragment, SyntheticEvent, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { getAllSchedule, getTodaySchedule } from '@api/schedule'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Tab from '@mui/material/Tab'
import { formatISO, randomNumber } from '@utils/fn'
import { parse, stringify } from 'qs'

import { ModalClockIn } from './ModalClockIn'
import ScheduleCard from './ScheduleCard'

type ScheduleItem = {
  name: string
  address: string
  avatar?: string
  [key: string]: any
}

export type Data = {
  upcoming: ScheduleItem[]
  completed: ScheduleItem[]
  missed: ScheduleItem[]
}

const _data: Data = {
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
  const router = useRouter()
  const pathname: any = usePathname()
  const searchParamsFn = useSearchParams()
  const searchParams = parse(searchParamsFn.toString() || '', { ignoreQueryPrefix: true })

  const [tmpData, setTmpData] = useState<any>()
  const [showModalCheckIn, setShowModalCheckIn] = useState<boolean>(false)

  const initialTabValue = searchParams?.tab
    ? (searchParams?.tab?.toString() as keyof Data)
    : 'upcoming'

  const [value, setValue] = useState<keyof Data>(initialTabValue)
  const isAllDay = searchParams?.isToday === 'false'

  const { data } = isAllDay
    ? getAllSchedule({ status: value })
    : getTodaySchedule({ status: value })

  const scheduleData = data?.data || []

  const upsertParams = (params: object) => {
    const resParams = stringify({ ...searchParams, ...params }, { encode: false })

    router.replace(`${pathname}?${resParams}`)
  }

  const handleChange = (event: SyntheticEvent, newValue: keyof Data) => {
    setValue(newValue)
    upsertParams({ tab: newValue })
    // router.replace(`/schedule`)
  }

  return (
    <>
      <Card>
        <TabContext value={value}>
          <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
            <Tab value='upcoming' label='Upcoming' />
            <Tab value='completed' label='Completed' />
            <Tab value='missed' label='Missed' />
          </TabList>
          <TabPanel value={value} className='pbs-0'>
            <CardContent>
              {scheduleData.map((item: ScheduleItem, index: number) => {
                const avatar = `/images/avatars/${randomNumber(1, 8)}.png`
                const formattedDate = formatISO(item.shiftStart, 'dd MMM')
                const formattedTimeStart = formatISO(item.shiftStart, 'HH:mm')
                const formattedTimeEnd = formatISO(item.shiftEnd, 'HH:mm')

                const shiftDate = `${formattedDate} | ${formattedTimeStart}-${formattedTimeEnd}`

                return (
                  <Fragment key={index}>
                    <ScheduleCard
                      id={item.id}
                      title={item.clientName}
                      avatar={avatar}
                      status={value}
                      address={item.address}
                      time={shiftDate}
                      onClockIn={() => {
                        try {
                          setTmpData(item)
                        } finally {
                          setShowModalCheckIn(true)
                        }
                      }}
                    />
                    {index !== scheduleData.length - 1 && (
                      <Divider className='mlb-2 border-dashed' />
                    )}
                  </Fragment>
                )
              })}
            </CardContent>
          </TabPanel>
        </TabContext>
      </Card>
      <ModalClockIn show={showModalCheckIn} setShow={setShowModalCheckIn} data={tmpData} />
    </>
  )
}

export default TabSchedule
