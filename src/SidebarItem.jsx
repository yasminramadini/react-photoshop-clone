import React from 'react'

function SidebarItem({ name, active, handleClick }) {
  return (
    <button className={active ? 'active' : ''} onClick={handleClick}>
      {name} 
    </button>
  )
}

export default SidebarItem
