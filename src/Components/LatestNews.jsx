import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className=" p-3 bg-[#F3F3F3] flex justify-center items-center gap-1">
            <h3 className="bg-[#D72050] px-4 py-2 text-white font-medium">Latest</h3>
            <Marquee pauseOnHover={true} className="text-[#403F3F] font-semibold text-[1rem] space-x-10">
                <Link to='/news'>#Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, magnam.</Link>
                <Link to='/news'>#Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, magnam.</Link>
                <Link to='/news'>#Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, magnam.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;