const React = require('react');
const Layout = require('./Layout');
const arr = [1,2,3,4,5]

function First ({ title }) {
  return (
    <Layout title={title}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">First cards</h5>
          <p className="card-text">Вопрос #1</p>
          <p className="card-text">Вопрос #2</p>
          <p className="card-text">Вопрос #3</p>
          <p className="card-text">Вопрос #4</p>
          <p className="card-text">Вопрос #5</p>
          <form action="/input1" method="post">
          <button className="btn btn-primary 2">First question</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = First;
