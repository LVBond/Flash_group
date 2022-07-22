const React = require('react');

function DeckList({ deck, id }) {
  return (
    <div className="card" id={id} style={{ width: '18rem' }}>
      {console.log(deck)}
      <div className="card-body">
        <h5 className="card-title">{deck}</h5>
        <form action="/input1" method="post">
          <button className="btn btn-primary 2">Выбираем</button>
        </form>
      </div>
    </div>
  );
}

module.exports = DeckList;
