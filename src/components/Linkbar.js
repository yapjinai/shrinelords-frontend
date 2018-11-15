import React from 'react'
import '../assets/css/Linkbar.css'
import { Link } from 'react-router-dom'

const Linkbar = (props) => {
  return(
    <div className={props.className}>
      <div className="linkcontainer">
        <Link to="/">
          <img
            className="linkbarlink"
            alt="linkbarlink"
            src="../assets/img/torii.png"
          />
        </Link>
      </div>
      <div className="linkcontainer">
        <Link to="/about">
          <img
            className="linkbarlink"
            alt="linkbarlink"
            src="http://worldartsme.com/images/transparent-question-mark-clipart-1.jpg"
          />
        </Link>
      </div>
    </div>
  )
}

export default Linkbar
