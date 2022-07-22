const React = require('react');

function CardList({ card }) {
  return (
    <div className="cardList" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{card.quest}</h5>
        <h5 className="card-title">{card.answer1}</h5>
        <form className="inputForm">
          <button type="click" id="1" className="btn btn-primary">Выбираем</button>
          <h5 className="card-title">{card.answer2}</h5>
          <button type="click" id="2" className="btn btn-primary">Выбираем</button>
          <h5 className="card-title">{card.answer3}</h5>
          <button type="click" id="3" className="btn btn-primary">Выбираем</button>
        </form>
      </div>
    </div>
  );
}

module.exports = CardList;
