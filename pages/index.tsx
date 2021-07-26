import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import Data from 'components/Data'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

const Home: React.FC = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Title>My page</Title>
      <Data page={page}></Data>
      <div style={{ display: 'none' }}>
        <Data page={page + 1} />
      </div>

      <Button
        variant="outlined"
        disableElevation
        color="primary"
        onClick={() => setPage(page - 1)}
      >
        PREV
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        onClick={() => setPage(page + 1)}
      >
        NEXT
      </Button>
    </>
  )
}

export default Home
