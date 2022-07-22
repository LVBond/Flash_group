const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { decks } = require('../db/models');
const Main = require('../views/Main');
// const { decks, cards } = require('../db/models');

router.get('/', async (req, res) => {
  const deck = await decks.findAll({ raw: true, attributes: ['deck'] });
  const result = deck.map((el) => el.deck);
  const main = React.createElement(Main, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const inputWord = req.body.input;
  res.send(inputWord);
});

module.exports = router;
