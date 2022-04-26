import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './container/MainPage';
import {useState} from 'react';


function App() {

  const [formClicked, setFormClicked] = useState(false);

  const handleFormClick = () => {
    setFormClicked(!formClicked);
  }

  return (
    <div className='app'>
      <Header handleFormClick={handleFormClick}/>
      <MainPage formClicked={formClicked}/>
    </div>
  );
}

export default App;
