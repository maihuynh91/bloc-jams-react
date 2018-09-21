import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Library from './components/Library/Library';
import Album from './components/Album/Album';

class App extends Component {
  render() {
    return (   
      <div className="App">

        <header>
          <h1>Bloc Jams</h1>
          <nav>
            <Link to="/" className="link"><span>Landing</span></Link>
            <Link to="/library" className="link"><span>Library</span></Link> 
          </nav>
        </header>

        <main>
          <Route exact path ="/" component= {Landing} />
          <Route path = "/library" component= {Library} />
          <Route path = "/album/:slug" component= {Album} />
        </main>

      </div>
    );
  }
}

export default App;
