import React from "react";
import { Navbar } from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import { Productos } from "./views/Productos/Index";
import { useNavbar } from "./hooks/useNavbar";
import { HomeApp } from "./views/Home";
import { Usuarios } from "./views/Usuarios";
import { Ventas } from "./views/Ventas";
import { LoginApp } from "./views/Login";

function App() {

  const{RUTAS, open, setOpen, viewLogin} = useNavbar();

  return (
    <>
      <Navbar links={RUTAS} abrir={open} setAbrir={setOpen} verLogin={viewLogin} />
      <Routes>
        <Route path='/' element={<HomeApp/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/ventas' element={<Ventas/>} />
        <Route path='/login' element={<LoginApp/>} />
      </Routes>
      
    </>
  );
}

export default App;
