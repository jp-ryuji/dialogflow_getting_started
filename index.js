exports.myWeather = function myWeather (request, response) {
  response.json({ fulfillmentText: 'This is a sample response from your webhook!' });
};
