import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import Link from 'components/Link'
import { getFeaturedEvents } from 'dummy-data'
import EventList from '@/components/EventList'

const Title = styled('h1')`
  color: blue;
  font-size: 50px;
`

const HomePage: React.FC = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <>
      <Title>My page</Title>
      <Button LinkComponent={Link} href="/events">
        EVENTS
      </Button>
      <Button LinkComponent={Link} href="/events/hoge">
        EVENT
      </Button>
      <Button LinkComponent={Link} href="/events/hoge/fuga">
        EVENT_SLUG
      </Button>
      <EventList items={featuredEvents}></EventList>
    </>
  )
}

export default HomePage
