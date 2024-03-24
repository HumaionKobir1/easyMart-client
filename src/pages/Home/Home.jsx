import AllProducts from "../../shared/AllProducts/AllProducts";
import Banner from "../../shared/Banner/Banner";
import Collections from "../../shared/Collections/Collections";
import Curved from "../../shared/Curved/Curved";
import Offer from "../../shared/Offer/Offer";

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <AllProducts></AllProducts>
            <Offer></Offer>
            <Curved></Curved>
        </div>
    )
}
export default Home;