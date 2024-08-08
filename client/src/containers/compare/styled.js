import styled from "styled-components";

export const ComparePage1 = styled.div`
    width: 100%;
    padding-top: 150px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-left: 130px;
padding: 200px 100px;
position: relative;
@media(max-width:1200px){
    padding: 190px 10px;
}
@media(max-width:760px){
    padding: 150px 10px;
}
`

export const CardDiv = styled.div`
    min-width: 300px;
    height: 400px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    
    background-color: white;
    #d1{
        text-align: right;
        font-size: 25px;
    }

    
`
export const Items = styled.div`
/* background-color: white; */
display: flex;
flex-direction: column;
gap: 3px;
`
export const ItemsOptions = styled.div`
width: 100%;
height: 50px;
background-color: white;
display: flex;
align-items: center;
padding: 10px;
`
export const ImgDiv = styled.div`
    width: 100%;
    height: 200px;
    /* background-color: blue; */
`

export const CompareDiv = styled.div`
width: 95%;
display: flex;
/* justify-content: space-between; */
gap: 3px;
overflow-x: auto;
padding: 25px;
`
export const CompareOptions = styled.div`
min-width: 23%;
/* min-height: 400px; */
display: flex;

flex-direction: column;
gap: 3px;
/* float: right; */
/* background-color: red; */
`
export const ModelAmount = styled.div`
  width: 100%;
    height: 400px;
    /* border: 1px solid black; */
    display: flex;
background-color: white;
    
    align-items: center;
    padding: 15px;
    font-size: 20px;
`

export const ItemsDiv  =styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 3px;
`

export const AnyOptions = styled.div`
width: 100%;
height: 50px;
background-color: white;
display: flex;
align-items: center;
padding: 10px;
`

export const ProductsButton = styled.button`
width: 150px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
background: none;
border: 1px solid black;
cursor: pointer;
letter-spacing: 2px;
transition: 0.5s;
color: black;
margin-top: 10px;
color: #E60E87;
&:hover{
   background: black;
    color: white;
    border: none;

}
`

export const ImgDivs = styled.div`
width: 100%;
height: 190px;
img{
    object-fit: contain;
}
`