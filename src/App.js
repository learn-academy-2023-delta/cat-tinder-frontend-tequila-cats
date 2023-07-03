import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatEdit from './pages/CatEdit';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import NotFound from './pages/NotFound'


const App = () => {
  const [cats, setCats] = useState([])

useEffect(() => {
  readCat()
},[])  

const readCat = () => {
  fetch("http://localhost:3000/cats")
  .then((response) => response.json())
  .then((payload) => setCats(payload))
  .catch((errors) => console.log("cat read errors:", errors))
}


const createCat = (cat) => {
  fetch("http://localhost:3000/cats", {
    body: JSON.stringify(cat), 
    headers:{
      "content-type": "application/json"
    },
    method:"POST"
  })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("cat create errors:", errors))
}


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
