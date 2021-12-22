import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardSlider from './components/CardSlider';
import Cart from './components/Cart';
import Form from './components/Form';

function App() {
  return (
    
    <div className="App">
        <Cart />
        <CardSlider />
        <Form />
    </div>
  );
}

export default App;
