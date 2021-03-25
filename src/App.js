import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />

{/* WhatsApp icon */}
<a
        href="https://wa.me/1130237550  "
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    
    </div>
  );
}

export default App;
