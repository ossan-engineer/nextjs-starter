import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const Title = styled('h1')`
  color: blue;
  font-size: 50px;
`

const Home: React.FC = () => {
  return (
    <>
      <Title>My page</Title>
      <Button>TEST</Button>
    </>
  )
}

export default Home
