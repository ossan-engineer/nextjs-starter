import React from 'react'
import { Button } from '@mui/material'
import Link from 'components/Link'

export type Event = {
  id: string
  title: string
  description: string
  location: string
  date: string
  image: string
  isFeatured: boolean
}

const EventItem: React.FC<Event> = ({
  id,
  title,
  description,
  location,
  date,
  image,
  isFeatured
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = location.replace(',', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={`/${image}`} alt={description} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Button LinkComponent={Link} href={exploreLink}>
            Exprore Event
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
