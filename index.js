const server = require("./server.js");

server.listen((port = 3050), () => {
  console.log(`\n Listening on port ${port}\n`);
});
