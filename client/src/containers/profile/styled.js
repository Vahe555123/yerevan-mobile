import { Link } from "react-router-dom";
import styled from "styled-components";



export const ProfileDiv = styled.div`
width: 100%;
height: 100vh;
/* background: blue; */
padding: 200px 100px;
position: relative;
@media(max-width:1200px){
    padding: 190px 10px;
}
@media(max-width:760px){
    padding: 150px 10px;
}
`
export const InfoDiv = styled.div`
width: 100%;
background: white;
/* border: 1px solid black; */
display: flex;
padding: 50px;
`
export const InfoOrders = styled.div`
width: 35%;
display: flex;
justify-content: center;
/* align-items: center; */
`
export const MyOrders = styled.div`
width: 70%;
height: 300px;
/* border: 1px solid black; */
`
export const MyOrdersInner = styled.div`
width: 100%;
height: 60px;
/* border: 1px solid black; */
display: flex;
align-items: center;
padding-left: 40px;
transition: 0.4s;
background-color: ${({page , index}) => page == index + 1 ? "black" : "#999999"};
opacity:${({page , index}) => page == index + 1 ? "1" : "0.7"};
color: ${({page , index}) => page == index + 1 ? "white" : "black"};
cursor: pointer;
&:hover{
    background: black;
    color: white;
}
`
export const InfoAccount = styled.div`
width: 65%;
/* background-color: red; */
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
`
export const InfoDivTitle = styled.div`
width: 100%;
height: 70px;`

export const ContactInfo = styled.div`
width: 35%;
height: 300px;
border: 1px solid black;
padding: 25px;
display:flex;
flex-direction: column;
gap: 25px;
font-size: 18px;
`
export const LinkDiv = styled.div`
width: 250px;
display: flex;
align-items: center;
position: relative;
bottom: 34px;
gap: 3px;
overflow: hidden;
font-size: 14px;
p{
   font-size: 14px;
    color: #999999;
    cursor: pointer;
}
@media(max-width:760px){
    display: none;
}

`
export const Point = styled.div`
width: 5px;
height: 5px;
border-radius: 50%;
background:  #999999;
/* position: absolute; */
/* top: 50px; */

`

export const WishList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
`

export const WishButton = styled.button`
width: 170px;
height: 50px;
`

export const PersInput = styled.input`

`


export const AddressBook = styled.div`

`
export const Personal = styled.div`

`

export const Country = styled.div`

`











export const ProductsDiv = styled.div`
min-width: 30%;
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
width: 38%;
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
export const  ProductsDel = styled.div`
width: 50%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;
`
export const Edit = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5px;
background: none;
border: none;
cursor: pointer;
&:hover{
    color: #E60E87;
}
`
