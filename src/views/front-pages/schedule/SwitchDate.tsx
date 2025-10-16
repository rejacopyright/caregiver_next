'use client'

import { SyntheticEvent, useState } from 'react'

import CustomTabList from '@core/components/mui/TabList'
import TabContext from '@mui/lab/TabContext'
import { Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'

const SwitchDate = () => {
  const [activeTab, setActiveTab] = useState('today')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <Card>
      <CardContent>
        <TabContext value={activeTab}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
                <Tab
                  icon={<i className='ri-time-fill' />}
                  value='today'
                  label='Today'
                  iconPosition='start'
                />
                <Tab
                  icon={<i className='ri-calendar-2-line' />}
                  value='all'
                  label='All Date'
                  iconPosition='start'
                />
              </CustomTabList>
            </Grid>
          </Grid>
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default SwitchDate
