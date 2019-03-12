const express = require('express');
const app = express();
const port = 3000;

app.route('/')
  .get((req, res) => {
    res.end(`hello,world`);
  });
app.listen(port, () => {
  console.log(`The server is listening at port: ${port}`);
});