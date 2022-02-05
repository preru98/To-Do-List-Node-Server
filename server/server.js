const http = require('http');
const app =  require('../app');

const connectDB = require('../DB/connection');

const server = http.createServer(app);

connectDB();

const port = 3003;
const hostname = 'localhost';

server.listen(port, hostname, port, () => {
    console.log(`RFID Tracking Server Up and Running at http://${hostname}:${port}`);
});