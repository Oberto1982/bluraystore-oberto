import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import ListCardContainer from "./containers/ListCardContainer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <ListCardContainer />
    
    </div>
  );
}

export default App;
