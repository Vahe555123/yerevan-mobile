import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";


import {
    Sliders,
    Container,
    ProductsTitle,
    ProductsDiv,
    ProductsItems,
    ProductsIcons,
    ProductsItem,
    ProductsTexts,
    ProductsModel,
    ProductsPrice,
    ProductsWeeklePrice,
    ProductsButton,
    ItemsDiv,
    ItemsPhone,
    PhoneTitle,
    IphonePic,



} from "./style"
import { CiHeart } from "react-icons/ci";
import { PiScales } from "react-icons/pi";
import { Link } from "react-router-dom";
import { SliderPage } from "../../components/slider";
import { toast } from "react-toastify";


export const HomePage = () => {
    const [prod, setProd] = useState()
    const [phonesCount, setPhonesCount] = useState([])
    const [othersCount, setOthersCount] = useState([])
    const [accessoriesCount, setaccessoriesCount] = useState([])
    const [active, setActive] = useState(false)
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
        const myF1 = async () => {
            const req = await fetch("http://localhost:3001/get-product")
            const res = await req.json()
            setProd(res)

            const phones = res.filter((e) => {
                return e.type == "phone"
            })
            setPhonesCount(phones)

            const others = res.filter((e) => {
                return e.type == "others"
            })
            setOthersCount(others)
            const accessories = res.filter((e) => {
                return e.type == "acsessories"
            })
            setaccessoriesCount(accessories)
        }
        myF1()
    }, [active])

    const [phone, setPhone] = useState(true)
    const [accessories, setAccessories] = useState(false)
    const [others, setOthers] = useState(false)


    const changePhone = () => {
        setPhone(true)
        setAccessories(false)
        setOthers(false)
    }
    const changeAccessories = () => {
        setPhone(false)
        setAccessories(true)
        setOthers(false)
    }
    const changeOthers = () => {
        setPhone(false)
        setAccessories(false)
        setOthers(true)
    }

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
            <Sliders>
                <SliderPage />
            </Sliders>
            <Container>

                <ProductsTitle>New Products</ProductsTitle>
                <ProductsDiv>
                    {prod?.map((e, i) => {
                        if (i >= 4) {
                            return;
                        }
                        let a = false
                        if (e.likes.includes(value?._id)) {
                            a = true
                        }
                        console.log(e);
                        return (
                            <ProductsItems>
                                <ProductsIcons>
                                    <PiScales className="heartIcon" onClick={() => addcompare(e)} />
                                    {!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(e._id)} />}
                                </ProductsIcons>
                                <ProductsItem>
                                    <Link to={`/product/${e._id}`} state={{ item: e }}>
                                        <img src={`http://localhost:3001/uploads/${e.img} `} width="100%" />
                                    </Link>
                                </ProductsItem>

                                <ProductsTexts>
                                    <ProductsModel>{e.name}</ProductsModel>

                                    <ProductsPrice >{"֏" + " " + e.price}</ProductsPrice>
                                    <ProductsWeeklePrice>{e.weekle}</ProductsWeeklePrice>
                                    <ProductsButton to={`/product/${e._id}`} state={{ item: e }}>Add</ProductsButton>
                                </ProductsTexts>


                            </ProductsItems>
                        )
                    })}

                </ProductsDiv>
                <ItemsDiv>
                    <ItemsPhone onClick={changePhone} style={{ borderBottom: phone ? "3px solid #E60E87" : "none", color: phone ? "#E60E87" : "black" }}>Phone</ItemsPhone>
                    <ItemsPhone onClick={changeAccessories} style={{ borderBottom: accessories ? "3px solid #E60E87" : "none", color: accessories ? "#E60E87" : "black" }}>Acsessories</ItemsPhone>
                    <ItemsPhone onClick={changeOthers} style={{ borderBottom: others ? "3px solid #E60E87" : "none", color: others ? "#E60E87" : "black" }}>Others</ItemsPhone>

                </ItemsDiv>
                {phone && <>
                    <PhoneTitle>Phones</PhoneTitle>
                    <ProductsDiv>
                        {phonesCount?.map((e, i) => {
                            if (i >= 4) {
                                return;
                            }
                            let a = false
                            if (e.likes.includes(value?._id)) {
                                a = true
                            }
                            if (e.type === "phone") {
                                return (
                                    <ProductsItems>
                                        <ProductsIcons><PiScales className="heartIcon" onClick={() => addcompare(e)} />{!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(e._id)} />}
                                        </ProductsIcons>
                                        <ProductsItem>
                                            <Link to={`/product/${e._id}`}>  <img src={`http://localhost:3001/uploads/${e.img} `} width="100%" /> </Link>
                                        </ProductsItem>
                                        <ProductsTexts>
                                            <ProductsModel>{e.name}</ProductsModel>
                                            <ProductsPrice >{"֏" + " " + e.price}</ProductsPrice>
                                            <ProductsWeeklePrice>Ամսական ֏{Math.round(e.price / 36)}</ProductsWeeklePrice>
                                            <ProductsButton to={`/product/${e._id}`} state={{ item: e }}>Add</ProductsButton>
                                        </ProductsTexts>


                                    </ProductsItems>
                                )
                            }

                        })}

                    </ProductsDiv>
                </>}
                {accessories && <>
                    <PhoneTitle>Acsessories</PhoneTitle>
                    <ProductsDiv>
                        {accessoriesCount?.map((e, i) => {
                            if (i >= 4) {
                                return;
                            }
                            let a = false
                            if (e.likes.includes(value?._id)) {
                                a = true
                            }
                            if (e.type === "acsessories") {
                                return (
                                    <ProductsItems>
                                        <ProductsIcons><PiScales className="heartIcon" onClick={() => addcompare(e)} />{!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(e._id)} />}
                                        </ProductsIcons>
                                        <IphonePic>
                                            <Link to={`/product/${e._id}`}>
                                                <img src={`http://localhost:3001/uploads/${e.img}`} width="100%" />
                                            </Link>
                                        </IphonePic>
                                        <ProductsTexts>
                                            <ProductsModel>{e.name}</ProductsModel>
                                            <ProductsPrice >{"֏" + " " + e.price}</ProductsPrice>
                                            <ProductsWeeklePrice>Ամսական ֏{Math.round(e.price / 36)}</ProductsWeeklePrice>
                                            <ProductsButton to={`/product/${e._id}`} state={{ item: e }}>Add</ProductsButton>
                                        </ProductsTexts>


                                    </ProductsItems>
                                )
                            }

                        })}

                    </ProductsDiv>
                </>}
                {others && <>
                    <PhoneTitle>Others</PhoneTitle>
                    <ProductsDiv>
                        {othersCount?.map((e, i) => {

                            if (i >= 4) {
                                return;
                            }
                            let a = false
                            if (e.likes.includes(value?._id)) {
                                a = true
                            }
                            if (e.type === "others") {
                                return (
                                    <ProductsItems>
                                        <ProductsIcons><PiScales className="heartIcon" onClick={() => addcompare(e)} />{!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)} /> : <IoMdHeart style={{ color: "red" }} className="heartIcon" onClick={() => addwish(e._id)} />}
                                        </ProductsIcons>
                                        <IphonePic to={`/product/${e._id}`}>
                                            <img src={`http://localhost:3001/uploads/${e.img}`} width="100%" />
                                        </IphonePic>
                                        <ProductsTexts>
                                            <ProductsModel>{e.name}</ProductsModel>
                                            <ProductsPrice >{"֏" + " " + e.price}</ProductsPrice>
                                            <ProductsWeeklePrice>Ամսական ֏{Math.round((e.price / 36) + (e.price * 0.5 / 100))}</ProductsWeeklePrice>
                                            <ProductsButton to={`/product/${e._id}`} state={{ item: e }}>Add</ProductsButton>
                                        </ProductsTexts>


                                    </ProductsItems>
                                )
                            }

                        })}

                    </ProductsDiv>
                </>}

            </Container>
        </>
    )
}