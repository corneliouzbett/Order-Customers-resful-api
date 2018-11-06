module.exports.responseObject = {
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    }
  };
  
  module.exports.responseBody = {
    status: 'success',
    data: [
      {
        id: 4,
        customer_name: 'James woodward',
        phone_number: '034930493'
      },
      {
        id: 5,
        customer_name: 'Jurassic Park',
        phone_number: '909099099'
      },
      {
        id: 6,
        customer_name: 'Ice Age',
        phone_number: '8394439439'
      }
    ]
  };