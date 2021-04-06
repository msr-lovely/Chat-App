const fetch = require("node-fetch");
require('dotenv').config();

exports.handler = async function(event, context) {
    API_TOKEN = process.env.API_TOKEN;
    API_URL = process.env.API_URL;

    let input = JSON.parse(event.body).context + " [endprompt]";
    
    let data = {
        inputs: input, 
        parameters: {
            top_k: 50,
            top_p: 0.95,
            num_return_sequences: 3
        },
        options: {
            use_cache: false
        }
    }

    res = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {"Authorization": "Bearer " + API_TOKEN},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data[0] == null) return [];

        return data.map(d=> {
            let txt = d.generated_text;
    
            // remove prompt
            txt = txt.replace(input, "")
            txt = txt.replace(/\( /g, "(").replace(/ \)/g, ")");
            txt = txt.replace(/(\s*\[endprompt\]\s*)/g, "");
            txt = txt.replace(/(\s*\[newline\]\s*)+/g, "</p><p>");
            txt = txt.replace(/\[\w+\]/g, "").replace(/\~/g, "").trim();
    
            return "<p>" + txt + "</p>";
        });
    })
    .catch( err => {
        return [];
    });

    if (res.length != 0) {
        return {
            statusCode: 200,
            body: JSON.stringify({res: res})
        };
    } else {
        return {
            statusCode: 500,
            body: JSON.stringify({error: res})
        }
    }
}