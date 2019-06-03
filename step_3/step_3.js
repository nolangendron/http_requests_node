var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    var buffer = '';

    response.on('data', function(chunk) {
      buffer += chunk;
    })

    response.on('end', function() {
      console.log(buffer);
      })

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);