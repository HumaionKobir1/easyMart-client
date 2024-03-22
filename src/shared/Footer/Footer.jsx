const Footer = () => {
    return (
        <div className=' bg-[#77153db2] pb-2'>
            <div className='md:w-5/6 mx-auto grid md:grid-cols-3 md:py-20 py-5 px-3'>
                <div className='md:border-e-2 text-white mb-3 md:mb-0'>
                    <h3 className='text-3xl mb-5'>Subscribe</h3>
                    <p className='mb-4'>Register and get notified about all the news & updates <br /> before it gets too late.</p>
                    <input className='rounded p-3' type="text" placeholder='Enter Your Email' /> <button className=' bg-[#470d25b2] hover:bg-rose-900 rounded-lg px-2 py-3 text-white hover:text-white border-none'>Sign up</button>
                </div>
                <div className='md:border-e-2 text-white md:px-20 mb-3 md:mb-0'>
                    <h3 className='text-3xl mb-5'>Explore</h3>
                    <p>Submit a Recipe</p>
                    <p className='my-2'>Our Company</p>
                    <p className='my-2'>Latest News</p>
                    <p>Contact</p>

                </div>
                <div className=' text-white md:px-20'>
                    <h3 className='text-3xl mb-5'>Contact</h3>
                    <p className='my-2'>787 Mark View Street, New Town, California</p>
                    <p>easymart@.com</p>
                    <p className='my-2'>666 888 0000</p>
                </div>
            </div>
            <p className='text-center text-white p-2 -mt-5'><small>All rights reserved EASYMART eCommerce company</small></p>
        </div>
    );
};

export default Footer;