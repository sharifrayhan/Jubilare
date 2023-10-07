import AboutUsBanner from "../components/AboutUsBanner";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Services from "../components/Services";


const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUsBanner></AboutUsBanner>
            <Services></Services>
        </div>
    );
};

export default Home;