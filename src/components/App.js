import '../css/main.css';
import Trial from './Trial';

function App() {
  return (
    <div className='container'>
      <header id='header'>
        <h1 className='header-title'>Simple, traffic-based pricing</h1>
        <p className='header-description'>
          Sign-up for our 30-day trial. No credit card required
        </p>
      </header>
      <Trial />
    </div>
  );
}

export default App;
