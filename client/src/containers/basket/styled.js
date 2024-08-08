import styled from "styled-components";


// export const Basket = styled.div`
// padding-top: 200px;

// `

// export const BasketDiv = styled.div`

// width:70%;
// height: 100px;
// padding: 20px;
// `
// export const BasketTop = styled.div`
// width:100%;
// height: 100px;
// border-bottom: 1px solid #999;
// display: flex;
// justify-content: space-between;
// padding: 20px;
// align-items: center;
// h2{
//     height: 100px;
// }
// .close{
//     font-size: 35px;
// }
// `
// export const BasketTopInner = styled.div`
// width: 50%;
// display: flex;
// justify-content: space-between;
// position: relative;
// top: 15px;
// left: 10px;

// `
// export const BasketInner = styled.div`
// width: 50%;
// display: flex;
// /* justify-content: space-between; */
// gap: 120px;
// position: relative;
// top: 15px;
// `
// export const BasketItems = styled.div`
// width:100%;
// height: 110px;
// border-bottom: 1px solid #999;
// display: flex;
// justify-content: space-between;
// padding: 20px;
// align-items: center;
// .del{
//     font-size: 20px;

// }
// `

// export const Img = styled.div`
// width: 100px;
// height: 100px;
// background-color: red;
// `


export const QtyBottomDiv = styled.div`
width: 70px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Qtyradius = styled.div`
width: 23px;
height: 23px;
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


//////////////////////////////////////////////////////////////////////


export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 150px;
`

export const TitleDiv = styled.div`
    width: 70%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    @media(max-width: 1000px){
        width: 100%;
    }
`

export const TitleItemsFirst = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40%;
`

export const TitleItemsOld = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 15%;
`

export const BasketItems = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 1000px){
        width: 100%;
    }
`

export const ImgTitle = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    
    img{
        width: 50%;
        object-fit: contain;
    }
    div{
        width: 50%;
    }
`

export const ItemsOptions = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconsDiv = styled.div`
    width: 7.5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
`