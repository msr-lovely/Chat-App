// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require("node-fetch");

export default (req, res) => {
  // res.status(200).json(req.body)
  const API_TOKEN = process.env.API_TOKEN;
  const API_URL = process.env.API_URL;

  let inputs = JSON.parse(req.body);
  
  let data = {
      ...inputs,
      options: {
          use_cache: true
      }
  }

  console.log(data);

  fetch(API_URL, {
      method: 'POST',
      headers: {"Authorization": "Bearer " + API_TOKEN},
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data == null)
      res.status(500).json({error: "Cannot access inference server."});
    else
      res.status(200).json({res: data.generated_text})
  })
  .catch( err => {
    console.log(err)
    res.status(500).json({error: err});
  });
}