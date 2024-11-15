import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/MainComponents/LeftNavbar";
import MainContent from "../Components/MainComponents/MainContent";
import RightNavbar from "../Components/MainComponents/RightNavbar";
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
            <main className="w-10/12 mx-auto mt-12 mb-7 md:grid grid-cols-12 gap-3">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <h2 className="text-[#403F3F] font-semibold text-[1.1rem]">Dragon News Home</h2>
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;