import React from 'react'
import { CardBody, Container } from './styles'
import { FaUserCircle } from "react-icons/fa";
import { CgLogOff } from "react-icons/cg";
import { Link } from 'react-router-dom';

const LoggedScreen = () => {
  return (
    <Container>
      <CardBody>
      <Link to='/' className='logoff' title='Logoff'><CgLogOff></CgLogOff></Link>
      <FaUserCircle className="icon" />
        <h2>Logged as: Brendon</h2>
        <h3>Your email: devbrendonvs@gmail.com</h3>

      </CardBody>

    </Container>
  )
}

export default LoggedScreen