import React, { useState } from "react";
import Visa from "../../assets/image/visa.png"
import Maestro from "../../assets/image/maestro.png"
import Arca from "../../assets/image/arca.png"
import Master from "../../assets/image/master.png"
import {
    FooterPage,
    FooterItems,
    FooterAccess,
    FooterMedia,
    FooterItemsTitles,
    FooterItemsP,
    FooterMediaTel,
    FooterSoc,
    FooterSoc2,
    FooterWorkTimes,
    FooterEmail,
    FooterInputDiv,
    FooterEmailAddres,
    FooterPayments,
    PaymentsImg,
    FooterPayments2,
    Pay,
    FooterBottom,
    FooterAbout,
    FooterStudio,


} from "./style"
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SiVisa } from "react-icons/si";



export const Footer = () => {
    const [active, setActive] = useState(true)

    return (
        <>
            <FooterPage>
                <FooterItems>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>PHONES</h3>

                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>TABLETS</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>NOTEBOOKS</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>WATCHES</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>EQUIPMENTS</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>ACCESSORIES</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>GAMING </h3>
                            <h3> STATION</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>
                    <FooterAccess>
                        <FooterItemsTitles>
                            <h3>COMPUTERS</h3>
                        </FooterItemsTitles>
                        <FooterItemsP>Samsung</FooterItemsP>
                        <FooterItemsP>Apple</FooterItemsP>
                        <FooterItemsP>Xiaomi</FooterItemsP>
                        <FooterItemsP>Realme</FooterItemsP>
                        <FooterItemsP>OnePlus</FooterItemsP>
                    </FooterAccess>

                </FooterItems>
                <FooterMedia>
                    <FooterMediaTel>
                        <h3>(+374) 94 804 343</h3>
                        <p>The addresses of the branches
                            Yerevan,Sayat-Nova 22
                            Yerevan,Kievyan 18</p>
                    </FooterMediaTel>
                    <FooterSoc>
                        <ImFacebook2 />
                        <FaSquareInstagram />
                        <FaTiktok />
                        <FaYoutubeSquare />
                        <FaTelegramPlane />
                    </FooterSoc>
                    <FooterWorkTimes>
                        <h3>Work schedule</h3>
                        <p>Mon-Sat: 10:00-20:00</p>
                        <p>Sunday:  11:00-19:00</p>
                    </FooterWorkTimes>
                    <FooterEmail>
                        <h3>Subscribe for newsletter</h3>
                        <FooterInputDiv>
                            <FooterEmailAddres placeholder="Enter your email address" />
                            <HiOutlineArrowNarrowRight className="icon" />
                        </FooterInputDiv>
                    </FooterEmail>
                    <FooterPayments onChange={setActive}  >
                        <PaymentsImg><img width="40px" height="30px" src={Visa} /> </PaymentsImg>
                        <PaymentsImg><img width="40px" height="30px" src={Master} /> </PaymentsImg>
                        <PaymentsImg><img width="40px" height="30px" src={Maestro} /> </PaymentsImg>
                        <PaymentsImg><img width="40px" height="30px" src={Arca} /> </PaymentsImg>
                    </FooterPayments>
                </FooterMedia>
            </FooterPage>
            <FooterBottom >
                <FooterSoc2>
                    <ImFacebook2 />
                    <FaSquareInstagram />
                    <FaTiktok />
                    <FaYoutubeSquare />
                    <FaTelegramPlane />
                </FooterSoc2>

                <FooterPayments2>
                    <PaymentsImg><img width="40px" height="30px" src={Visa} /> </PaymentsImg>
                    <PaymentsImg><img width="40px" height="30px" src={Master} /> </PaymentsImg>
                    <PaymentsImg><img width="40px" height="30px" src={Maestro} /> </PaymentsImg>
                    <PaymentsImg><img width="40px" height="30px" src={Arca} /> </PaymentsImg>
                </FooterPayments2>
                <FooterAbout>
                    <p>ABOUT US</p>
                    <p>CONTACT US</p>
                    <p>FAQ</p>
                    <p>CREDIT CONDITIONS</p>
                </FooterAbout>
                <FooterStudio>
                    <p>Copyright 2024 © Yerevan Mobile</p>
                    <p>Design and Development Studio One</p>
                </FooterStudio>
            </FooterBottom>
        </>

    )
}