import AboutUsBanner from "../components/AboutUsBanner";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUsBanner></AboutUsBanner>
            <Services></Services>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;