const WebSocket = require('ws')
const port = 8080

// Set up server
const wss = new WebSocket.Server({ port: port })


wss.on('connection', function connection(ws) {
  console.log('Server connected')

  ws.on('message', function incoming(message) {
    const data = JSON.parse(message)
    if (data.action === 'roll_dice') {
      const diceSize = data.dice
      const roll = Math.floor(Math.random() * diceSize) + 1
      ws.send(JSON.stringify({ number: roll }))
    }
  })
})