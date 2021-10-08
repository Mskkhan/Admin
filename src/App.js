
import React,{useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home'
import SignIn from './container/SignIn';
import SignUp from './container/SignUp';
import PrivateRoute from './Components/Hoc/privateRoute';

import { useDispatch, useSelector } from 'react-redux';
import { isUserLogedIn } from './action';
import Products from './container/Products';
import Orders from './container/Orders';
import Category from './container/Category';
import { getInitialData } from './action/initialData.action';
import NewPage from './container/NewPage';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogedIn());
    }
    if (!auth.authenticate) {
    dispatch(getInitialData());
    }
  },[auth.authenticate]);

  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page"  component={NewPage} />
        <PrivateRoute path="/category"  component={Category} />
        <PrivateRoute path="/Products"  component={ Products} />
        <PrivateRoute path="/Orders"  component={ Orders} />

        <Route path="/signin"  component={SignIn} />
        <Route path="/signup" component={SignUp} />

      </Switch>

    </div>
  );
}

export default App;
