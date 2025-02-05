import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const wss = new WebSocketServer({
  port: 8080,
});
wss.on("connection", async (socket) => {
  console.log("user connected");
  const user = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("user connected with id : " + user.id);
});

console.log("ws-server started at port : 8080");
