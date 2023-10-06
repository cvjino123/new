import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Course = () => {
    const [cn,setCn] =useState('');
    const [cd,setCd] =useState('');
    const [cf,setCf] =useState('');

    const readcoursename = (event) => {
        setCn(event.target.value);
        console.log(event.target.value);

    }

    const readcourseduration = (event) => {
        setCd(event.target.value);
        console.log(event.target.value);

    }

    const readcoursefee = (event) => {
        setCf(event.target.value);
        console.log(event.target.value);

    }


  return (
    <div>
       <h1 className='ab'>DETAILS</h1>
       <form>
        Course: &nbsp;<input type="text" onChange={readcoursename}/><br />
        Duration: &nbsp;<input type="number" onChange={readcourseduration}/><br />
        Fee: &nbsp;<input type="text" onChange={readcoursefee}/><br />
        <br /><br /> <button type="submit"> <Link to='/Ldata'></Link>SAVE</button>
       </form>
    </div>
  )
}

export default Course
