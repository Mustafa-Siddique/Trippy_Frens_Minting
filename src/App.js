import { useEffect } from 'react';
import CheckAddress from './components/CheckAddress';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Verified from './components/Verified';
import { init } from './web3/Web3Client';

function App() {

  useEffect(() => {
    init()
  }, [])

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
