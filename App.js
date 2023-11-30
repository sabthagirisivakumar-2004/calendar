import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/signup';
import Signin from './Component/signin'
import Home from './Component/homepage/home'
import Todo from './Component/todo/todo'
import Event from './Component/Event/event'
import Profile from './Component/profile/profile'
import Year from './Component/yearlyCalender/year'
const App = () => {
  return (
    <>
   
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/year' element={<Year/>}/>
    </Routes>
    </>
  )
};

export default App