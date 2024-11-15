import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const MainContent = () => {
    const [NewsesData, setNewsesData] = useState([]);
    const {category_id} = useParams();
    const {data:newses} = useLoaderData();
    // setNewsesData(data.data);

    useEffect(() => {
        // setNewsesData([]);
        // const fetchData = async() => {
        //     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        //     const data = await res.json();
        //     setNewsesData(data.data);
        // }
        // fetchData();
        setNewsesData([]);
        setNewsesData(newses);
    }, [newses])

    return (
        <div>
            {
                NewsesData.length > 0 ? NewsesData.map(news => <NewsCard key={news._id} news={news}></NewsCard>) : <h2 className='text-3xl font-bold text-red-500 mt-3'>No Data Found</h2>
                // data.data.map(category => <h2>Hey</h2> )
            }
        </div>
    );
};

export default MainContent;