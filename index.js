const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.header.username;
  const password = req.header.password;
  const kidneyId = req.header.kidneyId;
  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ msg: "something up with your inputs" });
  } else {
    if (kidneyId != 1 && kidneyId != 2) {
      res.status(400).json({ msg: "something up with your inputs" });
    } else {
      // do something with kidney here
      res.json({
        msg: "Your kidney is fine!",
      });
    }
  }
});

app.listen(3003);