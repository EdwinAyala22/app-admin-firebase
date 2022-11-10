import React from 'react';
import { useEffect } from 'react';
import imgLogin from '../../assets/img/fondoCarroCompras.jpg';
import { Buttons } from '../../components/Buttons';

export const LoginApp = () => {

    useEffect(() => {
      
        document.title = "Login";
      
    }, [])
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block '>
            <img className='h-full object-cover' src={imgLogin} alt="" />
        </div>
        <div className='bg-cyan-900 flex justify-center items-center'>
            <form className='bg-white p-6 rounded-xl m-4 w-full sm:w-96'>
                <h2 className='text-3xl text-cyan-900 font-bold text-center uppercase pb-8' >INICIAR SESIÓN</h2>
                <div className='flex flex-col text-cyan-900 pb-5'>
                    <label className='font-semibold' >Usuario:</label>
                    <input className='border-b-2 border-cyan-900 focus:border-teal-500 focus:outline-none p-2' type="text" />
                </div>
                <div className='flex flex-col text-cyan-900 pb-5'>
                    <label className='font-semibold' >Contraseña:</label>
                    <input className='border-b-2 border-cyan-900 focus:border-teal-500 focus:outline-none p-2' type="password" />
                </div>
                <div className='flex justify-center my-4'>
                    <p className='flex items-center text-sm'><input className='mr-2 checked:bg-teal-500' type="checkbox" />Recuérdame</p>
                    {/* <p>¿Olvidaste tu contraseña?</p> */}
                </div>
                <div className='flex justify-center items-center'>
                    <Buttons texto={"Ingresar"} clase={"bg-cyan-900 p-1 rounded-xl px-2 text-white hover:bg-teal-500 font-semibold"} />
                </div>
            </form>
        </div>
    </div>
  )
}
