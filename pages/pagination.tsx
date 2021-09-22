import { Button } from '@mui/material'
import Data from 'components/Data'
import React, { useState } from 'react'

const Pagination = () => {
  const [page, setPage] = useState(1)

  return (
    <>
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

export default Pagination
