import { CheckCircleOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width : 100%;
    margin : auto;
`
const Wrapper = styled.div`
    width : 30%;
    margin : auto;
    justify-content: center;
    margin-top  :200px
`
const Text = styled.div`
    padding : 20px;
    
`
const S = styled.h1`
    text-align : center;
    padding-bottom : 20px;
`
const P = styled.p`
   text-align : center
`
const  Icon = styled.div`
    display : flex;
    justify-content :  center;
    margin : auto;
    padding-bottom : 50px;
`
const Button = styled.button`
    background: crimson;
    color  : white;
    display : flex;
    margin : auto;
    padding : 15px;
    border : none;
    border-radius : 2px;
    cursor: pointer;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
`

const Success = () => {
  return (
     <Container>
        <Wrapper>
            <Text>
                <S>Success!</S>
                <P>Your Order Is Placed Successfully</P>
            </Text>
            <Icon>
                <CheckCircleOutlined style={{color : "teal",fontSize : "100px"}}></CheckCircleOutlined>
            </Icon>
                <Button><Link to = "/" style={{textDecoration : "none", color : "white"}}>Continue Shopping</Link></Button>
         </Wrapper>
     </Container>
  )
}

export default Success