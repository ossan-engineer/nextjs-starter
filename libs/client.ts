import { createClient } from 'microcms-js-sdk'

export const client =
  process.env.NEXT_PUBLIC_SERVICE_DOMAIN &&
  process.env.NEXT_PUBLIC_API_KEY &&
  createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY
  })
