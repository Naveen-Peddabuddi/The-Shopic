import styled from "styled-components"
import {Link} from "react-router-dom";
import { mobile } from '../responsive';
const Container = styled.div`
    /* background-color : teal; */
    height : 50px;
    color : white;
    display : flex;
    align-items : center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`
const MenuItem = styled.div`
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize : "12px", marginLeft : "10px"})};
    :hover{
      background-color: #ff99ad;
      font-size: 18px;
    }
`
const Announcement = () => {
  return (
    <div>
        <Container>
        <MenuItem><Link to="/" style={{textDecoration : "none", color : "black"}}>HOME</Link></MenuItem>
                <MenuItem><Link to="/products/cardio" style={{textDecoration : "none", color : "black"}}>CARDIO</Link></MenuItem>
                <MenuItem><Link to="/products/strength"  style={{textDecoration : "none", color : "black"}}>STRENGTH</Link></MenuItem>
                <MenuItem><Link to="/products/crossfit"  style={{textDecoration : "none", color : "black"}}>CROSSFIT</Link></MenuItem>
                <MenuItem><Link to="/products/packages" style={{textDecoration : "none", color : "black"}}>PACKAGES</Link></MenuItem>
        </Container>
    </div>
  )
}

export default Announcement