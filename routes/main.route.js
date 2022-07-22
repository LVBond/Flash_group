const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { decks, deckscards, cards } = require('../db/models');
const Main = require('../views/Main');
const First = require('../views/First');

router.get('/', async (req, res) => {
  const deck = await decks.findAll({ raw: true, attributes: ['id', 'deck'] });
  res.renderComponent(Main, { deck });
});

router.post('/input:id', async (req, res) => {
  const { params } = req;
  const card = await cards.findAll({ raw: true, attributes: ['id', 'quest', 'answer1', 'answer2', 'answer3'] });
  const deckCards = await deckscards.findAll({ raw: true, attributes: ['deck_id', 'card_id'] });
  const deckIdFilter = deckCards.filter((el) => el.deck_id === Number(params.id)).map((el) => el = el.card_id);
  const result = card.filter((el) => deckIdFilter.includes(el.id));
  res.renderComponent(First, { result });
});

module.exports = router;
