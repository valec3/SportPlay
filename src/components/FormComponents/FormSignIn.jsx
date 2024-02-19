import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const FormSignIn = ({handleLogin}) => {
  const [showPass, setShowPass] = useState(false)

  const handleEyeSlash = () => {
    setShowPass(!showPass)
  }
  const IconClaseName = "text-neutral absolute top-[643px] right-[70px]";

  const handleSubmit = () => {

  }
  return (
    <form className='w-full h-full flex flex-col px-[46px]'>
        <h1 className='text-[32px] font-Roboto font-medium text-base-100 py-2'>¿No tienes cuenta?</h1>
        <p className='text-[18px] font-SourceSansPro font-normal text-neutral py-9'>Regístrate y sumérgete en el mundo de los torneos deportivos</p>
        <input
        className="bg-secondary h-[64px] w-[327px] rounded-xl px-4 my-3"
        type="text"
        id="userName"
        name="userName"
        placeholder='Ingresa tu Nombre'
        // value={}
        // onChange={}
        // onKeyUp={}
        required
      />
      <input
        className="bg-secondary h-[64px] w-[327px] rounded-xl px-4 my-3"
        type="text"
        id="userLastName"
        name="userLastName"
        placeholder='Ingresa tu Apellido'
        // value={}
        // onChange={}
        // onKeyUp={}
        required
      />
      <input
        className="bg-secondary h-[64px] w-[327px] rounded-xl px-4 my-3"
        type="text"
        id="userID"
        name="userID"
        placeholder='Ingresa tu DNI'
        // value={}
        // onChange={}
        // onKeyUp={}
        required
      />
       <input
        className="bg-secondary h-[64px] w-[327px] rounded-xl px-4 my-3"
        type="Email"
        id="userEmail"
        name="userEmail"
        placeholder='Ingresa tu Email'
        // value={}
        // onChange={}
        // onKeyUp={}
        required
      />
       
       <input
         className="bg-secondary h-[64px] w-[327px] rounded-xl px-4 my-3"
         type={`${showPass?'text':'password'}`}
         id="password"
         name="password"
         placeholder='Crea una Contraseña'
    //     value={form.password}
    //     onChange={handleChange}
    //     onFocus={handleOnFocusPassword}
    //     onBlur={handleOnBlurPassword}
         required
         />
         {showPass?<FaEye  className={IconClaseName} onClick={handleEyeSlash}/>:<FaEyeSlash  className={IconClaseName} onClick={handleEyeSlash}/>}
         <p className='text-neutral text-[12px] font-Roboto mx-auto'>* La contraseña debe tener entre 4 y 8 caracteres</p>

        <input value="Registrarme" className="bg-accent w-[260px] h-[43px] text-base-100 text-[18px] font-SourceSansPro font-medium rounded-2xl  cursor-pointer hover:scale-[102%] mx-auto my-10" type="submit" onClick={handleSubmit} />
         
        <div className="mx-auto mt-10">
         <p className="text-[16px] font-Roboto text-neutral">¿Ya tienes cuenta en SportPlay? <span className="text-success text-[16px] cursor-pointer" onClick={handleLogin}>Inicia Sesión</span>
         </p>
       </div>
      </form>
  )
}

export default FormSignIn