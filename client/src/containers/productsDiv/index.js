import React, { useEffect, useState } from "react";
import Vision from "../../assets/image/Vision2.png";
import Vision2 from "../../assets/image/vision3.png"
import Vision3 from "../../assets/image/vision4.png"
import A15 from "../../assets/image/A15.png"
import Iphone from "../../assets/image/iphone.png"
import Iphone15ProMaxImg2 from "../../assets/image/Iphone15ProMaxImg2.png";
import Iphone15ProMaxImg3 from "../../assets/image/Iphone15ProMaxImg3.png";
import Iphone15ProMaxImg4 from "../../assets/image/Iphone15ProMaxImg4.png";
import Iphone15ProMaxImg5 from "../../assets/image/Iphone15ProMaxImg5.png"


import {
    ProductsDiv,
    ProductsItems,
    ProductsIcons,
    ProductsItem,
    ProductsTexts,
    ProductsModel,
    ProductsPrice,
    ProductsWeeklePrice,
    ProductsButton,

} from "./styled"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { PiScales } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export const ProductDivPage = ({ range, model, filter  }) => {
    const [prod, setProd] = useState()
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [value, setValue] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(`http://localhost:3001/profile?token=${localStorage.getItem("token")}`)
                const res = await req.json()
                setValue(res.user)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    useEffect(() => {
        if (filter == "Price (min - max)") {
            setProd(prod?.sort((a, b) => a.price - b.price))
        } else if(filter == "Price (max - min)") {
            setProd(prod?.sort((a, b) => b.price - a.price))
        }else if( filter == "Position Name"){
            setProd(prod?.sort((a, b) => a.name.localeCompare(b.name)))

        }
        setActive1(e => !e)
    }, [filter])
    useEffect(() => {
        const myF1 = async () => {
            const req = await fetch("http://localhost:3001/get-product/model?type=" + model)
            const res = await req.json()


            setProd(res)
        }
        myF1()
    }, [active])
    const addwish = async (id) => {
        if (!localStorage.getItem("token")) {
            return toast.error("вы не авторизованы")
        }
        try {
            const req = await fetch(`http://localhost:3001/add-wish?token=${localStorage.getItem("token")}&id=${id}`)
            const res = await req.json()
            console.log(res);
            setActive(e => !e)
            if (!req.ok) {
                toast.error(res.error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addcompare = async (e) => {
        let arr = JSON.parse(localStorage.getItem("compare"))
        let result = arr.filter((elem, i) => {
            return e._id == elem._id
        })
        if (result.length >= 1) {
            return;
        }
        arr.push(e)
        localStorage.setItem("compare", JSON.stringify(arr))

    }

    return (

        <>


            <ProductsDiv>
                {prod?.map((e, i) => {
                    if (e.price > range[0] && e.price < range[1]) { }
                    let b = false;
                    // if(){
                    //     b = true
                    // }

                    let a = false
                    if (e.likes.includes(value?._id)) {
                        a = true
                    } {
                        return (

                            <ProductsItems>

                                <ProductsIcons>
                                    {!b ? <PiScales className="heartIcon" onClick={() => addcompare(e)} /> : <PiScales style={{ color: "red" }} className="heartIcon" onClick={() => addcompare(e)} />}
                                    {/* <PiScales style={{color:"red"}} className="heartIcon" onClick={() => addcompare(e)} /> */}
                                    {!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(e._id)} />}
                                </ProductsIcons>
                                <ProductsItem>
                                    <Link to={`/product/${e._id}`} state={{ item: e }}>
                                        <img src={`http://localhost:3001/uploads/${e.img} `} width="100%" />
                                    </Link>
                                </ProductsItem>

                                <ProductsTexts>
                                    <ProductsModel>{e.name}</ProductsModel>
                                    <ProductsPrice >{e.price}</ProductsPrice>
                                    <ProductsWeeklePrice>{e.weekle}</ProductsWeeklePrice>
                                    <ProductsButton to={`/product/${i}`} state={{ item: e }}>Add</ProductsButton>
                                </ProductsTexts>


                            </ProductsItems>
                        )
                    }

                })}

            </ProductsDiv>


        </>
    )
}