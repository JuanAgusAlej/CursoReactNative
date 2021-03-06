// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
