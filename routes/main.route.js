const router = require('express').Router();
const { decks, cards } = require('../db/models');

router.get('/', async (req, res) => {
  const deck = await decks.findAll({ raw: true, attributes: ['deck'] });
  const card = await cards.findAll({ raw: true, attributes: ['card'] });
  const result = deck.map((el) => el.deck);
  const resultCard = card.map((el) => el.card);
  console.log(result);
  console.log(resultCard);
  res.send(resultCard);
});

module.exports = router;
