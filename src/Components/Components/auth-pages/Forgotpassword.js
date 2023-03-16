import React,{useState} from "react";
import'../../../css/auth_activities.css';
import ResetForm from "./Resetpass";


function ForgotForm(){
    const[popupR,SetPopR]=useState(false);
    const handleClickOpen5=()=>{
      SetPopR(!popupR);
    }
    return(<div>

        <div className="form2">
<center><br/><br/>
    <h1 className="heading">Enter Recovery E-mail</h1> <br/><br/>
    <input   type="Email" placeholder="E-mail Address"      className="user"     />
    <button className="btn" onClick={handleClickOpen5}>Submit</button>
</center>

        </div>
        {popupR ?
          <div className='main_login'>
                <ResetForm />     
                
          </div> : ""}
    
    </div>)
};
export default ForgotForm;