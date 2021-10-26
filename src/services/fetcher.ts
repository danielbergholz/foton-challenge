import api from './api'

const fetcher = async <T = any>(url: string): Promise<T> => {
  const { data } = await api.get<T>(url)

  return data
}

export default fetcher
