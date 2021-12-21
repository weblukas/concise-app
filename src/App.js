import './App.css';
import CardSlider from './components/CardSlider';
import Cart from './components/Cart';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Cart />
        <CardSlider />
        <Form />
      </main>
    </div>
  );
}

export default App;
