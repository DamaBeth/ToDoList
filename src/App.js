import './App.css';
import React from 'react';
import HeaderButton from "./Button";
import FormCard from "./FormTodo";


function App() {
  const styles = {margin: "10px", left: 0, position: "relative", fontSize: 25, fontWeight: 'bold' };

  return (
    <div className="App">
      <header className="App-header">
        <HeaderButton name="Login"/>
        <HeaderButton name="Registrarse" />
      </header>
      <main>
        <p style={styles}>Hoy</p>
        <FormCard />
      </main>
    </div>
  );
}

export default App;
