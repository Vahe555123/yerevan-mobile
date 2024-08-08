import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/headerLogo.png"

export const HeaderDiv = styled.div`
width: 100%;
height: 100px;
background: #F5F5F5;
display: flex;
flex-direction: column;
justify-content: center;
position: fixed;
z-index: 9999;

@media (max-width: 760px){
 padding-right: 5px;
    height: 60px;
}

@media (max-width: 550px){
max-width: 500px;
}

`
export const HeaderTop = styled.div`
width: 100%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
background:#E5E5E5;
@media (max-width: 760px){
  display: none;
}
`
export const HeaderTopInner = styled.div`
width: 83%;
height: 35px;
display: flex;
justify-content: space-between;
color: white;
padding-left: 150px;
`
export const HeaderTopInfo = styled.div`
width: 64%;
height: 35px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
p{
    color: #666666;
    font-size: 12px;
    cursor: pointer;
    &:hover{
    color: #E60E87;
}
@media(max-width:775px){
  font-size: 10px;
}
}
`
export const Headerlenguage = styled.div`
width: 105px;
min-height: 105px;

`
export const HeaderTopLenguadeDiv = styled.div`
width: 100px;
height: 35px;
background-color: #D9D9D9;
color: #66687D;
display: flex;
justify-content: space-around;

align-items: center;
border:none;
font-size: 15px;
cursor: pointer;
&:hover{
  color: #E60E87;
}
`
export const HeaderTopLenguadeDiv2 = styled.div`
width: 100px;
height: 30px;
background-color: #D9D9D9;
color: #66687D;
display: flex;
justify-content: space-around;
align-items: center;
z-index: 100;
position: relative;
font-size: 15px;
cursor: pointer;
&:hover{
  color: #E60E87;
}
`
export const HeaderTopLenguadeDiv3 = styled.div`
width: 100px;
height: 30px;
background-color: #D9D9D9;
color: #66687D;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
font-size: 15px;
cursor: pointer;
&:hover{
  color: #E60E87;
}

`

export const HeaderDivInner = styled.div`
display: flex;
width: 100%;
height: 100px;
justify-content: space-around;
align-items: center;
gap: 20px;
padding: 0px 80px 0px 210px;
.logOut{
  font-size: 36px;
  cursor: pointer;
color: #666D86;

 &:hover{
  color: #E60E87;
 }
}
@media (max-width: 760px){
  justify-content: end;
  padding: 0;
  /* padding-right: -20px; */
}
@media (max-width: 391px){
  /* width: 90%; */
}

`
export const HeaderLogoDiv = styled.div`
width: 120px;
height: 100px;
padding: 20px;
background: white;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 5%;


@media (max-width: 760px){
  width: 50px;
  height: 50px;
  background: none;
  left: 2%;
  margin-top: 3px;
}
`
export const HeaderLogo = styled(Link)`
width: 80px;
height: 80px;

background-image: url(${Logo});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: absolute;

&:hover{
    opacity: 0.6;
}
@media (max-width: 760px){
  width: 50px;
  height: 50px;
}
`

export const HeaderMenuDiv = styled.div`
min-width: 150px;
height: 33px;
gap: 8px;
display: flex;
justify-content: space-around;
align-items: center;
color: black;
overflow: hidden;
.serachIconMedia{
    display: none;
    font-size: 30px;
    cursor: pointer;
}
@media (max-width: 760px){
  .serachIconMedia{
    display: block;
    color: #666D86;
  }
}
.heartIcon{
  
  font-size: 30px;
 cursor: pointer;
color: #666D86;

 &:hover{
  color: #E60E87;
 }
 
}
`
export const DropSearchDiv = styled.div`
position: fixed;
top: 60px;
width: 100%;
height: 110px;
background-color: white;
/* overflow: hidden; */
display: ${({ open }) => {
    return open ? "flex" : "none"
  }
  };
flex-direction: column;
align-items: end;
padding: 10px;
gap: 10px;
@media (min-width:760px) {
   
  
   display: none;
      
   }
/* justify-content: space-around; */
`

export const HeaderMenuDivContact = styled.div`
display: flex;
gap: 6px;

align-items: center;
justify-content: center;



`

export const Links = styled(Link)`
color: black;
&:hover{
    color: goldenrod;
}
`
// export const SearchDropDiv = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// background: none;
// border: 1px solid #E5E5E5;
// width: 98%;
// height: 40px;
// border-radius: 20px;
// padding: 0px 10px;
// /* margin: 0 auto; */
// `
export const SearchDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: none;
border: 1px solid #E5E5E5;
width: 900px;
height: 40px;
border-radius: 20px;
padding-left: 25px;
/* gap: 10px; */


