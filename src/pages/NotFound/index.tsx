import React from 'react'
import { Container, Texts, Error, Redirect } from './styles'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <Texts>
        <Error>
          404
        </Error>
        <Redirect>
          Please, go to <Link to='/'>Home</Link>
        </Redirect>
      </Texts>
    </Container>
  )
}

export default NotFound