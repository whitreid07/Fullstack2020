const express = require('express');
const router = express.Router();
const cups = require('./cupData');

router.route('/')
  .get((req, res, next) => {
    console.log(req.newField);
    if (req.query.search) {
      const searchCups = cups.filter((cup) => {
        return cup.colour === req.query.search;
      });
      res.json({ data: searchCups });
      return
    }
    res.json({ data: cups });
  })
  .post((req, res, next) => {
    const { type, colour, size } = req.body;
    const newCup = {
      id: params.id,
      size: body.size,
      type: body.type,

    };
    cups.push(newCup);
    res.json({ data: newCup });
  });
router.route('/:id')
  .get((req, res) => {
    console.log(cup)
    const cup = cups.find((cup) => {
      return cup.id === parseInt(req.params.id);
    });

    
  
    res.json({ data: cup});
  });

  const cupIndex = cups.findIndex((cup) => {
    if (!cupIndex) {
      res.status(404).json({ message: `cup with id ${req.params.id} doesn't exist` })
      return;
    }

    cups[cupIndex] = newCup;
    res.json({ dats: { id: params.id }});
  });

module.exports = router;