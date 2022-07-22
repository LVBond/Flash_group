const React = require('react');
const Layout = require('./Layout');
const DeckList = require('./DeckList');
const arr =[1,2,3,4,5]

function Main({ title }) {
  return (
    <Layout title={title}>
      <section className = "container">
      <h1>Заголовок</h1>
        {arr.map(el => <DeckList key={el} deck = {el}/> )}
      </section>
    </Layout>
  );
}

module.exports = Main;
