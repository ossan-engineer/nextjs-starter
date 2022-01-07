import React from 'react'
import { styled } from '@mui/material/styles'

import Link from 'components/Link'

const Title = styled('h1')`
  color: blue;
  font-size: 50px;
`

const Home: React.FC = () => {
  return (
    <>
      <Title>My page</Title>
      <Link href="/read-more">TEST</Link>
    </>
  )
}

export default Home
