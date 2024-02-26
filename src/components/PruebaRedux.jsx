import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  noRegister, register } from '../redux/userSlice';

const PruebaRedux = () => {
    const dispatch = useDispatch();
    const isRegister = useSelector((state) => state.userRegister.isRegister);

    const handleClickTrue =()=>{
        dispatch(register())
    }
    const handleClickFalse =()=>{
        dispatch(noRegister())
    }
  return (
    <div>
            <div>PruebaRedux</div>
            <div>Registrado: {isRegister?'true':'false'}</div>
            <button onClick={handleClickTrue}>true</button>
            <button onClick={handleClickFalse}>false</button>
            {}
    </div>
  )
}

export default PruebaRedux