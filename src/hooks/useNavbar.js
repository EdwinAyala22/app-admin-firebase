import React from "react";
import {Link} from "react-router-dom";

export const useNavbar = () => {
  const RUTAS = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Usuarios", "/usuarios"],
    ["Ventas", "/ventas"],
  ];



  return {
    RUTAS
  };
};