import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2021/07/17/20/02/road-6473967_1280.jpg"
        title="Enjoy Your Life"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}
export default Home;