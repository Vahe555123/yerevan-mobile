import styled from "styled-components";
import { Link } from "react-router-dom";
import Iphone from "../../assets/image/iphone.png"





export const Sliders = styled.div`
width: 100%;
height: 700px;
padding-top:150px;
/* background: #B2DEE1; */
/* padding-top: 30px; */
/* padding-bottom: 20px; */
`







export const Container = styled.div`
width: 100%;
padding: 30px;
background: #F5F5F5;
@media (max-width: 760px){
padding: 10px;
}
`
export const ProductsTitle = styled.h2`
font-size: 31px;
font-weight: bold;
font-family: Roboto, 'Open Sans',sans-serif;
@media(max-width:760px){
    margin-top: 70px;
}
`

export const ProductsDiv = styled.div`
width: 100%;
display: flex;
/* gap: 2px; */
justify-content: space-around;
margin-top: 35px;
flex-wrap: wrap;
@media (max-width: 1000px) {
    gap: 10px;
    
}


`

export const ProductsItems = styled.div`
width: 23%;
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
    width: 40%;
}
@media(max-width:700px){
    width: 48%;
}
@media (max-width:500px) {
   width: 80%;
   
  /* flex-wrap: wrap; */
   
}

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
    color: red;
   }
   
}

`

export const ProductsItem = styled.div`
width: 150px;
height: 150px;

background-repeat: no-repeat;
background-size: cover;
background-position: center;
transition: 0.3s;
cursor: pointer;

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
width: 150px;
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
`

export const ItemsDiv = styled.div`

width: 100%;
height: 50px;
display: flex;
margin-top: 70px;
gap: 20px;
`

export const ItemsPhone = styled.button`

font-size: 20px;
font-weight: bold;
font-family: Roboto, 'Open Sans',sans-serif;
border: none;
background: none;
cursor: pointer;
padding: 10px 0 0 0;
&:hover{
    color: #E60E87;
}
`

export const PhoneTitle = styled.h2`
margin-top: 25px;
font-size: 25px;
font-weight: bold;
font-family: Roboto, 'Open Sans',sans-serif;
`

export const IphonePic = styled(Link)`
width: 190px;
height: 190px;
/* background-image: url(${Iphone}); */
background-repeat: no-repeat;
background-size: cover;
background-position: center;
transition: 0.3s;
cursor: pointer;

&:hover{
    transform: scale(1.1);
}
`



// export const DropCont = styled.div`
// width: 170px;
// height: 55px;
// background-color: bisque;
// display: ${props => (props.is ? "flex" : "none")};
// position: absolute;
// left: 170px;

// align-items: center;
// `