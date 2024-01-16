const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  //res.end(`Hello, World! The date today is ${today.getDate()}`);
  let dateVal = today.getDate();
  let dateTime = dateVal.getHours();
  let greeting = "Hello World";
  if (dateTime < 12){
    greeting = "Good Morning!";
  }
  if (dateTime >= 12 && dateTime <= 17){
    greeting = "Good Afternoon!";
  }
  if (dateTime > 17 && dateTime <=21 ){
    greeting = "Good Evening!";
  }
  if (dateTime > 21){
    greeting = "Good Night!";
  }
  res.end(`The date and time is ${dateVal}, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);