import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductsLog from "../../assets/image/products.jpg"
import Iphone from "../../assets/image/iphone.png"
import ZFold5 from "../../assets/image/zFold.jpg";
import XiaomiPad6 from "../../assets/image/xiaomiPad.png";



export const ProductsDiv = styled.div`
width: 80%;
display: flex;
gap: 2px;
/* justify-content: space-between; */
flex-wrap: wrap;
justify-content: space-around;
/* overflow: hidden ; */
@media (max-width: 1000px) {
justify-content: center;
gap:2px;
    
}
@media (max-width: 766px) {
    width: 100%;
    
}
@media (max-width: 640px) {
    flex-wrap: wrap;
    
}


`

export const ProductsItems = styled.div`
width: 33%;
height: 430px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20px;

background: white;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
@media(max-width:1000px){
    width: 45%;
}

/* @media (max-width:500px) {
   width: 80%;
   
} */

`

export const ProductsIcons = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 3px;

.heartIcon{
  
    font-size: 35px;
   cursor: pointer;


   &:hover{
    color: #E60E87;
   }
   
}

`

export const ProductsItem = styled.div`
width: 150px;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
/* background-image: url(${ProductsLog}); */
background-repeat: no-repeat;
background-size: cover;
background-position: center;
transition: 0.3s;
cursor: pointer;
@media(max-width:540px){
    width: 130px;
    height: 130px;
}
@media(max-width:390px){
    width: 110px;
    height: 110px;
}

&:hover{
    transform: scale(1.2);
}
`
export const ProductsTexts = styled.div`
width: 90%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10px;
@media(max-width:760px){
    gap: 2px;
}
`

export const ProductsModel = styled.p`
font-size: 13px;
font-family: Roboto, 'Open Sans',sans-serif;
font-weight: 500;
cursor: pointer;

&:hover{
    color: #E60E87;
}
`

export const ProductsPrice = styled.p`
font-size: 16px;
font-weight: bold;
font-family: Roboto, 'Open Sans',sans-serif;
@media(max-width:760px){
    font-size: 15px;
    /* font-weight: 500; */
}
`
export const ProductsWeeklePrice = styled.p`
font-size: 16px;
font-weight: bold;
font-family: Roboto, 'Open Sans',sans-serif;
@media(max-width:760px){
    font-size: 15px;
    font-weight: 500;
}
`
export const ProductsButton = styled(Link)`
width: 80%;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
background: none;
border: 1px solid black;
cursor: pointer;
letter-spacing: 2px;
transition: 0.5s;
color: black;

&:hover{
    background: #E60E87;
    color: white;
    border: none;

}
@media(max-width: 700px){
    width: 100%;
}
`

