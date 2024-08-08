import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { PiScales } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
    ProfileDiv,
    LinkDiv,
    Point,
    InfoDiv,
    InfoOrders,
    InfoAccount,
    MyOrders,
    MyOrdersInner,
    InfoDivTitle,
    ContactInfo,
    WishList,
    WishButton,
    Country,
    PersInput,
    AddressBook,
    Personal,
    ProductsDiv,
    ProductsItems,
    ProductsIcons,
    ProductsItem,
    ProductsTexts,
    ProductsModel,
    ProductsPrice,
    ProductsWeeklePrice,
    ProductsButton,
    ProductsDel,
    Remove,
    Edit
} from "./styled.js"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
export const ProfilePage = () => {
    const loc = useLocation()
    const [value, setValue] = useState()
    const [active, setActive] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        if(loc.state == "like"){
            setPage(3)
        }
    } , [])
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
    }, [active])
    const obj = [
        { text: "My Account" },
        { text: "My Orders" },
        { text: "My Wish List" },
        { text: "Address Book" },
        { text: "Account Information" },
    ]
    const addwish = async(id) => {
        try {
            const req = await fetch(`http://localhost:3001/add-wish?token=${localStorage.getItem("token")}&id=${id}` )
            const res = await req.json()
            console.log(res);
            setActive(e => !e)
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
            <ProfileDiv>


                <LinkDiv>
                    <Point></Point>
                    <Link to="/">
                        <p to>Home</p>
                    </Link>

                    <Point></Point>Profile
                </LinkDiv>
                <InfoDiv>
                    <InfoOrders>
                        <MyOrders>
                            {obj?.map((e, i) => {
                                return (
                                    <MyOrdersInner page={page} index={i} onClick={() => setPage(i + 1)} >{e.text}</MyOrdersInner>
                                )
                            })}

                        </MyOrders>
                    </InfoOrders>
                    {page == 1 && <InfoAccount>
                        <InfoDivTitle>
                            <h1>My Account</h1>
                        </InfoDivTitle>
                        <p>Personal information</p>
                        <ContactInfo>
                            <p>Contact Infoframtion</p>
                            <p>{value?.name} {value?.lastName}</p>

                        </ContactInfo>
                    </InfoAccount>
                    }
                    {page == 2 && <div><h1>Orders</h1></div>
                    }
                    {page == 3 && <WishList>
                        <ProductsDiv>
                            {value?.wishList?.map((e, i) => {
                                let a = false
                                if(e.likes.includes(value?._id)){
                                    a = true
                                }
                                return (
                                    <>
                                        <ProductsItems>
                                            
                                            <ProductsIcons><PiScales  className="heartIcon" onClick={() => addcompare(e)} /> 
                                            {!a ? <IoMdHeartEmpty className="heartIcon" onClick={() => addwish(e._id)}/> : <IoMdHeart style={{color:"red"}}  className="heartIcon" onClick={() => addwish(e._id)}/>}
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
                                                <ProductsDel>
                                                    <Edit><FaPen/>Edit</Edit>
                                                    <Edit onClick={() => addwish(e._id)}><RiDeleteBin6Line />Remove</Edit>
                                                </ProductsDel>

                                            </ProductsTexts>
                                        </ProductsItems>

                                    </>
                                )
                            })}

                        </ProductsDiv>

                        <WishButton>ADD ALL TO CART</WishButton>
                    </WishList>
                    }
                    {page == 4 && <AddressBook>
                        <h1>Add new address</h1>
                        <Personal>
                            <h2>Personal Informaqtion</h2>
                            <PersInput></PersInput>
                            <PersInput></PersInput>
                            <PersInput></PersInput>
                            <PersInput></PersInput>
                        </Personal>
                        <Country>
                            <h2>
                                Country Armenia
                                <PersInput></PersInput>
                                <PersInput></PersInput>
                                <PersInput></PersInput>
                                <select>
                                    <option value="">Vagharshapat</option>
                                    <option value="">Yerevan</option>
                                    <option value=""></option>
                                </select>
                            </h2>
                        </Country>
                    </AddressBook>
                    }
                    {page == 5 && <h1>Account Information</h1>
                    }

                </InfoDiv>
            </ProfileDiv>

        </>
    )
}