// Mailchimp audience ID: 597a9e4f7e
// Mailchimp API key: 44ac5ff4527df465cd8716c6367ce255-us12

exports.handler = (event, context, callback) => {
    const https = require("https");

    const postData = JSON.stringify({
        lists: "597a9e4f7e"
    });

    const options = {
        hostname: "us12.api.mailchimp.com",
        path: "/3.0/",
        port: 443,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: 'brandnewguys:44ac5ff4527df465cd8716c6367ce255-us12'
    };

    console.log(`Options: ${JSON.stringify(options)}`);
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
