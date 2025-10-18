import axios from '@axios'
import { useQuery } from '@tanstack/react-query'

export const getTodaySchedule = () => {
  return useQuery({
    queryKey: ['getTodaySchedule'],
    queryFn: () => axios.get('schedule/today'),
    select: ({ data }) => data?.data || { data: [] },
  })
}
