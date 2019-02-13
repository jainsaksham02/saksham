import React, { Component } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import'./Acx.css';
import Home from './Home';
import Post from './post';
// import Oookie from './Cookie;'
import Position from './Position.js';
import {Cookies } from 'react-cookie';
class App extends Component {
  notify =() => toast("Wow so easy !");
    constructor(){
      super();
      let cookies = new Cookies();
      cookies.set('email', 'info@nugen.com');
    }


      render() {
      return (
        <div>
         {/* <button  onClick ={this.notify}className=""Notify >!</button>   */}
          <ToastContainer/>

           <Post/>
   <Home/>
   <Position/>
   {/* <Oookie/> */}
             
            
            </div>
  
  );
}
}
export default App
  





