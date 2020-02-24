const express = require('express');

const port = process.env.PORT || '8080';
const app = express();

// 1. add middleware for parsing different info in requests. 
// 2. import your router, and attach is to a router for the resource.

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});