import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDivPage } from "../productsDiv";
import {

    PhonesDiv,
    PhoneDivInner,
    LinkDiv,
    Point,
    SortDiv,
    DivSortBar,
    FilterDiv,
    ItemsDiv,
    ItemsCategory,
    PageDiv,
    PageDivBody,
    FilterPriceInput,
    SliderStyle,
    RangeDiv,
    FilterPriceDiv,
    PositionDiv,
    PositionSortDrop,
    CheckboxDiv,
    BgcDiv,
    CategoryDropFilter

} from "./styled"
import { FaArrowUpLong } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";





export const ApplePage = () => {
    const [showPosition, setShowPosition] = useState(false);
    const [bgcDivOpen, setBgcDivOpen] = useState(false)
    const [showPage, setShowPage] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showColor, setShowColor] = useState(false);
    const [showMemory, setShowMemory] = useState(false);
    const [range, setRange] = useState([0, 2000000]);
    const [open, setOpen] = useState(true)
    const [category, setCategory] = useState(false);
    const [positionState, setPositionState] = useState("ergherd")
    const [positionCategorys, setPositionCategorys] = useState([
        { name: "Position" },
        { name: "Position Name" },
        { name: "Price" },
        { name: "Color" },
        { name: "Memory   " },
        { name: "Position" },
        { name: "Position" },
        { name: "Position" },
        { name: "Position" },
        { name: "Position" },
        { name: "Position" },
    ])
    const [arrChecks, setArrChecks] = useState([
        {
            name: "Apple",
        },
        {
            name: "Xiaomi",
        }, {
            name: "Samsung",
        }, {
            name: "Realme",
        }, {
            name: "OnePlus",
        }, {
            name: "Sony",
        },
    ])
    const [prod, setProd] = useState()

    useEffect(() => {
        const myF1 = async () => {
            const req = await fetch("http://localhost:3001/get-product")
            const res = await req.json()
            setProd(res)
        }
        myF1()
    }, [])
    const bgcDivOpenned = () => {
        setBgcDivOpen((e) => !e)
    }
    const openCategory = () => {
        setCategory((e) => !e)
        setBgcDivOpen((e) => !e)
    }
    const openLang = () => {
        setOpen(true)

    }

    const handleRangeChange = (newRange) => {


        setRange(newRange);
    };

    const handleInputChange = (e, type) => {
        const newValue = parseInt(e.target.value.replace(/\D/g, ''), 10);

        if (!isNaN(newValue)) {
            if (type === 'min') {
                const newMinValue = Math.min(newValue, range[1]);
                setRange([newMinValue, range[1]]);
            } else {
                const newMaxValue = Math.min(newValue, 2000000);
                setRange([range[0], newMaxValue]);

            }
        } else {
            setRange([0, range[1]]);
        }
    };
    const closeFucntion = () => {
        setCategory(false)
        setBgcDivOpen(false)

    }
    return (
        <>
            <PhonesDiv>
                <LinkDiv>
                    <Point></Point>
                    <Link to="/">
                        <p to>Home</p>
                    </Link>

                    <Point></Point>Phones
                </LinkDiv>
                <PhoneDivInner>
                    <SortDiv>
                        <p className="sortP">PHONES</p>
                        <DivSortBar><p>Sort By</p>
                            <PositionDiv onClick={() => setShowPosition((e) => !e)}>
                                {showPosition && <PositionSortDrop>
                                    {positionCategorys.map((e, i) => {
                                        return (
                                            <div onClick={() => setPositionState(e.name)}>{e.name}</div>
                                        )
                                    })}
                                </PositionSortDrop>}
                                <p>{positionState   }</p>
                                {showPosition ? <MdKeyboardArrowUp style={{ fontSize: "20px" }} /> : <MdKeyboardArrowDown style={{ fontSize: "20px" }} />}
                            </PositionDiv>
                            <FaArrowUpLong style={{ fontSize: "20px" }} />
                        </DivSortBar>
                        <FilterDiv open={open} onClick={openCategory}><FaFilter /><p>Filter</p></FilterDiv>
                    </SortDiv>
                    <ItemsDiv>

                        <ItemsCategory open={category}>
                            <CategoryDropFilter> <FilterDiv open={open} onClick={openCategory}><FaFilter /><p>Filter</p></FilterDiv></CategoryDropFilter>
                            <PageDiv onClick={() => setShowPage((e) => !e)}><p>Category</p>{showPage ? <MdKeyboardArrowUp style={{ fontSize: "20px" }} /> : <MdKeyboardArrowDown style={{ fontSize: "20px" }} />}</PageDiv>
                            {showPage && <PageDivBody>
                                {arrChecks.map((e, i) => {
                                    return (
                                        <CheckboxDiv>
                                            <label>
                                                <input type="checkbox" style={{ width: "18px", height: "18px" }} /> <p style={{ fontSize: "14px", fontFamily: "montserrat-regular" }}>{e.name}</p>
                                            </label>
                                        </CheckboxDiv>)
                                })}
                            </PageDivBody>}

                            <PageDiv onClick={() => setShowPrice((e) => !e)}>Price{showPrice ? <MdKeyboardArrowUp style={{ fontSize: "20px" }} /> : <MdKeyboardArrowDown style={{ fontSize: "20px" }} />}</PageDiv>
                            {showPrice && <PageDivBody>
                                <FilterPriceDiv>
                                    <FilterPriceInput
                                        placeholder="0"
                                        value={range[0]}
                                        onChange={(e) => handleInputChange(e, 'min')}
                                    />
                                    -
                                    <FilterPriceInput
                                        placeholder="10.000.000"
                                        value={range[1]}
                                        onChange={(e) => handleInputChange(e, 'max')}
                                    />
                                </FilterPriceDiv>
                                <RangeDiv>
                                    <label>Цена</label>
                                    <SliderStyle
                                        range
                                        min={0}
                                        max={2000000}
                                        step={1}
                                        value={range}
                                        onChange={handleRangeChange}
                                    />

                                </RangeDiv>
                            </PageDivBody>} <PageDiv onClick={() => setShowColor((e) => !e)}>Color{showColor ? <MdKeyboardArrowUp style={{ fontSize: "20px" }} /> : <MdKeyboardArrowDown style={{ fontSize: "20px" }} />}</PageDiv>
                            {showColor && <PageDivBody>
                                <div style={{ background: "red", width: "150px", height: "200px" }}></div>
                            </PageDivBody>} <PageDiv onClick={() => setShowMemory((e) => !e)}>Memory{showMemory ? <MdKeyboardArrowUp style={{ fontSize: "20px" }} /> : <MdKeyboardArrowDown style={{ fontSize: "20px" }} />}</PageDiv>
                            {showMemory && <PageDivBody>
                                <div style={{ background: "red", width: "150px", height: "200px" }}></div>
                            </PageDivBody>}
                        </ItemsCategory>
                        <ProductDivPage range={range} model={"apple"}/>
                    </ItemsDiv>
                </PhoneDivInner>
            </PhonesDiv>
            {bgcDivOpen && <BgcDiv onClick={closeFucntion} />}
        </>
    )
}