import styled from "styled-components"
import { mobile } from "../responsive"
import { useState, useEffect } from "react"
const Container = styled.div`
    width: 100vw;
    height: 100vh;
     background: /*linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), */
        url("https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 30px;
    background-color: white;
    ${mobile({ width : "70%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 50%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: crimson;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin: auto;
`


const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password: "",
    })
    const rd = ()=> {
        console.log(formData)
    }
    useEffect(()=> {

    },[])
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="username" value={formData.username} onChange={(e)=> setFormData({...formData, username: e.target.value})}/>
                <Input placeholder="email" value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
                <Input placeholder="password" value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={rd}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register