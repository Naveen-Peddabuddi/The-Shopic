import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display :flex;
    ${mobile({ flexDirection : "column"})};
    background-color: #d2e4f1;
`
const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    padding: 20px;
`
const Logo =  styled.h1`
  color: crimson;
`
const Desc = styled.p`
    margin : 20px 0px;
`
const SocialContainer = styled.div`
   display :  flex;
`
const SocialIcon = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    color : white;
    background-color : #${props => props.color};
    display: flex;
    align-items : center;
    justify-content: center;
    margin : 5px;
`
const Center = styled.div`
    flex : 1;
    padding: 20px;
    margin-left : 40px;
    ${mobile({ display : "none"})}
`
const Title = styled.h2`
    margin-bottom : 30px;
`
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;
`
const ListItem = styled.li`
    width : 50%;
    margin-bottom : 10px;
`
const Right = styled.div`
    flex : 1;
    padding: 20px;
    ${mobile({backgroundColor : "lightgray"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>The Shopic.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color ="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Cardio</ListItem>
                <ListItem>CrossFit</ListItem>
                <ListItem>Packages</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 46 East Morris Ave. Strongsville, OH 44136
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 12 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@theshopic.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer