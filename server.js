const app = require('./app');
const http = require('http');
const setupSocket = require('./socket');
const connectDB = require('./config/db');

const server = http.createServer(app);

// Connect to DB
connectDB();

// Setup Socket.io
setupSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
