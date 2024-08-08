import styled from "styled-components";


export const RegisterDiv = styled.div`
width: 100%;
/* height: 100vh; */
background: #F5F5F5;
padding: 200px 100px 100px;
/* overflow: hidden; */
/* position: relative; */
@media(max-width:1200px){
    padding: 190px 10px 10px;
}
@media(max-width:760px){
    padding: 150px 10px 10px;
}
`


export const RegisterInner = styled.form`
width: 100%;
min-height: 850px;
background: white;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
overflow: hidden;
/* margin-top: 190px; */
padding-top: 100px ;
`
export const RegisterInnerDiv = styled.div`
width: 30%;
min-width: 400px;
height: 400px;
/* border: 1px solid black; */
display: flex;
flex-direction: column;

gap: 30px;
align-items: center;
@media(max-width:490px){
    width: 92%;
    min-width: 0px;
    padding: 50px 0px;
}
`

export const RegisterInputDiv = styled.div`
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`
export const RegisterInput = styled.input`
width: 98%;
height: 50px;
border: 1px solid #CCCCCC;
color: #CCCCCC;
opacity: 0.7;
padding-left: 15px;
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


export const CheckBoxDiv = styled.div`
width: 98%;
display: flex;
align-items: center;
gap: 10px;

input{
    width: 20px;
    height: 20px;
    background: none;
    color: #F5F5F5;
}
p{
    color: #CCCCCC;
    cursor: pointer;
}
label{
    display: flex;
    align-items: center;
gap: 10px;
}

&:hover{
    p{

        color: #E60E87;
    }
}
`

export const RegisterButton = styled.button`
width: 98%;
height: 50px;
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
background: black;
border:none;
color: #F9FFFF;
opacity: 0.8;
transition: 0.5s;
cursor: pointer;

/* font-family: "montserrat-medium", "montserratarm-medium","Roboto"; */
    font-size: 15px;
    line-height: 15px;
&:hover{
    opacity: 1;
}
`