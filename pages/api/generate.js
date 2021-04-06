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

  let res = await fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {"Authorization": "Bearer " + API_TOKEN},
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if (data == null) return [];

      return d.generated_text;
  })
  .catch( err => {
      return [];
  });

  if (res.length != 0) {
    res.status(200).json({res: res})
  } else {
    res.status(500).json({error: res})
  }
}