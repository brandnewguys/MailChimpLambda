exports.handler = (event, context, callback) => {
    const https = require("https");

    const postData = JSON.stringify({
        lists: "597a9e4f7e"
    });

    const options = {
        hostname: 'usX.api.mailchimp.com',
        path: '/3.0/lists',
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = https.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);

        let data = '';
        res.setEncoding('UTF8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            data += chunk;
        });
        res.on('end', () => {
            return callback(null, {
                statusCode: 200,
                body: "POST Succesful"
            });
        });
    });

    req.on('error', (e) => {
        console.log(`Error: ${e.message}`)
    });

    req.write(postData);
    req.end();
};