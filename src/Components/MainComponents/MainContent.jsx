import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const MainContent = () => {
    const [categoryData, setCategoryData] = useState([]);
    const {category_id} = useParams();
    const {data} = useLoaderData();
    // setCategoryData(data.data);

    useEffect(() => {
        setCategoryData([]);
        const fetchData = async() => {
            const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
            const data = await res.json();
            setCategoryData(data.data);
        }
        fetchData();
        // setCategoryData([]);
        // setCategoryData(data);
    }, [category_id])

    return (
        <div>
            {
                categoryData.length > 0 ? categoryData.map(category => <NewsCard key={category.category_id} news={category}></NewsCard>) : <h2 className='text-3xl font-bold text-red-500 mt-3'>No Data Found</h2>
                // data.data.map(category => <h2>Hey</h2> )
            }
        </div>
    );
};

export default MainContent;