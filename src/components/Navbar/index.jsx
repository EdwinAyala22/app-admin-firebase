import React from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons";
export const Navbar = ({ links, abrir, setAbrir }) => {

  return (
    <nav className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-500 py-4 md:px-10 px-7">
        <Link to={"/"} >
        <div className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800">
            <span className='text-3xl text-blue-900 mr-2 pt-2 pr-2 pl-2 bg-white rounded-full border-2 hover:text-white border-white hover:bg-teal-500 hover:font-bold'>
              <ion-icon name="cart-outline" ></ion-icon>
            </span>
              Ventas

        </div>
          </Link>

        <div onClick={() => setAbrir(!abrir)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={abrir ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-teal-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${abrir ? 'top-20 z-auto' : 'top-[-490px]'}`} >
          {
            links.map(([title, url]) => (
              <li key={title} className="md:ml-8 text-xl md:my-0 my-7" >
                <Link to={url} onClick={() => setAbrir(!abrir)} className="text-white hover:text-blue-900 duration-500 hover:bg-white hover:rounded-full pt-1 pb-1 pr-2 pl-2" >{title}</Link>
              </li>
            ))
          }

          <Buttons tipo={"submit"} clase="bg-white text-teal-500 py-2 px-6 rounded-full md:ml-8 hover:bg-teal-500 duration-500 border-2 border-white hover:text-white font-bold" texto={"Iniciar Sesion"} ></Buttons>
        </ul>
      </div>
      {/* <nav className="bg-teal-500 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 shadow-lg shadow-slate-400">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-10 sm:h-10" alt="Ventas" />
                </Link>
          <div className="flex md:order-2">
            
            <Buttons texto={"Iniciar Sesión"} clase={"text-slate-900 p-2 bg-white rounded-full font-medium hover:border-2 hover:border-white hover:bg-teal-500 hover:text-white mr-2"} tipo={"submit"} ></Buttons>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-slate-900 rounded-lg md:hidden hover:border-2 hover:border-white hover:text-white focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map(([title, url]) => (
                <li>
                  <Link
                    key={title}
                    to={url}
                    className="rounded-full px-3 py-2 text-white hover:bg-slate-100 hover:text-slate-900 hover:font-bold font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}

      {/* <nav className="flex space-x-4 bg-teal-500 p-3">
        <div className="flex sm:justify-start">
          <Link to="/">
            <img src={logo} className="w-10 ml-3" />
          </Link>
        </div>
        <div className="flex sm:justify-center w-full" id="navbar-default">
          {links.map(([title, url]) => (
            <Link
              to={url}
              className="rounded-full px-3 py-2 text-white hover:bg-slate-100 hover:text-slate-900 hover:font-bold font-medium"
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="flex sm:justify-end">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav> */}
    </nav>
  );
};
