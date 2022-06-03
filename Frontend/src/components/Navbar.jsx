import React from 'react'
import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import Badge from '@material-ui/core/Badge'
import {Link} from "react-router-dom"
import { mobile } from '../responsive';
import { useSelector } from "react-redux"

const Container = styled.div`
    height : 60px;
    ${mobile({ height : "50px"})}
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    ${mobile({ padding : "10px 0px"})}
`
const Left = styled.div`
    display : flex;
    flex : 1;
    ${mobile({ display : "none"})}
`
const SearchContainer = styled.div`
    border : 0.5px solid lightgrey;
    display : flex; 
    align-items : center;
    margin-left : 25px;
    padding : 5px;
    ${mobile({display : "none"})};
    :hover{
        border: 1px solid crimson;
    }
`
const Input = styled.input`
   border : none;
`
const Center = styled.div`
    flex : 2;
    text-align : center;
`
const Logo = styled.h1`
    font-weight : bold;
    text-decoration  : none;
    ${mobile({ fontSize : "17px", paddingLeft : "2px"})}
`
const Right = styled.div`
    flex : 1;
    display :flex;
    align-items : center;
    justify-content : flex-end;
    ${mobile({justifyContent : "center", flex : 3})}
`
const MenuItem = styled.div`
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize : "12px", marginLeft : "10px"})};
`
const Navbar = () => {
  const quantity = useSelector( state => state.cart.quantity )
   
  return (
    <Container>
        <Link to="/"></Link>
        <Wrapper>
            <Left> 
               <SearchContainer>
                 <Input placeholder='search'/>
                 <Search style ={{color : "gray", fontSize : "17px"}}/>
               </SearchContainer>
            </Left>
            <Center>
                <Logo><Link to= "/" style={{textDecoration : "none", color : "crimson"}}>The Shopic</Link></Logo>
            </Center>
            <Right>
                <MenuItem><Link to="/products" style={{textDecoration : "none", color : "black"}}>ALL PRODUCTS</Link></MenuItem>
                <MenuItem><Link to="/register"  style={{textDecoration : "none", color : "black"}}>REGISTER</Link></MenuItem>
                <MenuItem><Link to="/login"  style={{textDecoration : "none", color : "black"}}>SIGN IN</Link></MenuItem>
                <MenuItem>
                     <Link to= "/cart" style={{color :"black"}}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined style={{ color: "crimson" }}/> 
                        </Badge>
                     </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar