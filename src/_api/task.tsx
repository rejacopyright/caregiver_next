import axios from '@axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const getTask = (id?: any) => {
  return useQuery({
    queryKey: ['getTask'],
    enabled: Boolean(id),
    queryFn: () => axios.get(`task/schedule/${id}`),
    select: ({ data }) => data?.data || { data: [] },
  })
}

export const updateTask = (id: string) => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => axios.post(`task/${id}/update`, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['getTask'], exact: false })
    },
  })
}

export const resetAllDatas = () => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: () => axios.post(`developer/database/reset`),
    onSuccess: () => {
      qc.invalidateQueries()
    },
  })
}
