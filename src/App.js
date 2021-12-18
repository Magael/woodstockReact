import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Shop />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
