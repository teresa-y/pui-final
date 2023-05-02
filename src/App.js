import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Header from './components/header';
import Footer from './components/footer';
import Market2U from './routes/market2u';
import Vagary from './routes/vagary';
import CookiesBanner from './routes/cookies-banner';
import TermProject from './routes/term-project';
import TCAReel from './routes/tca-reel';



function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/market2u" element={<Market2U />} />
          <Route path="/vagary" element={<Vagary />} />
          <Route path="/cookies-banner" element={<CookiesBanner />} />
          <Route path="/calendar" element={<TermProject />} />
          <Route path="/tca-reel" element={<TCAReel />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
