import React from "react";
import { useState } from "react";
import ModalForm from "../../pages/registerForm/ModalForm";

import FormLogIn from "./FormLogIn";
import FormSignIn from "./FormSignIn";





const Modals = () => {
  //const { isOpen, closeModal, isLogin } = useContext(context);
  
  //---------estados y funciones del modal de Registro-------------------------------------------
  const [isOpenModal, setIsOpenModal] = useState(true);
  const openModal = () => setIsOpenModal(true); //
  const closeModal = () => setIsOpenModal(false);

  const [isLogin, setIsLogin] = useState(false)
  const handleLogin = () => {
    setIsLogin(!isLogin);
  }



  return (
    <div className="h-full">
        <button onClick={openModal}>open</button>
      <ModalForm isOpenModal={isOpenModal} closeModal={closeModal}>
        {isLogin ? <FormSignIn handleLogin={handleLogin} /> : <FormLogIn handleLogin={handleLogin}/>}
      </ModalForm>
    </div>
  );
};

export default Modals;