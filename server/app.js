import express from "express";
const app = express();

import user from "./routes/user.js";

const PORT = 3004;

app.use("/user", user);

//iniciando el server
app.listen(PORT, () => {
  console.log(`listening in on port ${PORT} `);
});
