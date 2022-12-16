import React from "react";
import { Link } from "react-router-dom";
// import { Buttons } from "../Buttons";
export const Navbar = ({ links, abrir, setAbrir, urlLogin }) => {

  return (
    <nav className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-500 py-4 md:px-10 px-7">
        <div className="">
        <Link to={"/"} className='font-bold text-2xl cursor-pointer flex items-center 
      text-cyan-900' >
            <span className='text-3xl text-cyan-900 mr-2 pt-2 pr-2 pl-2 bg-white rounded-full border-2 hover:text-white border-white hover:bg-teal-500 hover:font-bold'>
              <ion-icon name="cart-outline" ></ion-icon>
            </span>
              <span>
                Ventas
              </span>

          </Link>
        </div>

        <div onClick={() => setAbrir(!abrir)} className='text-3xl absolute right-8 top-6 cursor-pointer text-cyan-900 md:hidden'>
          <ion-icon name={abrir ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-teal-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${abrir ? 'top-20 z-auto opacity-100' : 'top-[-490px] md:opacity-100 opacity-0 '}`} >
          {
            links.map(([title, url]) => (
              <li key={title} className="md:ml-8 text-lg font-semibold md:my-0 my-7" >
                <Link to={url} onClick={() => setAbrir(!abrir)} className="text-white hover:text-cyan-900 duration-500 hover:bg-white rounded-2xl pt-1 pb-1 pr-2 pl-2" >{title}</Link>
              </li>
            ))
          }

          {/* <Buttons click={()=> verLogin() } clase="bg-white text-teal-500 py-2 px-6 rounded-full md:ml-8 hover:bg-teal-500 duration-500 border-2 border-white hover:text-white font-bold" texto={"Iniciar Sesión"} ></Buttons> */}
          <Link to={urlLogin} onClick={() =>setAbrir(!abrir) } className='bg-white text-teal-500 py-2 px-6 rounded-full md:ml-8 hover:bg-teal-500 duration-500 border-2 border-white hover:text-white font-bold' >Iniciar Sesión</Link>
        </ul>
      </div>
    </nav>
  );
};
