import './style.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Resume() {
//     const [search,setSearch]=useState('a');
//    const [datas, setData] = useState(null);
   const [text,setText]=useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//       // temporary holder api for http://localhost:1880/monitors 
//     fetch(`https://mocki.io/v1/b030311b-6c6f-4018-9902-9219bb8582ee?_limit=8`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         return response.json();
//       })
//       .then((actualData) => {
//         setData(actualData);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setData(null);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
const onChange=(e)=>{
    setText(e.target.value);
}

const refreshPage=(e)=> {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1>Resume</h1> 
      <textarea class="form-control" id="exampleFormControlTextarea1" onChange={onChange} rows="12" value={text}></textarea>
      <button onClick={refreshPage}> Try another!</button>
    </div>
  );
}