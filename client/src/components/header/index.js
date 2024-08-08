import React from "react";
import i18n, { use } from "i18next";
import { useTranslation } from "react-i18next";
import {
    HeaderDiv,
    HeaderTop,
    HeaderTopInner,
    HeaderTopInfo,
    HeaderDivInner,
    HeaderTopLenguadeDiv,
    Headerlenguage,
    HeaderTopLenguadeDiv2,
    HeaderLogo,
    HeaderMenuDiv,
    MenuLenguage,
    SearchDiv,
    SearchDivInp,
    SearchDivIcon,
    HeaderMenuIcon,
    MeduIconDrop,
    MenudIconDropItems,
    HeaderLogoDiv,
    OpenDiv,
    Acsessories,
    AcsessoriesItems,
    DivDrop,
    DivDrop2,
    DropSearchDiv,
    SearchDropDiv,
    SearchDropDivInp,
    SearchDivIconDrop,
    BgcDiv,
    BgcDivDrop


} from "./style"
import { FaSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiScales } from "react-icons/pi";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
// import { LoginPage } from "../../containers/loginPage";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { SearchProducts } from "../searchProduct";
import { SearchProductsDrop } from "../searchProductDrop";
import { RiAdminLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";




export const Header = () => {
    const nav = useNavigate()
    const [value, setValue] = React.useState({})
    React.useEffect(() => {
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
    const [items, setItems] = useState([
        {
            name: "PHONES",
            items: [
                {
                    name: "Apple",
                    path: "/phones/apple"
                },
                {
                    name: "Xiaomi",
                    path: "/phones/xiaomi"
                },
                {
                    name: "Samsoung",
                    path: "/phones/samsoung"
                },
                {
                    name: "Realme",
                    path: "Realme"
                },
                {
                    name: "Oneplus",
                    path: "Oneplus"
                },
                {
                    name: "Sony",
                    path: "Sony"
                },
            ], isOpen: false,
            to: "/phones"
        },
        { name: "TABLETS", items: ["Items", "Items", "Items", "Items", "Items", "heloo"], isOpen: false },
        { name: "WATCHES", items: ["Items", "Items", "Items", "Items", "Items"], isOpen: false },
        { name: "EQUIPMENTS", items: ["Items", "Items", "Items", "Items", "Items"], isOpen: false },
        { name: "ACCESSORIES", items: ["Items", "Items", "Items", "Items", "Items"], isOpen: false },
        { name: "COMPUTERS", items: ["Items", "Items", "Items", "Items", "Items"], isOpen: false },
        { name: "GAMING STATION", items: ["bhbhh", "Items", "Items", "Items", "Items"], isOpen: false },
    ])



    const [isCont, setIsCont] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [adminOpen, setAdminOpen] = useState(false)
    const adminKa = () => {
        setAdminOpen(false)
    }
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("lang") || "ru"
    )
    const { t } = useTranslation()
    const [bgcDivOpen, setBgcDivOpen] = useState(false)
    const languages = [
        { code: "am", name: "AM", namePage: "Armenia" },
        { code: "en", name: "EN", namePage: "English" },
        { code: "ru", name: "RU", namePage: "Russia" }
    ]
    const handleSelectLang = (code, src) => {
        setSelectedLanguage(code);
        localStorage.setItem("lang", code);
        i18n.changeLanguage(code)
    }
    const handleOver = (index) => {
        setBgcDivOpen(true)
        setItems((prev) => {
            const changed = prev.slice();
            changed[index].isOpen = true;
            return changed
        });
    };
    const handleLeave = (index) => {
        setBgcDivOpen(false)
        setItems((prev) => {
            const changed = prev.slice();
            changed[index].isOpen = false;
            return changed
        })
    };

    const logOut = ()=>{
        localStorage.removeItem("token")
        nav("/")
    }

    const handleMouseOver = () => {
        setIsCont(false)

    }
    const handleMouseLeave = () => {
        setIsCont(true)

    }

    const showNextTexts = () => {
        if (startIndex + 4 < items.length) {
            setStartIndex((e) => {
                return e + 4
            });
        }
    };

    const showPreviousTexts = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
        }
    };


    const [isOpenned, setOpenned] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    const [dropLangAm, setDroplangAm] = useState(true)
    const [dropLangEn, setDroplangEn] = useState(false)
    const [dropLangRu, setDroplangRu] = useState(false)
    const [searchDrop, setSearchDrop] = useState(false)

    const dropSearch = () => {
        setSearchDrop((e) => !e)
    }
    const dropSearchClose = () => {
        setSearchDrop(false)
        setBgcDivOpen(false)
    }

    const changeAm = () => {
        setDroplangAm(true)
        setDroplangEn(false)
        setDroplangRu(false)
        setSelectedLanguage("am");
        localStorage.setItem("lang", "am");
        i18n.changeLanguage("am")
    }
    const changeEn = () => {
        setDroplangAm(false)
        setDroplangEn(true)
        setDroplangRu(false)
        setSelectedLanguage("en");
        localStorage.setItem("lang", "en");
        i18n.changeLanguage("en")
    }
    const changeRu = () => {
        setDroplangAm(false)
        setDroplangEn(false)
        setDroplangRu(true)
        setSelectedLanguage("ru");
        localStorage.setItem("lang", "ru");
        i18n.changeLanguage("ru")
    }

    const handleOpenned = () => {
        setOpenned((e) => !e)
    }
    const handleLeaved = () => {
        setOpenned(false)
    }
    return (
        <>
            <HeaderDiv>

                <HeaderTop>

                    <HeaderTopInner>

                        <HeaderTopInfo>
                            <p >{t("ABOUT US")}</p>
                            <p>{t("CONTACT US")}</p>
                            <p>{t("FAQ")}</p>
                            <p>{t("GENERAL TERMS")}</p>
                            <p>{t("SERVICE")}</p>
                            <p>{t("CREDIT CONDITIONS")}</p>
                            <p>{t("BLOG")}</p>
                        </HeaderTopInfo>
                        <Headerlenguage>
                            <HeaderTopLenguadeDiv onClick={() => setOpenLang((e) => !e)}><TbWorld />English  {openLang ? <RiArrowDropUpFill style={{ fontSize: "25px" }} /> : <RiArrowDropDownFill style={{ fontSize: "25px" }} />}</HeaderTopLenguadeDiv>
                            <OpenDiv openLang={openLang}>
                                {languages.map((e, i) => {
                                    return (
                                        <HeaderTopLenguadeDiv2 className="headerLenguage" onClick={() => handleSelectLang(e.code)}>{e.namePage} </HeaderTopLenguadeDiv2>
                                    )
                                })}
                            </OpenDiv>

                        </Headerlenguage>
                    </HeaderTopInner>
                </HeaderTop>
                <HeaderLogoDiv to="/accessories">

                    <HeaderLogo to="/">
                    </HeaderLogo>

                </HeaderLogoDiv>

                <DropSearchDiv open={searchDrop}>
                    {<RxCross1 style={{ fontSize: "30px" }} onClick={dropSearchClose} />
                    }
                    <SearchProductsDrop />
                </DropSearchDiv>
                <HeaderDivInner>

                    {/* <SearchDivInp placeholder="enter product name" />
                        <SearchDivIconDrop>

                            <FaSearch className="searchIcon" />
                        </SearchDivIconDrop> */}
                    <SearchProducts />



                    <HeaderMenuDiv>
                        <GoSearch className="serachIconMedia" onClick={dropSearch} />

                        <Link to={localStorage.getItem("token") ? "/profile" : "/login"}><IoPersonOutline className="heartIcon" /></Link>
                        <Link to={"/profile"} state={"like"}><AiOutlineHeart className="heartIcon" /></Link>
                        <Link to="/basket"><MdOutlineShoppingCart className="heartIcon" /></Link>
                        {value?.email  == "vaxarshak.avetisyan.00@gmail.com" && <Link to="/adminpage" >{localStorage.getItem("token") && <RiAdminLine className="heartIcon" />}</Link>}
                        <Link to="/compare"><PiScales className="heartIcon" /></Link>
                        {/* <PiScales className="heartIcon" /> */}


                        <HeaderMenuIcon  >

                            {isOpenned ? <RxCross1 style={{ fontSize: "30px" }} onClick={handleOpenned} /> : <RiMenu3Line style={{ fontSize: "30px" }} onClick={handleOpenned} />}

                        </HeaderMenuIcon>
                    </HeaderMenuDiv>
                    {localStorage.getItem("token") && <MdLogout onClick={logOut} className="logOut" />}

                </HeaderDivInner>
            </HeaderDiv>

            <Acsessories>
                <div onClick={showPreviousTexts}><FaAngleLeft className="arrow prev" /></div>
                {items?.map((e, i) => {
                    if (i >= startIndex && i <= startIndex + 4) {
                        return (
                            <>
                                <AcsessoriesItems
                                    onMouseEnter={() => handleOver(i)}
                                    onMouseLeave={() => handleLeave(i)}
                                    to={e.to}
                                >
                                    {e.name}
                                    <DivDrop isOpen={e.isOpen} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                                        {e.isOpen && e.items.map((element, index) => {
                                            return (
                                                <DivDrop2 to={element.path}>{element.name}</DivDrop2>
                                            )
                                        })}
                                    </DivDrop>
                                </AcsessoriesItems>
                            </>
                        )
                    }

                })}
                <div onClick={showNextTexts} style={{ color: "white" }}><FaChevronRight className="arrow next" /></div>
            </Acsessories>
            <MeduIconDrop isOpenned={isOpenned}>
                <MenudIconDropItems>
                    <p> ABOUT US</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p> CONTACT US</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p> FAQ</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p> GENERAL TERMS</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p> SERVICE</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p> CREDIT CONDITIONS</p>
                </MenudIconDropItems>
                <MenudIconDropItems>
                    <p>BLOG</p>
                </MenudIconDropItems>
                <MenuLenguage>
                    <TbWorld /><p onClick={changeAm} style={{ borderBottom: dropLangAm ? "1px solid #666666" : "none" }}>Armenian</p>
                    <p onClick={changeEn} style={{ borderBottom: dropLangEn ? "1px solid #666666" : "none" }}>English</p>
                    <p onClick={changeRu} style={{ borderBottom: dropLangRu ? "1px solid #666666" : "none" }}>Russian</p>
                </MenuLenguage>
            </MeduIconDrop>

            {bgcDivOpen && <BgcDiv />}
            {searchDrop && <BgcDivDrop />}

        </>
    )
}