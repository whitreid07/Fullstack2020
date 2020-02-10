const express = require('express');
// create express app
const app = express();
app.get('/html', (req, res) => {
  res.send('<h1>Your HTML</h1>')
});
app.get('/json', (req, res) => {
  console.log(req.query);
  res.json({ message: 'hellooo' }); // this sends a json 
});
app.get('/badjson', (request, response) => {
  response.status(500).json({ message: 'error' });
});
app.get('/path/:id', (req, res) => {
  res.status(200).json({ id: req.params.id });
});
app.get('/redirect', (req, res) => {
  res.redirect('https://www.google.com');
});
app.get('*', (req, res) => {
  res.status(404).json({ message: 'route does not exist' });
});
// start application
app.listen('8080', () => {
  console.log('listening on port 8080');
});