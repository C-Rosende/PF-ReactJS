// app.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <ItemListContainer greeting="¡Echa un vistazo a nuestros productos!" />
    </div>
  );
}

export default App;
