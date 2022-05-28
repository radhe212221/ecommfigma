import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import DetailsPage from './pages/DetailsPage'
import CategoryPage from './pages/CategoryPage'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={ProductsPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/Catgeory" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
