var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
io.on('connection', async function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  for (var i=0; i<map1.length; i++) {
    socket.broadcast.emit('hi', map1[i])
    await delayer();
  }
});

function delayer() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(true)
    }, 1000)
  })
}

map1 = [
  {
    column: 1,
    key : 'W',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'S',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'A',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'g',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'B',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'h',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'T',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'L',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'S',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 's',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 't',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'z',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'q',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'I',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'P',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'e',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'x',
    deltaTime: 1000
  },
  {
    column: 1,
    key : 'Y',
    deltaTime: 1000
  }
 
]
//var 1=0


