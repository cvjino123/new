import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [un,setUn] =useState('');
    const [pwd,setPwd] =useState('');
    const[error,setError] =useState(false);

    const readusername = (event) => {
      event.preventDefault();
        setUn(event.target.value);
        console.log(event.target.value);

    }

    const readpassword = (event) => {
      event.preventDefault();
        setPwd(event.target.value);
        console.log(event.target.value);

    }

    const checkfilldata = (event) => {
      event.preventDefault();
    if(un.trim ()===''|| pwd.trim() ===''){
      setError(true);
      return;
    }
   
    }
  return (
    <div>
        <h1 className='ab'>LOGIN</h1>
    <form>
        <center>
        Username &nbsp; <input type="text" onChange={readusername}/><br /><br /><br />
        Password &nbsp; <input type="password" onChange={readpassword}/><br /> <br />
       <br /><br />   <button type="submit" onClick={checkfilldata}>LOG IN</button>
       {error && 'Error Occured'}
       </center>
    </form>
    </div>
  )
}

export default Login
