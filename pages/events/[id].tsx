import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from 'dummy-data'

import EventSummary from '@/components/EventDetail/event-summary'
import EventLogistics from '@/components/EventDetail/event-logistics'
import EventContent from '@/components/EventDetail/event-content'

const EventDetailPage = () => {
  const router = useRouter()

  const id = router.query.id as string
  const event = getEventById(id)

  if (!event) {
    return <p>No event found!</p>
  }

  const { title, description, date, location, image } = event

  return (
    <>
      <EventSummary title={title}></EventSummary>
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      ></EventLogistics>
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage
