import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProductDiv = styled.div`
width: 100%;
padding: 120px;

background: #F5F5F5;
@media (max-width: 1200px){
padding: 100px 10px;
}
@media(max-width:760px){
  
    padding: 10px;
}

`
export const ProductInner = styled.div`
width: 100%;
margin-top: 100px;
background:#FFFFFF;
padding: 40px 20px 50px 70px;
display: flex;

@media(max-width:1200px){
    padding:10px;
   
}
@media(max-width:750px){
  
    flex-direction: column;
}
`

export const ProductInnerLeft = styled.div`
width: 55%;
height: 500px;
display: flex;
gap: 15px;
@media(max-width:750px){
   width: 100%;
}
@media(max-width:400px){
        gap: 0px;
        height: 400px;
    }
`

export const MiniImages = styled.div`
width: 100px;
height: 500px;
overflow-y:scroll;
/* background-color: black; */
@media(max-width:400px){
        height: 350px;
    }

`
export const MiniDivs = styled.div`
max-width: 90px;
min-width: 70px;
max-height: 100px;
min-height: 80px;
background-color: white;
/* border: ${({ changeBorder }) => changeBorder ? "1px solid black;" : "none"}; */
padding: 5px;

`
export const BigImages = styled.div`
height: 100%;
width: 80%;
display: flex;
align-items: center;
overflow: hidden;


img{
    width: 100%;
   
}
/* @media(max-width:700px){
    height: 350px;
}
@media(max-width:400px){
        
    } */
/* img{
    height: 60%;

} */
    /* @media(max-width:380px){
      
        height: 410px;
    } */

`

export const ProductInnerRight = styled.div`
width: 46%;
height: 520px;
overflow: hidden;
padding: 15px;
display: flex;
flex-direction: column;
gap: 25px;
@media(max-width:600px){
   width: 100%;
}
`

export const TopTitleAndIcons = styled.div`
width: 100%;
height: 40px;

display: flex;
justify-content: space-between;
gap: 40px;
.heartIcon{
    font-size: 35px;
    color: #666D86;
    &:hover{
  color: #E60E87;
 }
}
`

export const TopTitleModel = styled.h2`
font-weight: 600;
    font-size: 28px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
    @media(max-width:600px){
   font-size: 22px;
   line-height: 20px;
}
    @media(max-width:400px){
   font-size: 18px;
   font-weight: 500;
   line-height: 20px;
}

`
export const TopIcons = styled.div`
max-width: 80px;
min-width: 70px;
height: 50px;
display: flex;
justify-content: space-between;
gap: 4px;

`

export const ModelPrice = styled.div`
width: 100%;
height: 30px;
font-weight: 500;
    font-size: 25px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
`
export const HLine = styled.div`
width: 1px;
height: 100%;
border-left: 1px solid #E5E5E5;
`
export const WeekleDiv = styled.div`
width: 100%;
height: 50px;
display: flex;
@media(max-width:420px){
   
}
`
export const Weekleprices = styled.div`
width: 120px;
min-width: 110px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
    font-weight: 500;
    font-size: 17px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
`

export const WeekleP = styled.p`

    font-weight: 500;
    font-size: 13px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";

color: #E5E5E5;
`


export const Cashless = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const CashlessP = styled.p`
 font-weight: 500;
    font-size: 17px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
`
export const Cash = styled.div`
display: flex;
align-items: center;

gap: 20px;

`
export const CashP = styled.p`
 font-weight: 500;
    font-size: 17px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
`

export const Options = styled.div`
width: 65%;
height: 50px;
display:flex;
justify-content: space-between;
gap: 10px;
`

export const OptionsL = styled.div`
width: 30%;
`
export const OptionsR = styled.div`
width: 40%;

`
export const OptionsP = styled.p`

font-weight: 500;
font-size: 15px;
line-height: 26px;
font-family: "montserrat-medium", "montserratarm-medium";
color: #E5E5E5;
`
export const OptionsLeftP = styled.p`
 font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    font-family: "montserrat-medium", "montserratarm-medium";
`

export const Qty = styled.div`
width: 50%;
height: 60px;
display: flex;
flex-direction: column;
gap: 12px;
@media(max-width:500px){
    width: 250px;
    min-width: 250px;
}

`
export const QtyBottomDiv = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Qtyradius = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
padding: 3px;
border: 1px solid black;
transition: 0.7s;
&:hover{
    color: white;
    background: black;
}
`
export const AddToCart = styled.button`
width: 180px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

letter-spacing: 2px;
transition: 0.5s;
    background: #E60E87;
    color: white;
    border: none;
&:hover{
    opacity: 0.7;
}

`