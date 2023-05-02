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
          <Route path="/pui-final" element={<Home />} />
          <Route path="/pui-final/about" element={<About />} />
          <Route path="/pui-final/market2u" element={<Market2U />} />
          <Route path="/pui-final/vagary" element={<Vagary />} />
          <Route path="/pui-final/cookies-banner" element={<CookiesBanner />} />
          <Route path="/pui-final/calendar" element={<TermProject />} />
          <Route path="/pui-final/tca-reel" element={<TCAReel />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
