import React from 'react'
import LoggedScreen from '../LoggedScreen'
import LoginCard from '../LoginCard'
import RegisterCard from '../RegisterCard'
import { Container } from './styles'

const Content = () => {
  return (
    <Container>
        <LoggedScreen></LoggedScreen>
        <LoginCard></LoginCard>
        <RegisterCard></RegisterCard>
    </Container>
  )
}

export default Content