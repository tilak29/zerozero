import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import '../css/searchbar.css';



function Searchbar(){

    const [show,setShow] = useState(false)

        const ShowName =()=>{
          if(show === true){
            setShow(false)
          }else{
            setShow(true)
          }
        }
    return(
        <div className="bar">
         {show && (<div className="bar"><input placeholder='Search' /></div>)}
         
         <SearchIcon  onClick={ShowName}></SearchIcon>
        
        </div>
    )
};
export default Searchbar;