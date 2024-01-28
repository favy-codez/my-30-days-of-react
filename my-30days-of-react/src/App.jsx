import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Day1 from './Pages/DAY1/Day1';
import Day2 from './Pages/DAY2/Day2';
import Author from './Pages/DAY1/Author';

function App() {
  return (
  <>
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Day1" element={<Day1/>} />
        <Route path="/Day2" element={<Day2/>} />
        <Route path="/author" element={<Author/>} />
      </Routes>
       
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App