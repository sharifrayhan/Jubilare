import Banner from "../components/Banner";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;