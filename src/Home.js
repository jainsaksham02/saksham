import React,{Component} from 'react';
import './Acx.css';
import cookie from 'react-cookies';
//  import { Cookies } from 'react-cookie';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
        username:'admin@gmail.com',
        password:'testing'
        }
       }
        login= () => {
        var data ={
            email:this.state.username,
            password:this.state.password
        }
        
        fetch("http://35.175.245.127/api/v1/login",{
            method:'POST',
            header:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((res)=>{
            console.log(res.access_token);
            cookie.save('loginid',res.msg);
        })
        .catch((err)=>{
            console.log(`errror while login ${err}`);
        })
       }
// savecookies()
// {
//     Cookies.load(name,"this.state.email")

// }

handleevent=(e)=>{
    console.log("working");
    this.setState(
        {
            [e.target.id]:e.target.value
        }
    );
    
}
 render(){
    return(
        <div>
            <div className='home'>
                <div className='center'> 
                    <div className='left'></div>
                    <div className='right'>
                        <h1 class="welcome">WELCOME BACK!</h1>
                        <label className="label">EMAIL</label> <br/><br/>
                        <input type="text" className="email" onChange={this.handleevent} id="username"></input><br/><br/>
                        <label className="label">PASSWORD</label><br/><br/>
                        <input type="text" className="email" id="password"  onChange={this.handleevent} ></input><br/><br/>
                        
                        <label className="label">FORGOT YOUR PASSWORD</label><br/><br/>
                        <button onClick={this.login} className="btn">LOGIN</button> 
                        <label className="label">Need an account? Register</label><br/><br/>
                    </div>
                </div> 
            </div>
        </div>   
    );
}
}
export default Home
