import React from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  Theme,
  StyledEngineProvider
} from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@mui/styles'
import { render, RenderResult } from '@testing-library/react'

import theme from '../styles/theme'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const renderMUI: (Component: JSX.Element) => RenderResult = (
  Component
) => {
  return render(
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{Component}</StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  )
}
