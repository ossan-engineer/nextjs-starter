import React from 'react'
import { screen, render } from '@testing-library/react'

import Test from './Test'

describe('Home', () => {
  it('should render Home', async () => {
    render(<Test />)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
