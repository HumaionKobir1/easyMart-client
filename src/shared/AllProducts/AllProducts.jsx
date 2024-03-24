import { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {
    const [productCategories, setProductCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(' ')
    useEffect(() => {
        fetch(`http://localhost:5000/products/${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setProductCategories(data);
            console.log(data);
        })
    }, [activeTab])
    console.log(productCategories);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return(
        <section className="all-products-section mt-10">
            <div className="container mx-auto">
                <h4 className="text-3xl text-rose-600 text-center">Exclusive Producs</h4>
                <h1 className="text-5xl font-bold mt-3 text-center">SPECIAL PRODUCTS</h1>
                <div className="ulderline w-52 h-2 bg-rose-600 mx-auto mt-3"></div>
            </div>
            <div className="product-category">
                <div className="tabs mx-auto w-1/3 flex justify-center mt-7 items-center gap-9">
                <div
                onClick={() => handleTabClick("Featured")}
                className={`tab active:text-rose-600 hover:text-rose-600 text-xl cursor-pointer font-semibold text-black tab2 w-32 h-12 ${
                    activeTab == "Featured" ? "text-rose-600" : ""
                }`}
                >
                FEATURED
                </div>
                <div
                onClick={() => handleTabClick("Nearrival")}
                className={`tab active:text-rose-600 hover:text-rose-600 text-xl cursor-pointer font-semibold text-black  tab2 w-32 h-12 ${
                    activeTab == "Nearrival" ? "text-rose-600" : ""
                }`}
                >
                NEARRIVAL
                </div>

                <div
                onClick={() => handleTabClick("Special")}
                className={`tab hover:text-rose-600 cursor-pointer text-xl font-semibold text-black tab2 w-32 h-12 ${
                    activeTab == "Special" ? "text-rose-600" : ""
                }`}
                >
                SPECIAL
                </div>
            </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-8 justify-center items-center w-full md:w-5/6 mx-auto px-3">
                {
                    productCategories.map(productCategory => <Product
                        key={productCategory.id}
                        productList = {productCategory}
                    ></Product>)
                }
            </div>
        </section>
    )
}
export default AllProducts;
