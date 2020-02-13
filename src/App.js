import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//fixos
import Navbar from './components/Navbar/Navbar';

//pages
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/blog" component={Blog} />
          <Route path="/contato" component={Contato} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
