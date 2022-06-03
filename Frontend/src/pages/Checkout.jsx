import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { deleteProducts } from "../redux/cartRedux"

const Container = styled.div`
    width : 100%;
`
const Wrapper = styled.div`
    width: 20%;
    padding: 30px;
    background-color: white;
    margin : auto;
    margin-top : 80px;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    display : flex;
    align-items : center;
    margin : auto;
    margin-top : 20px;
    padding : 11px;
    background : crimson;
    border : none;
    border-radius : 2px;
    color : white;
    &:hover{
        cursor: pointer;
    }
`
const Price = styled.h2`
    font-weight : 100px;
`

const Checkout = () => {
    const Total = useSelector((state) => state.cart)
    
    const dispatch = useDispatch()
    const hanldeCheckout = () => {
        dispatch(deleteProducts())
    }
    
  return (
     <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Price> Total : Rs. {Total.total}</Price>
            <Form>
                <Input 
                   placeholder="name" 
                   type = "text"
                />
                <Input 
                   placeholder="phone"
                   type="phone"
                    
                />
                <Input 
                   placeholder="address" 
                   type = "address"
                />
                <Input 
                   placeholder="pincode" 
                   type = "number"
                />
                <Input 
                   placeholder="card" 
                   type = "number"
                />
                <Input 
                   placeholder="cvv" 
                   type = "password"
                />
            </Form>
            <Link to="/success" style={{textDecoration : "none",}}><Button onClick={hanldeCheckout}>Place Your Order</Button></Link>
        </Wrapper>
     </Container>
  )
}

export default Checkout