const time = (request, response): void => {
  const dynamicDate = new Date();

  response.json(
    {
      date: dynamicDate.toGMTString()
    }
  )
}

export default time;