const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { decks } = require('../db/models');
const Main = require('../views/Main');
const First = require('../views/First');
const Second = require('../views/Second');
const Third = require('../views/Third');
// const { decks, cards } = require('../db/models');

router.get('/', async (req, res) => {
  const deck = await decks.findAll({ raw: true, attributes: ['id', 'deck'] });
  // const result = deck.map((el) => el.deck);
  // const main = React.createElement(Main, { title: 'Express' });
  // const html = ReactDOMServer.renderToStaticMarkup(main);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
  res.renderComponent(Main, { deck });
});

router.post('/input1', (req, res) => {
  const inputWord = req.body.input;
  const main = React.createElement(First, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/input2', async (req, res) => {
  const inputWord = req.body.input;
  const main = React.createElement(Second, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/input3', async (req, res) => {
  const inputWord = req.body.input;
  const main = React.createElement(Third, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
