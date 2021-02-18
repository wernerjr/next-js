const time = (request, response): void => {
  const dynamicDate = new Date();

  response.json(
    {
      date: dynamicDate.toUTCString()
    }
  )
}

export default time;