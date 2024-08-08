import styled from "styled-components";

export const FooterPage = styled.div`
width: 100%;
background-color: black;
padding: 30px 100px ;
display: flex;
color: white;
gap: 120px;
@media(max-width:1200px){
    padding: 20px ;
}
border-bottom: 3px solid #FB016F;;

@media(max-width:700px){
    flex-direction: column;
    padding: 20px ;
}
`

export const FooterItems = styled.div`
width: 65%;
display: flex;
gap: 35px;
justify-content: space-between;
flex-wrap: wrap;
@media(max-width:700px){
    width: 100%;
}
`
export const FooterAccess = styled.div`
width: 25%;
display: flex;
text-align: start;
flex-direction: column;
gap: 15px;
@media(max-width:575px){
   gap: 5px;
}
`
export const FooterItemsTitles = styled.div`
width: 100%;
height: 30px;
display: flex;
align-items: center;
gap: 3px;
font-weight: bold;
font-size: 13px;
@media(max-width:700px){
   height: 10px;
}
`
export const FooterItemsP = styled.p`
@media(max-width:960px){
    display: none;
}
`

export const FooterMedia = styled.div`
min-width: 350px;
max-width: 350px;
display: flex;
flex-direction: column;
gap: 55px;
`

export const FooterMediaTel = styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 7px;
`
export const FooterSoc = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
color:#FB016F;
font-size: 32px;
@media(max-width:700px){
  display: none;
}
`
export const FooterSoc2 = styled.div`

display: none;
color:#FB016F;
font-size: 32px;
@media(max-width:700px){
    display: flex;
    font-size: 28px;
   gap: 15px;
}
`

export const FooterWorkTimes = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const FooterEmail = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const FooterInputDiv = styled.div`
width: 80%;
height: 30px;
border: 1px solid #999999;
display: flex;
align-items: center;
position: relative;
.icon{
    position: absolute;
    color:#FB016F;
    font-size: 30px;
    right: 10px;
}
`
export const FooterEmailAddres = styled.input`
width: 100%;
height: 30px;
border: none;
background: none;
padding: 8px;
color: white;
`
export const FooterPayments = styled.div`
width: 150px;
height: 60px;
gap: 20px;
display: flex;
align-items: center;
@media(max-width:700px){
   display: none;
}
`
export const FooterPayments2 = styled.div`
width: 150px;
height: 60px;
gap: 20px;
display: none;
align-items: center;
@media(max-width:700px){
   display: flex;
}
`
export const PaymentsImg = styled.div`

`
export const Pay = styled.div`
width: 40px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;

`

export const FooterBottom = styled.div`
width: 100%;
background: black;
padding: 30px 100px ;
display: flex;
justify-content: space-between;
color: white;
@media(max-width:1200px){
    padding: 20px ;
}
@media (max-width:750px){
    flex-direction: column;
    gap: 15px;
}
`
export const FooterAbout = styled.div`
display: flex;
justify-content: space-between;
font-size: 11px;
gap: 15px;
@media (max-width:750px){
    display: none;
}
`
export const FooterStudio = styled.div`
text-align: start;
display: flex;
flex-direction: column;
font-size: 12px;
gap: 5px;
`