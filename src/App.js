// import { useState } from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './components/NavBar/Header';
import Footer from './components/footer';
import HomePage from './components/homePage';
import Products from './components/Screen/Products'
import About from './components/Screen/About'
import Auth from './components/Screen/Auth'
import Service from './components/Screen/Service'
import Signup from './components/Screen/Signup'
import NoPage from './components/Screen/NoPage';


function App() {
  // const [user, setUser] = useState('');
  return (
    <div className='app'>
      <div className='main'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/cryptotec' exact element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Services' element={<Service />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
