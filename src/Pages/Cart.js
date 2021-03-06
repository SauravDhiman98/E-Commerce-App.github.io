import { BottomNavigation } from '@mui/material'
import styled from 'styled-components'
import Annuocement from '../Components/Annuocement'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Add from '@mui/icons-material/AddBox';
import Remove from '@mui/icons-material/RemoveCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react'
const Cart = () => {

  const [counter, setCounter] = useState(1);
  const [itemPrice, setItemPrice] = useState(750)
  const [shippingCharges, setShippingCharges] = useState(40)
  const [discount, setDiscount] = useState()
 const [finalPrice, setFinalPrice] = useState()
  const Incre = () => 
  {
    if(counter >= 1)
    {
      setCounter((counter) => counter + 1);
    }
  }

  const Dec = () => 
  {
    if(counter > 1)
    {
      setCounter((counter) => counter - 1)
    }

   
  }


  

  return (
   <Container>
      <NavBar/>
      <Annuocement/>
        <Wrapper>
          <Title>Your Cart</Title>
          <Top>
             <TopButton>Continue Shopping</TopButton>
             <TopText>Shopping Bag(2)</TopText>
             <TopText>Your WishList(0)</TopText>
             <TopButton type="filled">Checkout Now</TopButton>
          </Top>
          <Bottom>
            <Info>
                <Product>
                    <Details>
                        <IMage src="https://5.imimg.com/data5/QC/KI/OC/SELLER-38192707/china-mens-casual-shoes-500x500.jpg"/>
                        <ProductDetail>
                            <Name><b>Product:</b>Thunder Shoes</Name>
                             <ProductID><b>ID:</b>13213513</ProductID>
                             <ProductColor color="0c1638"/>
                             <ProductSize><b>Size:</b>37</ProductSize>
                        </ProductDetail>
                    </Details>
                    <Price>
                        <ProductAmountContainer>
                          <Remove onClick={Dec}/>
                           <ProductAmount>{counter}</ProductAmount>
                          <Add onClick={Incre}/>
                        </ProductAmountContainer>
                        <ProductPrice>
                         <CurrencyRupeeIcon/> 750
                          </ProductPrice>
                    </Price>
                </Product>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryTotal>
                <SummaryTotalText>Subtotal</SummaryTotalText>
                <SummaryTitlePrice>
                  <CurrencyRupeeIcon/>
                  {itemPrice
                }</SummaryTitlePrice>
              </SummaryTotal>

              <SummaryTotal>
                <SummaryTotalText>Shipping Charges</SummaryTotalText>
                <SummaryTitlePrice><CurrencyRupeeIcon/>{shippingCharges}</SummaryTitlePrice>
              </SummaryTotal>

              <SummaryTotal>
                <SummaryTotalText>Price AfterDiscount</SummaryTotalText>
                <SummaryTitlePrice>{finalPrice}</SummaryTitlePrice>
              </SummaryTotal>

              <SummaryTotal>
                <SummaryTotalAmount>Total</SummaryTotalAmount>
                <SummaryTitlePriceAMount><CurrencyRupeeIcon/>750</SummaryTitlePriceAMount>
              </SummaryTotal>
              
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer/>
   </Container>
  )
}

export default Cart

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1` 
font-weight: 200;
text-align:center ;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between ;
`

const TopButton  = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none" };
background-color: ${props => props.type === "filled" ? "black":"transparent"};
color: ${props => props.type === "filled" && "white" };
`

const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 5px;
`

const Info = styled.div`
 flex:3;
`
const Summary = styled.div`
 flex:1;
 box-shadow: 1px 1px 1px 2px rgba(0,0,0,.3) ;
`

const Product = styled.div`
display: flex;
justify-content:space-between;
`

const Details = styled.div`
 flex:2;
 display: flex;
`

const IMage= styled.img`
 box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3) ;
 width: 200px;
`

const ProductDetail = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content:space-around ;
align-items:flex-start;
`

const Name = styled.span`
margin: 10px;
`

const ProductID = styled.span`
margin: 10px;
`

const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius:50%;
 background-color: #${props => props.color};
 margin: 10px;
`

const ProductSize = styled.div`
margin: 10px;
`

const Price = styled.div`
 flex:1;
 display: flex; 
 align-items:center ;
 justify-content:center ;
 flex-direction:column ;
`

const ProductAmountContainer = styled.div`
  margin: 10px;
 width:30px ;
 height: 30px;
 border-radius:10px;
 border: 1px solid teal;
 display: flex;
 align-items:center ;
 justify-content:center ;
 margin: 0px 5px;
`

const ProductAmount = styled.div`
 margin: 10px;
 padding: 5px;
 
`

const ProductPrice = styled.div`
  display: flex;
  font-size:20px ;
  margin: 10px;
`

const SummaryTitle = styled.div`
 font-size: 30px;
 font-weight: 500;
`

const SummaryTotal = styled.div`
 display: flex;
 align-items:center;
 justify-content:center;
`
const SummaryTotalText = styled.h5`
 margin: 10px;
 padding: 5px;
 font-size:15px ;
 font-weight: 400;
`

const SummaryTitlePrice = styled.div`

`
const SummaryTotalAmount = styled.h2`
  font-size:25px;
  font-weight:450;
  margin: 10px;
`

const SummaryTitlePriceAMount = styled.h2`
font-size:25px;
  font-weight:450;
  margin: 10px;
`



