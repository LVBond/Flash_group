const React = require('react');

function CardList({ card }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {console.log(card)}
      <div className="card-body">
      <h5 className="card-title">{card.quest}</h5>
        <h5 className="card-title">{card.answer1}</h5>
        <form>
          <button className="btn btn-primary 2">Выбираем</button>
        </form>
        <h5 className="card-title">{card.answer2}</h5>
        <form>
          <button className="btn btn-primary 2">Выбираем</button>
        </form>
        <h5 className="card-title">{card.answer3}</h5>
        <form>
          <button className="btn btn-primary 2">Выбираем</button>
        </form>
      </div>
    </div>
  );
}

module.exports = CardList;
