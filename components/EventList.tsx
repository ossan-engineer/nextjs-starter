import React from 'react'
import EventItem, { Event } from './EventItem'

type Props = {
  items: Event[]
}

const EventList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem {...item} key={item.id}></EventItem>
      ))}
    </ul>
  )
}

export default EventList
