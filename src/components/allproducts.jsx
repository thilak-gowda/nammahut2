import React from 'react';
import './homepage.css';

import ProductStructure from './product';
import Footer from './footer';

function AllProducts() {
    return (
        <>
            <div className='container'>
                <h1>This is All Products Page</h1>

                <div className="row">
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>

                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                    <div className="col-lg-3">
                        <ProductStructure />
                    </div>
                </div>
              


            </div>

<Footer />

        </>
    )
}

     AllProducts;