require("dotenv").config();
const express = require("express");
const app = express();
require("./db/mongoose");
const cors = require("cors");
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/users");

app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// test
app.get("/", (req, res) => {
  res.send({ success: true });
});
