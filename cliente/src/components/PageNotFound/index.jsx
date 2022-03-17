import React,{useEffect,useState} from 'react'
import { Container } from './styles'
import { BiErrorAlt } from "react-icons/bi";

const PageNotFound = () => {
  const [temp, setTemp] = useState(5)
  useEffect(() => {
    setTimeout(() => {
      setTemp(temp-1)
    }, 1000);
  }, [temp])
  
  if(temp <=0){
    window.location.href = "http://localhost:3000/";
  }
  
  return (
      <Container>
        <BiErrorAlt className='icon'></BiErrorAlt>
        <h3>Error : 404</h3>
        <h2>Page Not Found!!</h2>
        <div>Automatically Redirecting: {temp}...</div>
      </Container>
  )
}

export default PageNotFound