import React from 'react'
import '../assets/css/ItembarItem.css'

const ItembarItem = (props) => {
  const handleClick = () => {
      props.addOffering(props.item)
  }

  return(
      <img
        className="ItembarItem"
        onClick={handleClick}
        src={props.item.image}
        alt={props.item.name}
      />
  )
}

export default ItembarItem
