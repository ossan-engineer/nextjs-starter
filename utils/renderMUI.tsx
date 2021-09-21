import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { render, RenderResult } from '@testing-library/react'

import theme from '../styles/theme'

export const renderMUI: (Component: JSX.Element) => RenderResult = (
  Component
) => {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
