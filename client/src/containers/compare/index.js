import React, { useState, useEffect } from "react";
import {
    CardDiv,
    ComparePage1,
    ImgDiv,
    CompareDiv,
    CompareOptions,
    ProductsButton,
    ImgDivs,
    ModelAmount,
    Items,
    ItemsOptions,
    AnyOptions,
    ItemsDiv
} from "./styled";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";




export const ComparePage = () => {
    const [value, setValue] = useState([])
    const [value2, setValue2] = useState(false)
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem("compare"))
        setValue(arr)
    }, [value2])
    const deleteProd = (id) => {
        const result = value.filter((e, i) => {
            return i != id
        })
        localStorage.setItem("compare", JSON.stringify(result))
        setValue2(e => !e)
    }
    
    return (
        <ComparePage1>
            <CompareDiv>
                <CompareOptions>
                    <ModelAmount>
                        <p>Model Amount</p>
                    </ModelAmount>
                    <AnyOptions>
                        <p>SKU</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>Color</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>Memory</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>Brands</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>Battery</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>Ram</p>
                    </AnyOptions>
                    <AnyOptions>
                        <p>CHIPSET</p>
                    </AnyOptions>
                </CompareOptions>

                {value.map((e, i) => {
                    return (
                        <Items>
                            <CardDiv>


                                <ImgDiv>
                                    <div id="d1">
                                        <IoMdClose className="close" onClick={() => deleteProd(i)} />

                                    </div>
                                    <ImgDivs>
                                        <Link to={`/product/${e._id}`}><img src={`http://localhost:3001/uploads/${e?.img} `} height={"100%"} width={"100%"} />
                                        </Link>
                                    </ImgDivs>
                                </ImgDiv>
                                <p>{e.name}</p>
                                <p>֏ {e.price}</p>
                                <p>Monthly ֏ {Math.round(e.price / 36)}</p>
                                {/* <p>ram {e.ram}</p> */}
                                <Link to={`/product/${e._id}`}><ProductsButton to={`/product/${e._id}`}>ADD TO CART</ProductsButton></Link>

                            </CardDiv>
                            <ItemsDiv>

                                <ItemsOptions>
                                    <p>{e.brand}</p>
                                </ItemsOptions>
                                <ItemsOptions>
                                    <p>{e.color}</p>
                                </ItemsOptions>
                                <ItemsOptions>
                                    <p>{e.memory}</p>
                                </ItemsOptions>
                                <ItemsOptions>
                                    <p>{e.brand}</p>
                                </ItemsOptions><ItemsOptions>
                                    <p>{e.battery} mAh</p>
                                </ItemsOptions>
                                <ItemsOptions>
                                    <p>{e.ram}</p>
                                </ItemsOptions>
                                <ItemsOptions>
                                    <p>{e.chipset}</p>
                                </ItemsOptions>
                            </ItemsDiv>
                        </Items>
                    )
                })}
            </CompareDiv>

        </ComparePage1>
    )
}