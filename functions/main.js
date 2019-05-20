// Mailchimp audience ID: 597a9e4f7e
// Mailchimp API key: 628b9e69c5a199498a15a1694344b2b3-us12

exports.handler = (event, context, callback) => {
    const https = require("https");

    const postData = JSON.stringify({
        lists: "597a9e4f7e"
    });

    const options = JSON.stringify({
        url: "https://us12.api.mailchimp.com/3.0/",
        hostname:"us12.api.mailchimp.com",
        path: "/3.0/",
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            user: 'key',
            pass: '7617215fc7512935ab6ced47fea0bd42-us12'
        }
    });

    console.log(`Options: ${options}`);
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



