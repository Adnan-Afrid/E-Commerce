import Card from "../Components/Card/ui/Card";
import Categories from "../Components/Categories/ui/Categories";
import Hero from "../Components/Home/ui/Hero";

const Home = () => {
    return ( 
        <div className="home">
        <Hero/>
        <Categories/>
        <Card/>
        </div>
     );
}
 
export default Home;
