import React from 'react'
import WebFont from "webfontloader"
import { useEffect } from 'react'


const Header = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
  return (
    <>
    
    <div className='d-flex align-center justify-content-center mt-3'>
    <img src="https://w7.pngwing.com/pngs/972/511/png-transparent-todo-sketch-note-list-tasks-thumbnail.png" alt="HeaderImage" />
    </div>
    <h1 style={{color:"#E7D3DA",fontFamily: "Chilanka",fontWeight:"700"}} className='text-center' >To-Do-App</h1>
    
    
    </>
    
    
  )
}

export default Header