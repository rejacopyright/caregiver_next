// Third-party Imports
// Type Imports
import type { ThemeColor } from '@core/types'
import type { EventInput } from '@fullcalendar/core'
import type { Dispatch } from '@reduxjs/toolkit'

export type CalendarFiltersType = 'Personal' | 'Business' | 'Family' | 'Holiday' | 'ETC'

export type CalendarColors = {
  ETC: ThemeColor
  Family: ThemeColor
  Holiday: ThemeColor
  Personal: ThemeColor
  Business: ThemeColor
}

export type CalendarType = {
  events: EventInput[]
  filteredEvents: EventInput[]
  selectedEvent: null | any
  selectedCalendars: CalendarFiltersType[]
}

export type AddEventType = Omit<EventInput, 'id'>

export type SidebarLeftProps = {
  mdAbove: boolean
  calendarApi: any
  calendarStore: CalendarType
  leftSidebarOpen: boolean
  dispatch: Dispatch
  calendarsColor: CalendarColors
  handleLeftSidebarToggle: () => void
  handleAddEventSidebarToggle: () => void
}

export type AddEventSidebarType = {
  calendarStore: CalendarType
  calendarApi: any
  dispatch: Dispatch
  addEventSidebarOpen: boolean
  handleAddEventSidebarToggle: () => void
}
