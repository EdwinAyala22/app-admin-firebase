import React from "react";
import { Navbar } from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import { Productos } from "./views/Productos/Index";
import { useNavbar } from "./hooks/useNavbar";
import { HomeApp } from "./views/Home";
import { Usuarios } from "./views/Usuarios";
import { Ventas } from "./views/Ventas";
import logo from "./assets/img/logo.png"

function App() {

  const{RUTAS} = useNavbar();

  return (
    <>
      <Navbar links={RUTAS} logo={logo} />
      <Routes>
        <Route path='/' element={<HomeApp/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/ventas' element={<Ventas/>} />
      </Routes>
      
    </>
  );
}

export default App;
