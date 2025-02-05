import express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hii from http server");
});
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({ msg: "user created with id : " + user.id });
});

app.listen(5000, () => {
  console.log("http server started at port : 5000");
});
