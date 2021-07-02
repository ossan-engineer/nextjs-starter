const handler = (_, res: any) => {
  const body = { message: 'Hello' }
  res.statusCode = 200
  res.json(body)
}

export default handler
