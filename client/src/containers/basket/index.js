import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import {
    BasketItems,
    ImgTitle,
    ItemsOptions,
    Qtyradius,
    QtyBottomDiv,
    MainDiv,
    TitleDiv,
    TitleItemsFirst,
    TitleItemsOld,
    IconsDiv,
} from "./styled";
import { toast } from "react-toastify";

export const BasketPage = () => {
    const [value, setValue] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [active, setActive] = useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(`http://localhost:3001/profile?token=${localStorage.getItem("token")}`);
                const res = await req.json();
                console.log(res);
                setValue(res.user.basket);

                // Initialize quantities for each basket item
                const initialQuantities = {};
                res.user.basket.forEach((item, index) => {
                    initialQuantities[index] = 1; // using index as a temporary key
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [active]);

    const increaseCount = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities };
            if (newQuantities[index] < 10) {
                newQuantities[index] += 1;
            }
            return newQuantities;
        });
    };

    const minusCount = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities };
            if (newQuantities[index] > 1) {
                newQuantities[index] -= 1;
            }
            return newQuantities;
        });
    };
    const deleteBasket = async (id) => {
        console.log(id);
        const req = await fetch(`http://localhost:3001/delete-basket?token=${localStorage.getItem("token")}&id=${id}`, {
            method: "DELETE"
        })
        setActive(e => !e)
        toast.success("продукт удален из корзины")

    }
    return (
        <MainDiv>
            <TitleDiv>
                <TitleItemsFirst>Իմ Զամբյուղը</TitleItemsFirst>
                <TitleItemsOld>Գույն</TitleItemsOld>
                <TitleItemsOld>Քանակ</TitleItemsOld>
                <TitleItemsOld>Գին</TitleItemsOld>
                <IconsDiv></IconsDiv>
            </TitleDiv>
            {value.map((e, i) => {
                return (
                    <BasketItems key={i}>
                        <ImgTitle>
                            <img src={`http://localhost:3001/uploads/${e.img}`} height={"100%"} width={"100%"} />
                            <div>{e.name}</div>
                        </ImgTitle>
                        <ItemsOptions>{e.color}</ItemsOptions>
                        <ItemsOptions>
                            <QtyBottomDiv>
                                <Qtyradius onClick={() => minusCount(i)}><AiOutlineMinus /></Qtyradius>
                                {quantities[i]}<Qtyradius onClick={() => increaseCount(i)}><GoPlus /></Qtyradius>
                            </QtyBottomDiv>
                        </ItemsOptions>
                        <ItemsOptions>{e.price}</ItemsOptions>
                        <IconsDiv onClick={() => deleteBasket(e._id)}><RiDeleteBin6Line /></IconsDiv>
                    </BasketItems>
                );
            })}
        </MainDiv>
    );
};
