import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <main>
              <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/faq'>Faq</Link>
                  <Link to='/contact'>Contact</Link>
              </nav>

              <Route exact path='/' render={
                  () => (
                    <div>Home Page</div>
                  )
                }
              />

              <Route path='/about' render={
                  () => (
                    <div>About Page</div>
                  )
                }
              />

              <Route path='/faq' render={
                  () => (
                    <div>FAQ Page</div>
                  )
                }
              />

              <Route path='/contact' render={
                  () => (
                    <div>Contact Page</div>
                  )
                }
              />

          </main>
      </Router>




    );
  }
}

export default App;
