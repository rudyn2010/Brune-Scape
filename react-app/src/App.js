import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import CategoriesPage from './components/CategoriesPage';
import DecksPage from './components/DecksPage';
import CardsPage from './components/CardsPage';
import SplashPage from './components/SplashPage';
import UserNavBar from './components/UserNavBar';
import { getAllCards, getCurrUsersCards } from './store/card';


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
        <ProtectedRoute path='/categories' exact={true} >
          <UserNavBar />
          <CategoriesPage />
        </ProtectedRoute>
        <ProtectedRoute path='/categories/:categoryId/decks' exact={true} >
          <UserNavBar />
          <DecksPage />
        </ProtectedRoute>
        <ProtectedRoute path='/categories/:categoryId/decks/:deckId/cards' >
          <UserNavBar />
          <CardsPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
