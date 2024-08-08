import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
    ProductDiv,
    ProductInner,
    ProductInnerLeft,
    ProductInnerRight,
    MiniImages,
    BigImages,
    MiniDivs,
    TopTitleAndIcons,
    TopTitleModel,
    TopIcons,
    ModelPrice,
    Weekleprices,
    WeekleDiv,
    HLine,
    WeekleP,
    Cashless,
    CashlessP,
    Cash,
    CashP,
    Options,
    OptionsL,
    OptionsP,
    OptionsR,
    OptionsLeftP,
    Qty,
    Qtyradius,
    QtyBottomDiv,
    AddToCart,





} from "./style"
import { PiScales } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { toast } from "react-toastify";






export const ProductPage = () => {
    const [currentProduct, setCurrentProduct] = useState();
    const [a , setA] = useState(false)
    // const [bigImage, setBigImage] = useState(currentProduct?.imgs[0])
    const location = useLocation();
    const params = useParams()
    const [active , setActive] = useState(false)
    const [index, setIndex] = useState()
    const changeImg = (src, i) => {
        // setBigImage(src)
        setIndex(i)
    }
    const [value, setValue] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(`http://localhost:3001/profile?token=${localStorage.getItem("token")}`)
                const res = await req.json()
                console.log(res);
                setValue(res.user)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    useEffect(() => {

        const getData = async () => {
            const req = await fetch("http://localhost:3001/get-products-page?id=" + params.i)
            const res = await req.json()
            setCurrentProduct(res)
            if(res?.likes?.includes(value?._id)){
                setA(true)
            }else{
                setA(false)
            }

        }
        getData()
    }, [active])

    console.log(currentProduct);
    const [count, setCount] = useState(1);

    const increaseCount = () => {

        if (count >= 10) {
            return
        }
        setCount(count + 1);

    };
    const minusCount = () => {
        if (count <= 1) {
            return
        }
        setCount(count - 1);
    }
    console.log(currentProduct);


    const addwish = async(id) => {
        console.log(1);
        if(!localStorage.getItem("token")){
            return   toast.error("вы не авторизованы")
        }
        try {
            const req = await fetch(`http://localhost:3001/add-wish?token=${localStorage.getItem("token")}&id=${id}` )
            const res = await req.json()
            console.log(res);
            setActive(e => !e)
            if(!req.ok){
                toast.error(res.error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addcompare = async(e) => {
        let arr = JSON.parse(localStorage.getItem("compare"))
       let result =  arr.filter((elem , i) => {
         return e._id == elem._id
        })
        if(result.length >= 10){
         return;
        }
        arr.push(e)
        localStorage.setItem("compare" , JSON.stringify(arr))
 
     }

     const addBasket = async () => {
        const req = await fetch(`http://localhost:3001/add-basket?token=${localStorage.getItem("token")}&id=${currentProduct._id}` )
        const res = await req.json()
        console.log(res);
     }
    return (
        
        <>
        
            {/* <div>{currentProduct?.name}</div>
            <img src={currentProduct?.img}/> */}
            <ProductDiv>
                <ProductInner>
                    <ProductInnerLeft>
                        {/* <MiniImages>
                                    <MiniDivs onClick={() => changeImg(e, i)} style={{ border: i === index ? "1px solid black" : "none" }}>
                                        <img src={e} width={"100%"} height={"100%"} />
                                    </MiniDivs>

                        </MiniImages> */}
                        <BigImages>
                            <img src={`http://localhost:3001/uploads/${currentProduct?.img} `} />
                        </BigImages>
                    </ProductInnerLeft>
                    <ProductInnerRight>
                        <TopTitleAndIcons>
                            <TopTitleModel>{currentProduct?.name}</TopTitleModel><TopIcons>{!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(currentProduct._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(currentProduct._id)} />}<PiScales className="heartIcon" onClick={() => addcompare(currentProduct)} /></TopIcons>
                        </TopTitleAndIcons>
                        <ModelPrice>{"֏" + " " + currentProduct?.price}</ModelPrice>
                        <WeekleDiv>

                            <Weekleprices>{"֏" + " " + Math.round(currentProduct?.price / 12)}<WeekleP>12 months</WeekleP></Weekleprices><HLine></HLine><Weekleprices>{"֏" + " " + Math.round(currentProduct?.price / 24)}<WeekleP>24 Months</WeekleP></Weekleprices><HLine></HLine><Weekleprices>{"֏" + " " + Math.round(currentProduct?.price / 36)}<WeekleP>36 Months</WeekleP></Weekleprices>
                        </WeekleDiv>
                        <Cashless><CashlessP>Card</CashlessP>{"֏" + " " + currentProduct?.card}</Cashless>
                        <Cash><CashP>Cash</CashP><span>{"֏" + " " + currentProduct?.cash}</span></Cash>
                        <Options>
                            <OptionsL>
                                <OptionsP>Color</OptionsP>
                                <OptionsP>Memory</OptionsP>
                            </OptionsL>
                            <OptionsR>
                                <OptionsLeftP>{currentProduct?.color}</OptionsLeftP>
                                <OptionsLeftP>{currentProduct?.memory}GB</OptionsLeftP>
                            </OptionsR>
                        </Options>
                        <Qty>
                            Qty
                            <QtyBottomDiv>
                                <Qtyradius><AiOutlineMinus onClick={minusCount} />
                                </Qtyradius>
                                {count}<Qtyradius><GoPlus onClick={increaseCount} />
                                </Qtyradius>
                            </QtyBottomDiv>
                        </Qty>
                        <AddToCart onClick={addBasket}>Add to Cart  <AiOutlineShoppingCart /></AddToCart>
                    </ProductInnerRight>
                </ProductInner>
            </ProductDiv>

        </>
    )
}