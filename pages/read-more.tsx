import React from 'react'
import { Button } from '@mui/material'
import useSWRInfinite from 'swr/infinite'

const ReadMore = () => {
  const { data, size, setSize } = useSWRInfinite<
    { id: number; title: string }[]
  >((index) => `/api/pagination?page=${index + 1}&limit=3`)
  if (!data) return 'loading'

  return (
    <>
      {data.map((d, index) =>
        d.map(({ id, title }) => (
          <div key={index}>
            <div>id: {id}</div>
            <div>title: {title}</div>
          </div>
        ))
      )}
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        onClick={() => setSize(size + 1)}
      >
        READ MORE
      </Button>
    </>
  )
}

export default ReadMore
