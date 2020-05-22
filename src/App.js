import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Receipt from './components/Receipt';
import ReceiptForm from './components/ReceiptForm';
import Shops from './components/Shops';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar className="navbar"/>
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/shops' component={Shops} />
        <Route path='/receipt' component={Receipt} />
      </Switch>
      <Route path='/receiptForm' component={ReceiptForm} />
    </BrowserRouter>
  );
};

export default App;
