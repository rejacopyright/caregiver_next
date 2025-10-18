import axios from '@axios'
import { useQuery } from '@tanstack/react-query'

export const getAllSchedule = (params?: any) => {
  return useQuery({
    queryKey: ['getAllSchedule', params],
    queryFn: () => axios.get('schedule', { params }),
    select: ({ data }) => data?.data || { data: [] },
  })
}

export const getTodaySchedule = (params?: any) => {
  return useQuery({
    queryKey: ['getTodaySchedule', params],
    queryFn: () => axios.get('schedule/today', { params }),
    select: ({ data }) => data?.data || { data: [] },
  })
}
