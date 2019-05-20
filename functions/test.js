var request = require('request');

exports.handler = (event, context, callback) => {
    var options = {
        url: 'https://us12.api.mailchimp.com/3.0/',
        auth: {
            'user': 'key',
            'pass': '7617215fc7512935ab6ced47fea0bd42-us12'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    request(options, callback);
}