// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require("node-fetch");
require('dotenv').config();

export default (req, res) => {
  // res.status(200).json(req.body)
  API_TOKEN = process.env.API_TOKEN;
  API_URL = process.env.API_URL;

  let inputs = JSON.parse(req.body);
  
  let data = {
      ...inputs,
      options: {
          use_cache: false
      }
  }
  res.status(200).json(data)

  fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {"Authorization": "Bearer " + API_TOKEN},
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data == null) {
      res.status(500).json({error: "Cannot access inference server."});
    }
    res.status(200).json({res: data.generated_text})
  })
  .catch( err => {
    res.status(500).json({error: err});
  });
}