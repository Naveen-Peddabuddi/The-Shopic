import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import styled from "styled-components"
import { login } from "../redux/apis"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width : "75%"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin: auto;
  &:disabled {
    color : green;
    cursor : not-allowed
  } 
`

const A = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`
const Error = styled.span`
  color : red
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user)
  
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  }
  /* console.log(username, password) */
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder = "username" 
            onChange={(e) => setUsername(e.target.value)} />
          <Input 
            placeholder = "password" 
            type = "password"
            onChange={(e) => setPassword(e.target.value)} />

          <Button onClick={handleClick} disabled = {isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}

          <A>DO NOT YOU REMEMBER THE PASSWORD?</A>
          <A style={{color: "crimson"}} href="/register" >CREATE A NEW ACCOUNT</A>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login