import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'

function Footer() {
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <img src="https://static.wixstatic.com/media/b488b4_f22f856e98624b82803e5ff619e7e422~mv2.png/v1/fill/w_284,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b488b4_f22f856e98624b82803e5ff619e7e422~mv2.png" alt="" className="footerLogo" />
                    <div className="row py-3">

                        <div className="col-lg-4">


                            <div className="address">
                                <p className="addressHeading">
                                    Address
                                </p>
                                <p className="address">
                                    NammaHut
                                    Bengaluru, KA
                                </p>

                                <p className="addressHeading">
                                    Follow Us On
                                </p>

                                <p className="address flx">
                                    <a href="" className="Mobilenumber">
                                        <FaWhatsapp />
                                    </a>
                                    <a href="" className="Mobilenumber ps-5">
                                        <FaInstagram />
                                    </a>
                                    <a href="" className="Mobilenumber ps-5">
                                        <FaFacebookF />
                                    </a>
                                    <a href="" className="Mobilenumber ps-5">
                                        <FaXTwitter />
                                    </a>
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-4">


                            <div className="address">
                                <p className="addressHeading">
                                    Support
                                </p>
                                <p className="address">
                                    <a href="" className="Mobilenumber">
                                        <IoMdCall className="callBtn" />
                                        <span >7650937264</span>
                                    </a>
                                </p>

                                <p className="address">
                                    <a href="" className="Mobilenumber">
                                        <IoIosMail className="callBtn" />
                                        <span >nammahut@gmail.com</span>
                                    </a>
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-4">


                            <div className="address">
                                <p className="addressHeading">
                                    Quick Links
                                </p>
                                <p className="address">

                                    <a href="" className="Mobilenumber">
                                        Home
                                    </a>
                                </p>
                                <p className="address">
                                    <a href="" className="Mobilenumber">
                                        About
                                    </a>
                                </p>
                                <p className="address">
                                    <a href="" className="Mobilenumber">
                                        All Products
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;