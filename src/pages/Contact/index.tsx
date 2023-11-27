import { HeaderComponents } from "../../components/Header"
import { InsideMiddleBoxUpperBox, StyledContactContainer, StyledMiddleBox, StyledUpperBox } from "./style"
import logo from "../../assets/logo-removebg-preview (1)_cropped.png"
import { IoMdHelp } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";

import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { FooterComponent } from "../../components/Footer";







export const ContactPage = ():JSX.Element => {
    return (
    <StyledContactContainer>
        <HeaderComponents />
        <StyledUpperBox>
            <div className="image_container">
                <img src={logo} alt="" />
            </div>
            <div className="loremIpsum_container">
                <p>Contrary to popular belief, Lorem Ipusm is not random.</p>
            </div>
        </StyledUpperBox>
        <InsideMiddleBoxUpperBox>
            <div className="boxes_wrapper">
        <div className="help_support_box">
            <IoMdHelp style={{color: "black", fontSize: "50px"}}/>
            <p style={{color: "black"}}>
                Lorem Ipsum has been the
                industrys standard dummy text
                ever since the 1500s, when a galley.
            </p>
        </div>
        <div className="general_info_box">
        <IoIosInformationCircleOutline style={{color: "black", fontSize: "50px"}} />
            <p style={{color: "black"}}>
                Lorem Ipsum has been the
                industrys standard dummy text
                ever since the 1500s, when a galley.
            </p>
            </div>
        </div>
        <div className="social_media_wrapper">
            <div className="icon_wrapper">
              <TiSocialLinkedin style={{ fontSize: "50px"}}/>
            </div>
            <div className="icon_wrapper">
              <FaInstagram style={{ fontSize: "50px", alignSelf: "center"}}/>
            </div>
            <div className="icon_wrapper">
              <TiSocialFacebook style={{ fontSize: "50px"}}/>
            </div>
            <div className="icon_wrapper">
               <SlSocialYoutube style={{ fontSize: "50px"}}/>
            </div>
        </div>
        </InsideMiddleBoxUpperBox>
        <StyledMiddleBox>
            <div className="middle_box_wrapper">
                <h1>Encontre a gente</h1>
                <div className="inner_middle_box_wrapper">
                    <div>
                        <h2>Email</h2>
                        <p>talenthub@mail.com</p>
                    </div>
                    <div>
                        <h2>Endereço</h2>
                        <p>1935 Archwood Avenue, Decker, Wyoming - 59025</p>
                    </div>
                 </div>
            </div>
        </StyledMiddleBox>
        <FooterComponent/>
    </StyledContactContainer>
            )
}