let io;
let sockets = [];
function defineWebSocket() {
  var app = require("http").createServer();
  io = require("socket.io")(app);

  app.listen(8081);

  io.on("connection", function(socket) {
    sockets.push(socket);
    let fullname;
    socket.on("user-connected", function(data) {
      console.log(data);
      fullname = data.fullname;
      socket.broadcast.emit("new-user", {
        fullname: data.fullname
      });
    });

    socket.on("disconnect", socket => {
      console.log(fullname + " is disconnecting");

      for (let i = 0; i < sockets.length; i++) {
        if (sockets[i]) {
          try {
            sockets[i].broadcast.emit("bye-user", {
              fullname: fullname
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
    });
  });
}

module.exports = {
  defineWebSocket
};
