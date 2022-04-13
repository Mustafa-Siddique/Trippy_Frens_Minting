import CheckAddress from './components/CheckAddress';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Verified from './components/Verified';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CheckAddress/>
      <Verified/>
      <Steps/>
      <Footer/>
    </div>
  );
}

export default App;
