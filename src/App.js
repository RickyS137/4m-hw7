import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import EmirPage from './pages/emirPage/EmirPage';
import HomePage from './pages/homePage/HomePage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/emir' element={<EmirPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
