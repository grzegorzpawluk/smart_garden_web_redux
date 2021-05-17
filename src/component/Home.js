import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Weather from './Weather';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../features/login/LoginForm';
import { fetchUser } from './../features/login/loginSlice';

function Home() {
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');

    if (loginToken) dispatch(fetchUser());
  }, [dispatch]);

  if (isLogged === true) {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Weather} />
                <Route path="/weather" component={Weather} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/*" component={Weather} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav />
            <div className="main">
              <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={LoginForm} />
                <Route path="/*" component={LoginForm} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Home;
