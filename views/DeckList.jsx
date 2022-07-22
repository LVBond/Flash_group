const React = require('react');

function DeckList({ deck }) {
  return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Тема {deck}</h5>
          <form action="/input1" method="post">
          <button className="btn btn-primary 2">Выбираем {deck}</button>
          </form>
        </div>
      </div>
  );
}

module.exports = DeckList;
