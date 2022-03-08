import React from 'react'
import { Container } from './styles'
import { BiErrorAlt } from "react-icons/bi";

const PageNotFound = () => {
  return (
      <Container>
        <BiErrorAlt className='icon'></BiErrorAlt>
        <h3>Error : 404</h3>
        <h2>Page Not Found!!</h2>

      </Container>
  )
}

export default PageNotFound