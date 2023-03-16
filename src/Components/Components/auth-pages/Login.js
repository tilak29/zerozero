import React,{useState} from "react";
import'../../../css/auth_activities.css';
import ForgotForm from "./Forgotpassword";
import SignupForm from "./signup";



function Login(){
    /**Forgot pass. */
    const[popupF,SetPopF]=useState(false);
    const handleClickOpen3=()=>{
      SetPopF(!popupF);
    }

    /**Signup */
    const[popupS,SetPopS]=useState(false);
    const handleClickOpen4=()=>{
      SetPopS(!popupS);
    }

    return(<div>

        <div className="form">
<center>
    <h1 className="heading">Log in</h1>
    <p className="para">Please enter your details</p>
    <input   type="text" placeholder="Username"      className="user"     /><br></br>
    <input   type="password" placeholder="Password"  className="pass"        /><br/><br/>

    <p className="forgot" onClick={handleClickOpen3}>Forgot password?</p><br/>

    <button className="btn">Log in</button>
    <p  className="para2" onClick={handleClickOpen4}>Don't have an account?</p>
</center>

        </div>
        {popupF ?
          <div className='main_login'>
                <ForgotForm />     
                
          </div> : ""}

          {popupS ?
          <div className='main_login'>
                <SignupForm />     
                
          </div> : ""}
    
    </div>)
};
export default Login;