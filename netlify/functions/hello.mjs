const axios = require('axios');

exports.handler = async (event) => {
  const flaskEndpoint = 'https://35b3-41-173-31-248.ngrok-free.app/receive-data'; // Replace with your Flask app's URL

  const dataToSend = { message: 'Hello from Netlify Function!' };

  try {
    const response = await axios.post(flaskEndpoint, dataToSend);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data sent to Flask app successfully', response: response.data }),
    };
  } catch (error) {
    console.error('Error sending data to Flask:', error);
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ message: 'Failed to send data to Flask', error: error.message }),
    };
  }
};
