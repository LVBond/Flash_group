const React = require('react');
const Layout = require('./Layout');

function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">First cards</h5>
          <p className="card-text">Sports</p>
          <button href="#" className="btn btn-primary 1">Try</button>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Seconds cards</h5>
          <p className="card-text">Humor</p>
          <a href="#" className="btn btn-primary 2">Try</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Third cards</h5>
          <p className="card-text">Something</p>
          <form action="/input" method="post">
          <button className="btn btn-primary 2">Try3</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Main;
