const React = require('react');
const Layout = require('./Layout');

function Second ({ title }) {
  return (
    <Layout title={title}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">First cards</h5>
          <p className="card-text">First question</p>
          <form action="/input1" method="post">
          <button className="btn btn-primary 2">First question</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Second;