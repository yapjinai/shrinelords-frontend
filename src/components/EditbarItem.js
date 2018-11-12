import React from 'react'
import '../assets/css/EditbarItem.css'
// <div className="EditbarItem">
// </div>

const EditbarItem = (props) => {
  return(
      <img
        className="EditbarItem"
        src={props.item.image}
        alt={props.item.name}
      >
      </img>
  )
}

export default EditbarItem
