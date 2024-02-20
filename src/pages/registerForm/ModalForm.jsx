import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ModalForm = ({ children, isOpenModal, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article
      className={`bg-black/75 fixed z-40 top-0 left-0 w-full h-full overflow-y-auto flex justify-center items-center  ${
        !isOpenModal && "hidden"
      }`}
      onClick={closeModal}
    >
      <div  //modal container
        className=" bg-primary lg:rounded w-full h-full "
        onClick={handleModalContainerClick}
      >
        
        <FaArrowLeft className="  text-base-100   bg-primary w-[24px]  h-[24px] m-[30px]" onClick={closeModal}/>
        {children}
      </div>
    </article>
  );
};

export default ModalForm;