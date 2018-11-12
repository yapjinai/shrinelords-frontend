import React from 'react'
import '../assets/css/ItembarItem.css'

const ItembarItem = (props) => {
  return(
      <img
        className="ItembarItem"
        src={props.item.image}
        alt={props.item.name}
      />
  )
}

export default ItembarItem
