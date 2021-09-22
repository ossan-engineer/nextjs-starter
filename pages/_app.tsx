import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import useHello from 'hooks/useHello'
import { AppProps } from 'next/app'
import React from 'react'
import theme from 'styles/theme'
import { SWRConfig } from 'swr'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { data, loading, error } = useHello()

  console.log(data, loading, error)

  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: async (url: string) => {
            const res = await axios.get(url)
            const data = await res.data
            return data
          }
        }}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
