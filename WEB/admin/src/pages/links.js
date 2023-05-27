import * as React from 'react';
import { useEffect, useState } from 'react';

import images from '../constants/images';

import MediaPicker from '../components/mediaePicker';

import api from '../api';

import SideBar from "../components/sideBar";

import Axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// function MultilineTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="standard-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }

function Links() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [list, setList] = useState([]);
  const [newname, setNewname] = useState('');
  const [newReview, setNewReview] = useState('');
  


// read
  useEffect(() => {
    Axios.get('http://localhost:8000/links').then((response) => {  
      console.log(response.data);
      console.error(response);
       setList(response.data);
       
    });
  }, []);

 
//create
    const submit= () => {
      Axios.post('http://localhost:8000/links',{
        name: name,
        link: link
      },);
        
      setList([...list, {
          name: name,
          link: link
        },]);

        window.location.reload(true);
      
    }

//delete
    const deleteReview = (id) => {
      Axios.delete(`http://localhost:8000/links/del/${id}`).then((response)=> {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
      window.location.reload(true);
    };

// update
const updateReview = (id) => {
    Axios.put(`http://localhost:8000/links/update`,{
      id: id,
      // name: newname,
      link: newReview,
    }).then((response)=> {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
    setNewReview('');
    // setNewname('');
    // window.location.reload(true);
  };

  return (
    <div className='page home'>
    <SideBar />
    <div className='container'>
    <h4>Social media</h4>
    <div>
     <h5 style={{marginTop:"2rem"}}> Heading</h5> 
    <input type='text' onChange={(e) => {setName(e.target.value)}}></input>
    <h5> content</h5> 
    <input type='text' onChange={(e) => {setLink(e.target.value)}}></input>
    <button style={{marginBottom:"2rem", backgroundColor:"#c12222",color:"white",width:"10rem",height:"3rem",cursor:"pointer"}}
     onClick={submit}>
        Add
    </button>
    </div>
    
    <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap",marginTop:"2rem"}}>
    {list.map((val) => {
      return (
      <div key={val._id} style={{width:"23%",minHeight:"15rem",border:"1px solid white", borderRadius:"5%", background:"#ffffff", marginBottom:"1rem"}}> 
      <p style={{margin:"1rem"}}>Heading: </p> 
      <h6 style={{margin:"0.5rem", textOverflow:"ellipsis", overflow:"hidden"}}>{val.heading} </h6> 
      {/* <TextField
         style={{width:"100%"}}
          // label="Multiline"
          multiline
          rows={1}
          defaultValue={val.heading}
          variant="standard"
          onChange={(e) => {setNewname(e.target.value)}}
        /> */}
        <hr/>
        <div style={{margin:"1rem 0"}}>
      <p style={{margin:"1rem"}}> content: </p>
       {/* <h6 style={{margin:"0.5rem", textOverflow:"ellipsis", overflow:"hidden" , wordBreak:"break-word"}}> {val.content}</h6> */}
       

       {/* <p style={{margin:"0 1rem"}}> update content: </p> */}
       {/* <input onChange={(e) => {setNewReview(e.target.value)}} type='text'/> */}
      
       <TextField
         style={{width:"100%"}}
          // label="Multiline"
          multiline
          rows={3}
          defaultValue={val.content}
          variant="standard"
          onChange={(e) => {setNewReview(e.target.value)}}
        />
        </div>
       <button
       style={{backgroundColor:"white", color:"black"}}
       className='btn-link'
       onClick={() => {updateReview(val._id)}}>
        Update
        </button>  
       <button 
       className='btn-link'
       onClick={() => {deleteReview(val._id)}}>
        Remove
        </button>
       
      </div>
     
      )
    })
  }
    </div>
    <div>
        <button
        style={{margin:"1rem", backgroundColor:"#c12222",color:"white",width:"10rem",height:"3rem",cursor:"pointer"}}
        onClick={() => {window.M.toast({ html: "Data saved successfully" });window.location.reload(true)}}
        >
            Save
        </button>
    </div>
    </div>
    </div>
  );
}

export default Links;




// const Links = () => {


//   const [data, setData] = useState({
//     // title: "",
//     item: [
//       {
//         name: "",
//         content: "",
//       },
//     ],
//   });

//   const _data = data;

//   const updateData = () => {
//     setData((data) => ({
//       ...data,
//       ..._data,
//     }));
//   };

//   const handleSave = async () => {
//     const isEmpty = () => {
//       let res = false;
//       // if (data.title === "") {
//       //   res = true;
//       // }
//       data.item.forEach((item) => {
//         if (item.name === "" || item.content === "") {
//           res = false;
//         }
//       });
//       return res;
//     };

//     if (isEmpty()) {
//       window.M.toast({ html: "Please fill the all values" });
//     } else {
//       const formData = new FormData();
//       formData.append("content", JSON.stringify(data));
//       const res = await api.post("/links", formData);
//       if (res.status === 200) {
//         window.M.toast({ html: "Data saved successfully" });
//       }
//     }
//   };

//   // useEffect(() => {
//   //   const secEData = JSON.parse(sessionStorage.getItem("homeApi")).sectionE;
//   //   // _data.title = secEData.heading;
//   //   _data.item = secEData.content;
//   //   updateData();
//   //   console.log(secEData);
//   // }, []);

//   //   useEffect(() => {
//   //   Axios.get('http://localhost:8000/links').then((response) => {  
//   //     console.log(response.data);
//   //     console.error(response);
//   //     _data.title = response.data.heading;
//   //     _data.item = response.data.content;
//   //      updateData();
       
//   //   });
//   // }, []);

//   return (
//     <div className='page home'>
//     <SideBar />
//      <div className='container'>
//        <h4>Social media</h4>
//       {/* <div className="input-field">
//         <input
//           id={"section-e-card-main-title"}
//           type="text"
//           className="validate"
//           onChange={(text) => {
//             text = text.currentTarget.value;
//             _data.title = text;
//             updateData();
//           }}
//           value={data.title}
//         />
//         <label for={"section-e-card-main-title"}>Title</label>
//       </div> */}

//       <div
//         className="add"
//         onClick={() => {
//           _data.item.push({ name: "", review: "" });
//           updateData();
//         }}
//       >
//         <img style={{width:"7rem", height:"7rem"}}src={images.pick2} />
//       </div>

//       <main>
//         {data.item.map((item, index) => (
//           <div className="card">
//             <div className="input-field">
//               <input
//                 id={"section-e-card-title" + index}
//                 type="text"
//                 className="validate"
//                 onChange={(text) => {
//                   text = encodeURIComponent(text.currentTarget.value);
//                   _data.item[index].name = text;
//                   updateData();
//                 }}
//                 value={decodeURIComponent(item.name)}
//               />
//               <label for={"section-e-card-title" + index}>Title</label>
//             </div>
//             <div className="input-field">
//               <textarea
//                 id={"section-e-card-content-" + index}
//                 className="materialize-textarea"
//                 onChange={(text) => {
//                   text = text.currentTarget.value;
//                   _data.item[index].review = text;
//                   updateData();
//                 }}
//                 value={item.review}
//               />
//               <label for={"section-e-card-content-" + index}>Content</label>
//             </div>

//             <button
//               className="btn"
//               onClick={() => {
//                 const newArray = _data.item.filter(
//                   (item) => _data.item.indexOf(item) !== index
//                 );
//                 _data.item = newArray;
//                 updateData();
//               }}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </main>
//       <button className="btn save" onClick={handleSave}>
//         Save
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Links;