const React = require('react');
const CardList = require('./CardList');
const Layout = require('./Layout');

function First({ title, result }) {
  return (
    <Layout title={title}>
      <section className="container">
        <h1>Заголовок</h1>
        {result.map((el) => <CardList card={el} />)}
      </section>
    </Layout>
  );
}

module.exports = First;
