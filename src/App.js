import React from "react";

import {useSelector, useDispatch} from "react-redux";

import {decreaseWithDelay, increase, increaseWithDelay, } from "./actions";


// Для чего нужен thunk
// как создать store
// что такое compose
// Что такое connect
// опишите редюсер


// создаете проект
// в нем install redux, react-redux, redux-thunk
// создаете в нем хранилище, инишиал(начальное) состояние и редюсер
// создаете компонент, в котором кнопка и текст
// кнопка будет совершать асинхронное действие
// https://jsonplaceholder.typicode.com/users
// пока кнопка получает данные,
// она должна быть неактивна (состояние активности кнопки, disabled)
// учитывать ошибку - делать кнопку снова активной по ошибке



const App = ()=>{


  const number = useSelector(state=>state.number);
  const dispatch = useDispatch();

  return (
    <>
      <span>{number}</span>
      <button onClick={()=>dispatch(increase())}>click me</button>

      <button onClick={()=> dispatch( increaseWithDelay())}>clickWithDelay</button>
      <button onClick={()=> dispatch(decreaseWithDelay())}>decrease with delay</button>
    </>
  )


}












export default App;
