import axios from '@axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const getScheduleReport = () => {
  return useQuery({
    queryKey: ['getScheduleReport'],
    queryFn: () => axios.get('schedule/report'),
    select: ({ data }) => data?.data || {},
  })
}

export const getTodayScheduleReport = () => {
  return useQuery({
    queryKey: ['getTodayScheduleReport'],
    queryFn: () => axios.get('schedule/report/today'),
    select: ({ data }) => data?.data || {},
  })
}

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

export const getDetailSchedule = (id?: string) => {
  return useQuery({
    queryKey: ['getDetailSchedule', id],
    queryFn: () => axios.get(`schedule/${id}`),
    enabled: Boolean(id),
    select: ({ data }) => data?.data || {},
  })
}

export const getActiveSchedule = () => {
  return useQuery({
    queryKey: ['getActiveSchedule'],
    queryFn: () => axios.get(`schedule/active`),
    select: ({ data }) => data?.data || {},
  })
}

export const clockIn = (id: string) => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => axios.post(`schedule/${id}/start`, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['getAllSchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getTodaySchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getActiveSchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getScheduleReport'], exact: false })
      qc.invalidateQueries({ queryKey: ['getTodayScheduleReport'], exact: false })
    },
  })
}

export const clockOut = (id: string) => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => axios.post(`schedule/${id}/end`, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['getAllSchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getTodaySchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getActiveSchedule'], exact: false })
      qc.invalidateQueries({ queryKey: ['getScheduleReport'], exact: false })
      qc.invalidateQueries({ queryKey: ['getTodayScheduleReport'], exact: false })
    },
  })
}
