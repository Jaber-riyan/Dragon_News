import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div className="poppins-font">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto mt-7">
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default HomeLayout;