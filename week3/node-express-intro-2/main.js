const express = require('express');
const password = 'cupsaregreat';

const cupRouter = require('./routes/cups/cupRoutes');

const app = express();
app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  if(req.headers.authorization !== password) {
    res.status(403).send('<h1> Wrong password </h1>'); //403 error
    return
  }
  res.setHeader('password', password);
  next();
});

// To add route to application two arguements:
// 1. The path
// 2. Handler callback
// Req => from server, response to send back to server
// app.get('/', (req, res, next) => {
//   const { query } = req;

//   if (query.search && query.search !== "") {
//     res.json({message: `you're searching for ${query.search}`});
//     return;
//   }

//   res.json({message: 'great request!'});
// });

// app.get('/:id', (req, res, next) => {
//   const { id } = req.params;
//   res.json({ message: `your id is ${id}`})
// })


const cups = [
  { type: 'plastic', colour: 'red', size: 's'},
  { type: 'glass', colour: 'purple', size: 'm' }
];

cupRouter.route('/')
  .get((req, res, next) => {
    console.log(req.newField);

    if (req.query.search ) {
      const searchCups = cups.filter((cup) => {
        return cups.colour === req.query.search;
      });
      res.json ({ data: searchCups });
      return
    }
    res.json({ data: cups })
  })
  .post((req, res, next) => { //chaining .post
    // console.log(req.body);
    const { type, colour, size } = req.body;
    const newCup = {
      type,
      colour,
      size,
    };
    cups.push(newCup); // push to cups array
    res.json({ data: newCup });
  });

app.use('/cups', cupRouter);

app.use(express.static('public'));
app.listen('8080', () => {
  console.log('listening on port 8080');
});