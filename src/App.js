import './App.css';
import Footer from './components/Footer/Footer';
import DropdownNavbar from './components/Navbar/DropdownNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Breads from './screens/Breads';
import TableBreads from './screens/TableBreads';
import PrepackedBreads from './screens/PrepackedBreads';
import Traditional from './screens/Traditional';
import Sandwich from './screens/Sandwich';
import Bagels from './screens/Bagels';
import Wraps from './screens/Wraps';
import EuropeanPastries from './screens/EuropeanPastries';
import Croissants from './screens/Croissants';
import MiniPastries from './screens/MiniPastries';
import Muffins from './screens/Muffins';
import Fully from './screens/Fully';
import Latin from './screens/Latin';
import Salty from './screens/Salty';
import Empanadas from './screens/Empanadas';
import EdibleSupplies from './screens/EdibleSupplies';
import NonEdibleSupplies from './screens/NonEdibleSupplies';


function App() {
  return (
    <BrowserRouter>
      <div className="navbar desktop">
        <DropdownNavbar />
      </div>
      <div className="sidebar mobile">
        <DropdownNavbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loafs' element={<Breads />} />
        <Route path='/table-breads' element={<TableBreads />} />
        <Route path='/prepacked-breads' element={<PrepackedBreads />} />
        <Route path='/traditional' element={<Traditional />} />
        <Route path='/sandwich' element={<Sandwich />} />
        <Route path='/bagels' element={<Bagels />} />
        <Route path='/wraps' element={<Wraps />} />
        <Route path='/european' element={<EuropeanPastries />} />
        <Route path='/croissants' element={<Croissants />} />
        <Route path='/mini' element={<MiniPastries />} />
        <Route path='/muffins' element={<Muffins />} />
        <Route path='/fully' element={<Fully />} />
        <Route path='/latin' element={<Latin />} />
        <Route path='/salty' element={<Salty />} />
        <Route path='/empanadas' element={<Empanadas />} />
        <Route path='/edible' element={<EdibleSupplies />} />
        <Route path='/nonedible' element={<NonEdibleSupplies />} />
      </Routes>
      <Footer />
    </BrowserRouter>




  );
}

export default App;
