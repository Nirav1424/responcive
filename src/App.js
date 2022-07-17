import './App.css';
import Block from './components/Block';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Navbar />

      
      <Slider/>


      <div className='container'>
        <div className="row">
          <div className='col1'>
            <div className="text-center pt-3 fs-1 font-monospace">
              About
              <span className='text-primary'> Us</span>   </div>
              <div className="hr"> <hr className='w-20 mx-auto opacity-100 ' />
           
            </div>
          </div>
        </div>
      </div>

      {/* <section className='my-5'>
    
            <div className=" container text-center fs-1">
            <div>
              <h1>About <span className='text-primary'>Us</span></h1>
              <hr className='w-25 m-auto'/>
            </div>
            </div>
      </section> */}

      <Block/>

      
      <div className='container'>
        <div className="row">
          <div className='col fs-1'>
            <div className="text-center pt-3 font-monospace">
              Contact
              <span className='text-primary'> Us</span>   </div>
              <div className="hr"> <hr className='w-20 mx-auto opacity-100 ' />
           
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
