import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import DecksPage from './components/DecksPage';
import { getAllCards, getCurrUsersCards } from './store/card';
import CardsPage from './components/CardsPage';
import SplashPage from './components/SplashPage';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} >
          <SplashPage />
        </Route>
        <ProtectedRoute path='/decks' exact={true} >
          <DecksPage />
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:deckId/cards'>
          <CardsPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
