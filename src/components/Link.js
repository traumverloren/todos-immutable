import React from 'react';

const Link = ({isActive, children, onClick}) => {
  return (
    <div style={{cursor: 'pointer', color: isActive ? 'red' : 'blue'}}>
      <p onClick={(e) => {e.preventDefault(); onClick()}}>
        {children}
      </p>
    </div>
  )
}

export default Link
