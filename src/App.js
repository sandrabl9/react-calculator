import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className='container'>
    <div className='title-container'>
      <h1>Calculator</h1>
    </div>
    <div className='calculator-container'>
      <div className='row'></div>
      <Button>9</Button>
      <Button>8</Button>
      <Button>7</Button>
      <Button>+</Button>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>

    </div>

    </div>
  );
}

export default App;
