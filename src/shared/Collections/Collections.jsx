import { Link } from 'react-router-dom';
import './Collections.css';
const Collections = () => {
    return(
        <section className='container mx-auto mt-16'>
            <div className="grid grid-cols-2 gap-6">
                <Link to='/' className="man_collection py-32 px-20">
                    <div className="content float-end">
                        <h4 className='text-xl font-semibold text-rose-500'>10%  off</h4>
                        <h1 className='text-5xl mt-3 text-gray-900 font-bold'>MAN</h1>
                    </div>
                </Link>
                <Link to='/' className="women_collection py-32 px-20">
                    <div className="content float-right">
                        <h4 className='text-xl font-semibold text-rose-500'>10%  off</h4>
                        <h1 className='text-5xl mt-3 text-gray-900 font-bold'>WOMEN</h1>
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default Collections;