
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { createStore } from 'redux';
import productReducer from './action/reducer/product-reducer';
import { Provider } from 'react-redux';
import ProductPage from './components/ProductPage';

const store = createStore(productReducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/product' component={ProductPage} />
        </Switch>
      </Router>
    </Provider>
    // <div className="App">
    //   <ClippedDrawer></ClippedDrawer>
    // </div>
  );
}

export default App;
