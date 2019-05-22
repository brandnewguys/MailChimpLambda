exports.handler = (event, context, callback) => {
    const https = require("https");
    // let audienceID = '597a9e4f7e';      // Mailchimp audience ID
    // let APIkey = '44ac5ff4527df465cd8716c6367ce255-us12';       // Mailchimp API key

    const postData = event.body;

    const options = {
        hostname: "us12.api.mailchimp.com",
        path: "/3.0/lists/" + process.env.audienceID + "/members/",
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: 'brandnewguys:' + process.env.APIkey
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
