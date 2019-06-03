var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    var buffer = '';

    response.on('data', function(chunk) {
      buffer += chunk;
    })

    response.on('end', function() {
      callback(buffer);
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);