import styled from "styled-components";
import { Link } from "react-router-dom";
export const FilterSerachDiv = styled.div`
  width:100%;
  height: 40px;
  position: relative;
  z-index: 3;
  justify-content: space-between;
align-items: center;
border-radius: 20px;
@media (max-width:760px) {
   
  
   /* display: none; */
      
   }
   @media (max-width:500px) {
      
     
      padding: 0px 10px;
      
   }
   
`
export const FilterSearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  /* margin-top: 12px; */
  border: 1px solid #E5E5E5;
  @media (max-width: 839px){
    width: 95%;
    font-size: 18px;

  }
  @media(max-width: 400px){
font-size:14px 
 }

`

export const FilterSearchIcon = styled.div`
  width: 42px;
 height: 38px;
 position: absolute;
 font-size: 20px;
 right: 0px;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 transition: 0.5s;
 cursor: pointer;
 &:hover{
        color: #FB016F;
        background-color: #E5E5E5;
    }
  /* @media(max-width: 1130px){
    right: 13%;
  }*/
  @media(max-width: 839px){
    right: 33px;
    top: 1px;
  }
  @media(max-width: 400px){
    right: 25px;
  }
`

export const ProductInfoDiv = styled.div`
  min-height: 100px;
  max-height: 500px;
  margin-top: 8px;
  overflow-y: scroll;
  width: 70%;
  position: absolute;
  background-color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 1px 9px 10px 4px rgba(0,0,0,0.52);
  left: 0;
  right: 0;
  margin: 10px auto;
z-index: 3;
  &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 20px;

      }
    
      &::-webkit-scrollbar-thumb:hover {
        background-color: #333;
      }
    
      &::-webkit-scrollbar-track {
        background-color: white;
      }
      @media(max-width: 300px){
        left: -40px;
      }
`
export const Img = styled.img`
  height: 100px;
`

export const SearchProductDiv = styled.div`
padding: 20px;
  width: 100%;
  min-height: 100px;
    border: none;
  border-bottom: 1px solid #e5e5e5;
`
export const RamkaSigns = styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    height: 1000px;
    top: -70px;
    background-color: black;
    opacity: 0.6;
    z-index: 3;


`
export const LinkTo = styled(Link)`
color: black;
text-decoration: none;
`