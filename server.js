const http = require('http');
const app = require('./api/app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, (err) => {  
    if (err) {
      return console.log(`Unable to start the server on port ${port}`, err);
    }
    console.log(`This server is running on port ${port}`);
});