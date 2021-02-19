const time = async (request, response): Promise<void> => {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();

  const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`)
  const subscribersResponseJson = await subscribersResponse.json();
  response.json(
    {
      date: dynamicDate.toUTCString(),
      subscribers: subscribersResponseJson.total_subscribers
    }
  )
}

export default time;