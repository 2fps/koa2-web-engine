const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 3001 });

wsServer.on('connection', function(ws) {
    console.log('webSocket connected');
    ws.on('message', function(message) {
        console.log('received：', message);
    });
    ws.on('close', function() {
        console.log('webSocket closed');
    });

    ws.send('from server');
});