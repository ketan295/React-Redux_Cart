import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import CardsDetail from './Components/CardsDetail';
import Cards from './Components/Cards';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart/:id' element={<CardsDetail/>} />
      </Routes>

    </>
  );
}

export default App;
