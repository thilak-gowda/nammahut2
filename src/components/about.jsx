import React from 'react';
import './homepage.css';
import Corosil from './corosil';
import ProductStructure from './product';
import ProductDetail from './productDetails';
import Heading from './heading';
import './homepage.css';
import Footer from './footer';




function About() {
    return (
        <>
            <div className='container'>

                <div className="bannerCorosil">
                    <Corosil

                        CorosilImg1='https://www.oorla.in/cdn/shop/files/Frame_12588.jpg'
                        CorosilImg2='https://www.oorla.in/cdn/shop/files/Frame_12586.jpg'
                        CorosilImg3='https://www.oorla.in/cdn/shop/files/Frame_12588.jpg'
                    />
                </div>
                <section>
                    <Heading

                        Heading2='About Namma Hut'

                    />
                    <div className="about">
                        <div className="row">
                            <div className="col-7 text-center abtContent">
                                At Namma Hut, our mission is rooted in celebrating the exquisite craftsmanship and rich heritage of locally crafted sweets and snacks. We passionately source these traditional delicacies, handcrafted by skilled artisans who pour their expertise and heart into every creation.

                                Join us in savouring these treasures and appreciating the artistry behind every delicious morsel. Experience the magic of tradition and craftsmanship with Namma Hut.
                            </div>
                            <div className="col-5">
                                <img src='https://static.wixstatic.com/media/b488b4_0b9f612269114877b77a3a64cd834c8e~mv2.png/v1/fill/w_561,h_777,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b488b4_0b9f612269114877b77a3a64cd834c8e~mv2.png' alt="" className='abtImg' />
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            < Footer />


        </>
    )
}

export default About;