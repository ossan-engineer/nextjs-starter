import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import useHello from 'hooks/useHello'
import theme from 'styles/theme'

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
