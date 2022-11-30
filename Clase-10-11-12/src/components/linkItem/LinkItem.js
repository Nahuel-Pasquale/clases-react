import React from 'react'
import { LinkItemStyled } from './LinkItemStyled'

const LinkItem = ({ to, children }) => {
  return (
      <LinkItemStyled
        className={ ({ isActive }) => (isActive ? 'active' : '') }
        to={to}
      >
        { children }
      </LinkItemStyled>
  )
}

export default LinkItem