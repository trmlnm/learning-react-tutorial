import React from 'react';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="m!@"/>
      <Footer />
    </div>
  );
}

export default App;
