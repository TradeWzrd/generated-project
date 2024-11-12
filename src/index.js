const express = require('express');
    const WebSocket = require('ws');

    const app = express();
    const server = require('http').createServer(app);
    const wss = new WebSocket.Server({ server });

    app.use(express.static('public'));

    wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
      });

      ws.send('Hello! Message from server.');
    });

    server.listen(3000, () => {
      console.log('Server started on port 3000');
    });
