import styled from "styled-components";
export const Adminka = styled.div`
width: 100%;
display: flex;
@media(max-width:1200px){
    padding: 190px 10px;
}
@media(max-width:760px){
    padding: 150px 10px;
}

`

export const AdminApp = styled.div` 
width: 100%;
display: flex;

`
export const AdminBigDiv = styled.div` 
width: 50%; 
padding: 100px 100px;

`
export const AdminChanges = styled.div` 
padding: 100px 100px;
width: 50%; 
 
`
export const AdminChangeInner = styled.div` 
width: 50%; 
height: 300px; 
background: red; 
border-radius: 20px; 
margin: 100px auto; 
display: flex; 
justify-content: center; 
align-items: center; 
`
export const AdminImagesChange = styled.div` 
width: 80%; 
height: 250px; 
border-radius: 20px; 
background-color: white; 
cursor: pointer; 
`
export const PutChange = styled.div`
width: 100%;
min-height: 500px;
/* position: fixed; */
background: aliceblue;
left: 0;
top: 0;
bottom:  0;
right: 0;
margin: auto;

`
export const AdminPopIt = styled.div` 
width: 50%; 
z-index: 5;
height: 500px; 
background: white; 
overflow-y: scroll;
border-radius:20px; 
position: fixed; 
padding: 10px;
display: flex;
flex-direction: column;
gap: 15px;
top: 150px;
left: 0;
right: 0;
bottom: 0;
margin: auto;

img{
    width: 100px;
    height: 100px;
}
`
export const AdminDivForInput = styled.div`
width: 100%;
height: 100px;
padding: 30px;
`
export const AdminInput = styled.input`
width: 250px;
height: 50px;
border-radius: 25px;
padding: 10px;
`
export const PopIt = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
margin-top: 40px;
`
export const PopButtons = styled.div`
display: flex;
gap: 5px;
`
export const PopImages = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 5px;
`
export const AdminDiv = styled.div` 
width: 50%; 
display: flex; 
flex-direction: column; 
margin: 100px 0; 
gap: 30px; 
`
export const AdminsInput = styled.input` 
width:350px; 
height: 50px; 
border-radius: 10px; 
padding: 10px; 
`

export const AdminsBtn = styled.button` 
width: 150px; 
height: 70px; 
color: red; 
font-size: 25px; 
border-radius: 10px; 
padding: 10px; 
`

export const DeletBtn = styled.button` 
width: 70px; 
height: 70px; 
color: red; 
display: flex;
justify-content: center;
align-items: center;
font-size: 20px; 
border-radius: 10px; 
padding: 10px; 
`
export const PutBtn = styled.button` 
width: 70px; 
height: 70px; 
color: red; 
font-size: 20px;
display: flex;
justify-content: center;
align-items: center; 
border-radius: 10px; 
padding: 10px; 
`

export const BgcDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 2;
    position: fixed;
    opacity: 0.8;
`

export const AdminLogin = styled.div`
    width: 100%;
  padding-top: 150px;
`



export const LoginInner = styled.form`
width: 100%;
height: 570px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
/* margin-top: 190px; */
`
export const LoginInnerDiv = styled.div`
width: 30%;
min-width: 400px;
height: 400px;
/* border: 1px solid black; */
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
h2{
    font-size: 17px;
}
@media(max-width:490px){
    width: 92%;
    min-width: 0px;
}
`

export const LoginInputDiv = styled.div`
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`
export const LoginInput = styled.input`
width: 98%;
height: 50px;
border: 1px solid #CCCCCC;
color: #CCCCCC;
opacity: 0.7;
padding-left: 15px;
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

export const LoginButton = styled.button`
width: 98%;
height: 50px;
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
    font-size: 20px;
    line-height: 15px;
&:hover{
    opacity: 1;
}
`
export const Forgot = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`


export const InputDiv = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    p{
        position: absolute;
        background-color: white;
        top: 52px;
        color:red;
       
        font-size: 15px;
        z-index: 10;
    }
`