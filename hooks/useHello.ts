import axios from 'axios'
import useSWR from 'swr'

const axiosFetcher = async (url: string) => {
  const res = await axios.get(url)
  const data = await res.data
  return data
}

const useHello = () => {
  const { data, error } = useSWR('/api/hello', axiosFetcher)

  return {
    data,
    loading: !error && !data,
    error
  }
}

export default useHello
