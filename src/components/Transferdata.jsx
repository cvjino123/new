import React from 'react'
import './Transferdata.css'
const Transferdata =(props) => {
  return (
    <div>
      <h1 className='aa'>WelcoMe</h1>
      <p>
        Username:  &nbsp;{props.username} 
        <br />
       Password: &nbsp; {props.password}
        <br />
       Usertype: &nbsp; {props.usertype}
      </p>
    </div>
  )
}

export default Transferdata
