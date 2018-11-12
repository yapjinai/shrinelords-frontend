import React from 'react'
import '../assets/css/LeftbarItem.css'

const LeftbarItem = (props) => {
  return(
    <div class="leftitem">
      <img src={props.item.image}></img>
    </div>
  )
}

export default LeftbarItem
