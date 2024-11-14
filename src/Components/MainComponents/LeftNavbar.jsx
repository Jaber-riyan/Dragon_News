import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
            const data = await res.json();
            setCategories(data.data.news_category);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-[1.1rem] mb-4">All Category({categories.length})</h2>
            <div className="flex flex-col gap-3">
                {
                    categories.map(category => <NavLink key={category.category_id} className={({ isActive }) =>
                        isActive ? "text-[#706F6F] font-bold px-10 py-4 bg-[#E7E7E7] rounded-md" : "text-[#706F6F] font-semibold px-12 py-3 bg-[#E7E7E7]"}>{category.category_name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default LeftNavbar;