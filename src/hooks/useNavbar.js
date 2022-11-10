import React, { useState } from "react";
import {Link} from "react-router-dom";

export const useNavbar = () => {
  const RUTAS = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Usuarios", "/usuarios"],
    ["Ventas", "/ventas"],
  ];

  const [open, setOpen] = useState(false);

  const viewLogin = ()=>{
    window.location.pathname = "/login";
  }

  return {
    RUTAS,
    setOpen,
    open,
    viewLogin
  };
};
