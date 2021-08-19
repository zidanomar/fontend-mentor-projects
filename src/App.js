import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Articles from './components/Section/Articles';
import Features from './components/Section/Features';
import Hero from './components/Section/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
