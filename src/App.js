import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { auth } from './components/basefire'
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
function App () {
  const [{loggedInUser},dispatch] = useStateValue();
  
  useEffect(() =>{
    auth.onAuthStateChanged((userauth) =>{
        if(userauth){
            dispatch({
                type:'SET_LOGIN',
                user: userauth
            })
        }
        else{
          dispatch({
            type:'SET_LOGIN',
            user: null
        })
        }
    })
},[])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login/>}/>
            
    </Routes>
  );
}

export default App;
