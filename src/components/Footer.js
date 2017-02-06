import React from 'react';
import LinkContainer from './LinkContainer';
import '../Footer.css'

const Footer = () => {
  return (
    <div className="wrapper">
      <LinkContainer filter="ALL">All</LinkContainer>
      <LinkContainer filter="ACTIVE">Active</LinkContainer>
      <LinkContainer filter="DONE">Done</LinkContainer>
    </div>
  )
}

export default Footer
