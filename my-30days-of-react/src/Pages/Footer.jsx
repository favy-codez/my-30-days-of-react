import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className="">
            <Link to="/Day1" >DAY1</Link>
            <Link to="/Day2" >DAY2</Link>
        </div>
    </div>
  )
}

export default Footer