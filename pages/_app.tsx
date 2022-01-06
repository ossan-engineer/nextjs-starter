import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { CacheProvider, EmotionCache } from '@emotion/react'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import useHello from 'hooks/useHello'
import theme from 'styles/theme'

import createEmotionCache from 'utils/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) => {
  const { data, loading, error } = useHello()

  console.log(data, loading, error)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
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
    </CacheProvider>
  )
}

export default MyApp
