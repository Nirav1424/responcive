import './App.css';
import Block from './components/Block';
import Hader from './components/Hader';
import Name from './components/Name';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Visit from './components/Visit';

function App() {

  const font = {
    "font-family": 'Dancing Script',
    "font-size": "20px"
  }

  return (
    <>
      <div className="Dancing Script" style={font} data-aos="zoom-in">
        <Navbar />
        <Slider />
        <Name fname='Abou' sname='t U' tname='s' />
        <Block />
        <Name fname='Vis' sname='it My Web' tname='site' />
        <Visit />
        <Hader/>
      </div>
    </>
  );
}

export default App;
