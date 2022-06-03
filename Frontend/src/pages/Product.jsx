import { Add, Remove } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { addProduct } from "../redux/cartRedux"
import { publicRequest } from "../requestMethod"
import { mobile } from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding : "10px", flexDirection : "column"})}
`
const ImgContainer = styled.div`
    flex  :1;
`
const Image= styled.img`
    width : 80%;
    height: 80vh;
    /* object-fit : cover; */
    ${mobile({ height : "40vh"})}
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 0px 50px;
    ${mobile({ padding : "10px"})}
`
const Title = styled.h1`
    font-weight: 500;
`
const Desc = styled.p`
    margin : 20px 0px;
`
const Price = styled.span`
    font-weight : 100;
    font-size : 40px;
`
const FilterContainer = styled.div`
    display : flex;
    width : 50%;
    justify-content : space-between;
    margin : 30px 0px;
    ${mobile({ width : "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items : center;
`
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight : 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius : 50%;
    background-color : ${props => props.color};
    margin : 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    width : 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width : "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items : center;
    font-weight : 700;
`
const Amount = styled.span`
    width : 30px;
    height : 30px;
    border-radius : 10px;
    border : 1px solid teal;
    display: flex;
    align-items : center;
    justify-content : center;
    margin : 0px 5px;
`
const Button = styled.button`
    padding : 14px;
    background-color : crimson;
    color : white;
    border-radius : 5px;
    font-weight : 500;
    &:hover{
        cursor: pointer;
    }
`
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/" + id)
    
                setProduct(res.data)
            }
            catch(err){
                console.log(err)
            }
        };
        getProduct()
    },[id])

     console.log("s", product)

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity - 1)
        }
        else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch( addProduct({...product, quantity, color, size}) )
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src = {product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>Rs. {product.price}</Price>
                 <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color = {c} key = {c} onClick = {() => setColor(c)}/>           //each color is unique we don't have id here
                        ))}

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange= {(e) => setSize(e.target.value)}>
                            {product.size?.map((s) => (
                                <FilterSizeOption key = {s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer> 
                <AddContainer>
                    <AmountContainer>
                       <Remove onClick = {() => handleQuantity("dec")}/>
                       <Amount>{quantity}</Amount>
                       <Add  onClick = {() => handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product