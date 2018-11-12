import React from 'react'
import '../assets/css/EditbarItem.css'

const EditbarItem = (props) => {
  return(
    <div className="EditbarItem">
      <img src={props.item.image}></img>
    </div>
  )
}

export default EditbarItem
