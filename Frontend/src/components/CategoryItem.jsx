import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    flex : 1;
    margin : 3px;
    height : 40vh;
    position : relative;
`
const Image =styled.img`
    width : 95%;
    height : 100%;
    /* object-fit  : cover; */
    ${mobile({ height : "30vh"})}
`
const Info = styled.div`
    position : absolute;
    top : 30%;;
    left : 0;
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
`
const Title = styled.h1`
    color : white;
    padding-bottom : 20px
`
const Button = styled.button`
    border : none;
    padding : 10px;
    background-color : crimson;
    color : white;
    cursor: pointer;
    font-weight : 600;
    border-radius : 2px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
`
const CategoryItem = ({item}) => {
    var cat = item.cat.toLowerCase()
  return (
    <Container>
        <Link to = {`/products/${cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem