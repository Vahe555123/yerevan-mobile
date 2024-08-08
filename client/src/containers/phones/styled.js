import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';


export const PhonesDiv = styled.div`
width: 100%;
background: #F5F5F5;
padding: 200px 100px 100px;
@media(max-width:1200px){
    padding: 190px 10px 10px;
}
@media(max-width:760px){
    padding: 150px 10px 10px;
}
`
export const PhoneDivInner = styled.div`
width: 100%;
min-height: 850px;
background: white;
display: flex;
flex-direction: column;
/* align-items: center; */
/* overflow: hidden; */
/* padding-top: 100px ; */
gap: 3px;
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

export const SortDiv = styled.div`
width: 100%;
height: 100px;
background-color: white;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-size: 20px;
        font-family: "montserrat-medium", "montserratarm-medium";
        

}
@media (max-width:760px){
    .sortP{
 display :none ;
}
}
`
export const DivSortBar = styled.div`
min-width: 21%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
gap: 5px;
p{
    font-size: 15px;
    text-align: center;
        font-family: "montserrat-medium", "montserratarm-medium";
}

`

export const FilterDiv = styled.div`
width: 50px;
height: 50px;
font-size: 20px;
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
p{
    font-size: 14px;
}
transition: 0.5s;
&:hover{
    color: #E60E87;
}


@media(max-width:760px){
    display: ${({ open }) => open ? "flex" : "none"
    };
}
`

export const PositionSortDrop = styled.div`
width: 154px;
/* height: 100px; */
border: 1px solid black;
position: absolute;
top: 33px;
left: -0.3px;
background: white;
overflow-y: scroll;
height: 100px;
`
export const PositionDiv = styled.div`
width: 155px;
height: 35px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 8px;
border: 1px solid black;
cursor: pointer;
position: relative;
`


export const ItemsDiv = styled.div`
width: 100%;
/* height: 500px; */
display: flex;
gap: 3px;
`
export const ItemsCategory = styled.div`
width: 25%;
/* height: 300px; */
background: white;
transition: 0.5s;
@media (max-width:766px) {
    width: 300px;
    top: 0px;
    position: fixed;
    z-index: 99999999999;
    left: ${({ open }) => open ? "0px" : "-400px"};
     /* display: ${({ open }) => open ? "flex" : "none"} };*/
    flex-direction: column;
    
}
`
export const Items = styled.div`

width: 25%;
height: 300px;
background-color: blueviolet;
`

export const PageDiv = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    cursor: pointer;
`

export const PageDivBody = styled.div`
        width: 100%;
        /* height: 200px; */
        /* background-color: green; */
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    
`
export const CheckboxDiv = styled.div`

label{
    display: flex;
align-items: center;
gap: 10px;
cursor: pointer;
}
`

export const RangeDiv = styled.div`
	padding: 10px;

`
export const SliderStyle = styled(Slider)`
  width: 100%;
  margin-top: 10px;
`

export const FilterPriceInput = styled.input`
	outline: none;
  border: 1px solid #e5e5e5;
	width: 100px;
	height: 30px;
	border-radius: 8px;
	/* margin-left: 7px; */
  padding: 5px;
`
export const FilterPriceDiv = styled.div`
width: 100%;
height: 30px;
display: flex;
gap: 5px;
align-items: center;
/* justify-content: center; */
`
export const CategoryDropFilter = styled.div`
width: 55px;
height: 55px;
z-index: 99;
display: none;
position: absolute;
right: -50px;
background: white;
padding-top: 3px;
@media (max-width:766px){
    display: flex;
    justify-content: center;
    align-items: center;
}
`



export const BgcDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 100000;
`