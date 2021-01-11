// ReactDOM.render( 
//     <h1>Commence Dashboard Creation!</h1>, 
//     document.querySelector('main') 
// );
class App extends React.Component {
    render () {
      return(
      <main id="container">
      <Sidebar />
      <Reviews />
      <Visitors />
      </main>
      )}
  };
  
  class Sidebar extends React.Component {
    render () {
        return(
      <div id="sidebar"> 
        <h2>Dashboard</h2>
        <h3>Widget</h3>
        <h3>Reviews</h3>
        <h3>Customers</h3>
        <h3>Online Analysis</h3>
        <h3>Settings</h3>
        
      </div>
      )}
  };
  
  class Reviews extends React.Component {
    render () {
        return(
      <div id="reviews">
          <div id="rev">
              <h2>Reviews</h2>
              <h3>1,281</h3>
          </div>
          <div id="rev">
              <h2>Average Rating</h2>
              <h3>4.6</h3>
              <img id='img1' src="5 Stars.png"/>
          </div>
          <div id="rev">
              <h2>Sentiment Analysis</h2>
              <h3>960</h3>
              <h3>122</h3>
              <h3>321</h3>        
          </div>
      </div>
      )}
  };
  
  
  class Visitors extends React.Component {
    render () {
        return(
      <div id="visitors">
          <div id="vis">
              <h2>Website Visitors</h2>
              <h1>821</h1>
  
          </div>
          <div id="vis">
              <img src="graph.jpg"/>
          </div>
      </div>
      )}
  };
  ReactDOM.render(<App />, document.querySelector('.container'));
