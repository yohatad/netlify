// Using CommonJS syntax for requiring the Netlify Functions runtime
const { handler } = require("@netlify/functions");

// Your function logic
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, World!" })
  };
};