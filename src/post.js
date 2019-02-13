import React,{Component} from 'react';
import {Cookies } from 'react-cookie';
import Fch from './fch';
import'./Acx.css';
class post extends Component {
     constructor (props){
         super(props);
         this.state ={
            loader:false,
            title: '',
             posts:[],
             baseUrl: 'http://localhost:3000'
         };
         let cookies = new Cookies();
         if ( cookies.get ('email') === undefined ){
             this.props.history.push ('/');
              }
     <div> <Fch/>  </div>
     
            }}
    

export default post;