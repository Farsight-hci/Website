import './App.css';
import ActionButton from './components/actionButton';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <div className='hero-image'>
      <Navbar/>
      <div style={{paddingTop: "250px", paddingLeft: "150px"}}>
        <div className='display-lg'>Sta Schiscia*</div>
        <div className='display-md'>&nbsp;L’ App della schiscetta</div>
        <ActionButton/>
      </div>
      </div>
    </>
  );
}

export default App;
