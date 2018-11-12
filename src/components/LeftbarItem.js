import React from 'react'
import '../assets/css/LeftbarItem.css'

const LeftbarItem = (props) => {
  return(
    <div className="leftitem">
      <img src={props.item.image}></img>
    </div>
  )
}

export default LeftbarItem
