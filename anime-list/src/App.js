import React from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {animeReducer as reducer} from './reducers/animeReducer';
import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Anime List!</h1>
        <AnimeForm/>
        <AnimeList/>
      </div>
    </Provider>
  );
}

export default App;
