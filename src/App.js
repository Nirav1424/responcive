import './App.css';
import Block from './components/Block';
import Name from './components/Name';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Name fname='Abou' sname='t U' tname='s' />
      <Block />
      <Name fname='Gal' sname='lar' tname='y' />

    </>
  );
}

export default App;
