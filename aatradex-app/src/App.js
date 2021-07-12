import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Faqs from './components/FAQs/Faqs';

function App() {
  return (
    <Router>

    <Navbar />
    <main>
    <Route path='/' exact>
      <Home />
    </Route>

    <Route path='/services'>
      <Service />
    </Route>

    <Route path='/about-us'>
      <About />
    </Route>

    <Route path='/contact-us'>
      <Contact />
    </Route>

    <Route path='/frequently-asked-questions'>
      <Faqs />
    </Route>

    </main>
    <Footer />
   
    </Router>   
    
  )
}

export default App;
