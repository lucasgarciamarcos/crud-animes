import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesConfig from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesConfig></RoutesConfig>
    </BrowserRouter>
  );
}

export default App;
