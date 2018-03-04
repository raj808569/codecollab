import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import BinsMain from '../components/bins/bins_main';
import BinsList from '../components/bins/bins_list';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={BinsList} />
            <Route exact={true} path="/bins/:binId" component={BinsMain} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
