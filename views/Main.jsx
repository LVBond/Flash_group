const React = require('react');
const Layout = require('./Layout');
const DeckList = require('./DeckList');

function Main({ title, deck }) {
  return (
    <Layout title={title}>
      <section className="container">
        <h1>Заголовок</h1>
        {deck.map((el) => <DeckList deck={el.deck} id={el.id} />)}
      </section>
    </Layout>
  );
}

module.exports = Main;
