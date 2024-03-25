import { Link } from "react-router-dom";

const NavbarItems = () => {
    return (
        <div className='border-[1px] md:p-2 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='flex flex-row items-center justify-between'>
            
            <Link
              to='/'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black text-white transition font-semibold'
            >
              Home
            </Link>
             
             <Link
              to='/all-product-page'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100  hover:text-black text-white transition font-semibold'
            >
              AllProducts
            </Link>
            
            <Link
              to='/blog'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black text-white transition font-semibold'
            >
              blog
            </Link>
            <Link
              to='/contact'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black text-white transition font-semibold'
            >
              Contact
            </Link>
        </div>
        </div>
    );
};

export default NavbarItems;