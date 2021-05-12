import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import ItemPage from '../items/ItemPage';
import ItemDetails from '../item-details/ItemDetails';
import AddItem from '../add-item/AddItem';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/item" exact={true}
                render={routerProps => (
                  <ItemPage {...routerProps} />
                )}
              />

              <Route path="/item/add" exact={true}
                render={routerProps => (
                  <AddItem {...routerProps} />
                )}
              />

              <Route path="/item-details/:id"
                render={routerProps => (
                  <ItemDetails {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
