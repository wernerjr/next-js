const products = (request, response) => {
  response.json({
    id: request.query.id
  });
}

export default products;