@media (max-width:760px) {
   
  
display: none;
   
}
@media (max-width:500px) {
   
  
   padding: 0px 10px;
   
}

`
export const SearchDivIconDrop = styled.div`
  width: 45px;
    height: 40px;
    border-radius: 50%;
    color: #FB016F;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        background-color: #E5E5E5;
    }
`
export const SearchDivIcon = styled.div`
    width: 45px;
    height: 40px;
    border-radius: 50%;
    color: #FB016F;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        background-color: #E5E5E5;
    }
`
export const SearchDropDivInp = styled.input`
height: 30px;
border: none;
outline: none;
border-radius: 7px;
background: none;
width: 100%;
`
export const SearchDivInp = styled.input`
height: 30px;
border: none;
outline: none;
border-radius: 7px;
background: none;
width: 100%;
`

export const HeaderShop = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
font-size: 12px;

`


export const Lenguage = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 1px;
font-size: 12px;

`

export const LoginIn = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 1px;
font-size: 12px;
/* .signIcon{
    color: #666D86;
    font-size: 17px;
    font-weight: bolder;
} */


`
export const HeaderMenuIcon = styled.div`
font-size: 20px;
display: none;
position: relative;
color: #666D86;
cursor: pointer;
&:hover{
  color: #E60E87;;
}

@media (max-width:760px) {
    display: block;

    
}
`

export const MeduIconDrop = styled.div`
width: 100%;
/* display: ${({ isOpenned }) => isOpenned ? "flex" : "none"}; */
position: fixed;
right: 0px;
transition: 500ms;
top: ${({ isOpenned }) => isOpenned ? "61px" : "-500px"};
flex-direction: column;
z-index:999;   
`

export const MenudIconDropItems = styled.div`
width: 100%;
height: 60px;
border-bottom: 1px solid #F5F5F5;
display: flex;
align-items: center;
padding: 30px; 
background: white;
transition: 0.7s;
p{
color: #666666;
    font-family: "montserrat-regular", "montserratarm-regular";
    font-size: 12px;
    cursor: pointer;
    &:hover{
  color: #E60E87;
}
}

`
export const OpenDiv = styled.div`
  display: ${({ openLang }) => openLang ? "block" : "none"};
`

export const MenuLenguage = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
padding: 30px; 
background: white;
transition: 0.7s;
color: #666666;
gap: 10px;
p{
  color: #666666;
    font-family: "montserrat-regular", "montserratarm-regular";
    font-size: 15px;
    cursor: pointer;
    &:hover{
  color: #E60E87;
}
}
`


// export const SearchDivInpIcon = styled.div`

// `src/containers/homePage/style.js


export const Acsessories = styled.div`
width: 100%;
height: 55px;
background-color: black;
display: flex;
justify-content: space-around;
align-items: center;
transition: 0.5s;
position: fixed;
top: 100px;
z-index: 999;
.prev{
  position: absolute;
  left: 0;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 6px;

}
.next{
  position: absolute;
  right: 0;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 10px;
}

.arrow{
    color: #494949;
    &:hover{
        color: #E60E87;
    }
}
@media(max-width:760px){
    top: 60px;
    margin-bottom: 60px;
    height: 40px;
}
@media(max-width:550px){
   padding: 0px 5px;
}
/* @media(max-width:390px){
    padding: 25px;
} */
`



export const AcsessoriesItems = styled(Link)`
width: 20%;
height: 100%;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
color: white;
transition: 0.5s;
cursor: pointer;
gap: 10px;

    &:hover{
    background: #E60E87;
    color: white;
    border: none;

}
@media(max-width:650px){
    font-size: 15px;
}
@media(max-width:580px){
    font-size: 13px;
}
@media(max-width:490px){
    font-size: 12px;
}
@media(max-width:450px){
    font-size: 10px;
}
    
`

export const DivDrop = styled.div`
width: 20%;
height: 55px;
background-color: green;
color: black;
display: ${({ isOpen }) => {
    return isOpen ? "flex" : "none"
  }
  };
position: absolute;
top:55px;
z-index: 9999;
transition: 1s;
align-items: center;

flex-direction: column;

&:hover{
    color: #E60E87;
    
}

@media (max-width: 760px){
 width: 100%;
 /* height: 400px; */
 left: 0;
 top: 40px;

}
`
export const DivDrop2 = styled(Link)`
width: 100%;
min-height: 55px;
background-color: white;
color: black;
transition: 0.5s;
display: flex;
background-color: white;
align-items: center;
padding-left: 25px;
&:hover{
    color: #E60E87;
}
@media (max-width: 760px){
 width: 100%;
 height: 400px;

}
`




export const BgcDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 100;
  
`

export const BgcDivDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 100;
  @media (min-width:760px) {
   
  
   display: none;
      
   }
`