import React from 'react';
import Header from './Header';
import RightNavbar from './MainComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const NewsDetails = () => {
    const { data } = useLoaderData();
    const { author, image_url, details, total_view, rating, title, _id } = data[0];
    console.log(data);
    // const { name, published_date, img } = author;
    return (
        <div className='w-[80%] mx-auto'>
            <header>
                <Header></Header>
            </header>
            <div className='md:grid grid-cols-12 gap-10'>
                <div className='col-span-9'>
                    <div className="p-4 bg-white shadow-md rounded-lg mx-auto border">
                        <div className="relative">
                            <img className='w-full h-full object-cover' src={image_url} alt="" />
                        </div>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">
                            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                        </h2>

                        <p className="mt-2 text-sm text-gray-600">
                            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, US military, Military, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – US President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence.
                        </p>

                        <Link to="/" className="mt-4 inline-block bg-[#D72050] text-white px-4 py-2 text-center font-semibold hover:bg-[#ff1b58]">
                        <FaArrowAltCircleLeft className='inline-block mr-2' /> <span>All news in this category</span>
                        </Link>
                    </div>
                </div>
                <section className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </section>
            </div>
        </div>
    );
};

export default NewsDetails;