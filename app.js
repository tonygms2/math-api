const express = require("express");
const app = express();

app.get("/math", (req, res) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);

  res.send({
    arg1: a,
    arg2: b,
    addition: a + b,
    subtraction: a - b,
    multiplicition: a * b,
    divsion: b === 0 ? "denominator can't be zer0" : a / b,
  });
});

app.listen(3000, () => console.log("Api listening on port 3000!"));
