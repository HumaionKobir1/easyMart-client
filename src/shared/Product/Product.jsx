import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const Product = ({productList}) => {
    useEffect(() => {
        Aos.init();
    }, [])
    const{product, _id, price_regular, price_discounted, review, images} = productList;
    return(
        <div className=" overflow-hidden rounded-md border p-2" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="flex gap-4 bg-[#77153db2] p-4">
                <div className="w-[70%]">
                    <div className="main-img">
                        <img className="w-[100%] rounded-lg" src={images[0]} alt="" />
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="img1 w-full">
                        <img className="rounded-lg w-[100%]" src={images[1]} alt="" />
                    </div>
                    <div className="img2 w-full mt-4">
                        <img className="rounded-lg w-[100%]" src={images[0]} alt="" />
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-semibold mt-3">{product}</h1>
            <div className="flex justify-between items-center">
                <div className="content-left">
                    <div className="flex mt-2">
                        <Rating
                            placeholderRating={review}
                            readonly
                            emptySymbol={<FaRegStar className="text-black"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                            <p className="text-white ml-1">{review}</p>
                    </div>
                </div>
                
            </div>
            <div className="flex gap-3 text-black">
                    <del className="text-3xl">{price_discounted}$</del>
                    <h4 className="text-gray-500 text-3xl">{price_regular}$</h4>
                </div>
            <ul className="mt-5 text-black">
                <li>Nice clothes</li>
                <li>Beautiful color</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
            <div className="flex justify-between mt-5">
                <Link to={`/view-details/${_id}`}
                    className='font-bold rounded-sm w-[48%] border  bg-white transition hover:text-white hover:bg-[#77153db2] px-4 py-2 text-center text-black'
                
                    >
                    Details
                </Link>
                <button
                    className='font-bold rounded-sm w-[48%] hover:bg-white hover:text-black  bg-[#77153db2] px-4 py-2 transition border text-white'
                
                    >
                    Buy now
                </button>
            </div>
        </div>
    )
}
export default Product;