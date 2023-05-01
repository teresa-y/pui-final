import logo from './logo.svg';
// import anime from 'animejs/lib/anime.es.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
