var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
 
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {

        
   
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });

 const port = process.env.PORT || 3000
http.listen(port, function() {
  console.log("listening on *:3000");
});
