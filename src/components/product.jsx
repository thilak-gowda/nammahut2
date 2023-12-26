
import './product.css';
import { IoIosCart } from "react-icons/io";




function ProductStructure() {

    return (

        <div>
            <div className="crd mb-lg-4">
                <img src="https://www.oorla.in/cdn/shop/files/honey-listing-image.-4jpg.jpg?v=1696496909&width=700" className="prodImg" alt="" />

                <div className="prodDet">
                    <p className="productName">
                        Kombu Wild Honey
                    </p>


                    <div className="pricing">
                        <p className="ourPrice">
                            $ 200
                        </p>
                        <p className="mrp">
                            $ 500
                        </p>
                        <p className="discount">
                            (60 % off)
                        </p>
                    </div>

                    {/* <div className="product-container">
                    <button id="decrease-btn">-</button>
                    <span id="quantity">1</span>
                    <button id="increase-btn">+</button>
                </div> */}

                    {/* <a href="" className='addToCart'>Add to cart <IoIosCart className='cartIcon' /></a> */}

                </div>

            </div>

           
        </div>
    )
}




export default ProductStructure;