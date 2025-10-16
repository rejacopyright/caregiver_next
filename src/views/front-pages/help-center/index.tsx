'use client'

// React Imports
import { useEffect, useState } from 'react'

import { useSettings } from '@core/hooks/useSettings'

import Articles from './Articles'
// Component Imports
import HelpCenterHeader from './HelpCenterHeader'
import KeepLearning from './KeepLearning'
import KnowledgeBase from './KnowledgeBase'
import NeedHelp from './NeedHelp'

const HelpCenterWrapper = () => {
  // States
  const [searchValue, setSearchValue] = useState('')

  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HelpCenterHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Articles />
      <KnowledgeBase />
      <KeepLearning />
      <NeedHelp />
    </>
  )
}

export default HelpCenterWrapper
