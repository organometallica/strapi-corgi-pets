const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { corgi, type } = JSON.parse(event.body);
  const response = await fetch('http://68.183.134.136/reactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type,
      corgi,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
