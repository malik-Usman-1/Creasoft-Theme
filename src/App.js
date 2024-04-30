
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Homescreen from './Screens/Homescreen';
import Aboutscreen from './Screens/Aboutscreen';
import Projectscreen from './Screens/Projectscreen';
import Servicescreen from './Screens/Servicescreen';
import Contactscreen from './Screens/Contactscreen';
import Blogscreen from './Screens/Blogscreen';
import Blogdetailscreen from './Screens/Blogdetailscreen';
import Servicedetail from './Screens/Servicedetail';
import Projectdetails from './Screens/Projectdetails';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homescreen/>}/>
    <Route path='/about' element={<Aboutscreen/>}/>
    <Route path='/project' element={<Projectscreen/>}/>
    <Route path='/service' element={<Servicescreen/>}/>
    <Route path='/contact' element={<Contactscreen/>}/>
    <Route path='/blog' element={<Blogscreen/>}/>
    <Route path='/blogdetail' element={<Blogdetailscreen/>}/>
    <Route path='/servicedetail' element={<Servicedetail/>}/>
    <Route path='/projectdetail' element={<Projectdetails/>}/>








  </Routes>

  <Footer/>
  </>
  );
}

export default App;
