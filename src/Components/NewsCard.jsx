import React, { useState } from 'react';
import bookmarks from '../assets/bookmarks.png';
import shareIcon from '../assets/shareicon.png';
import view from '../assets/view.png'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { author, image_url, details, total_view, rating, title, _id } = news;
    const { name, published_date, img } = author;
    const [readMoreDetails, setReadMoreDetails] = useState(false);


    return (
        <div className='border-2 rounded-xl pb-3 mb-5 mt-4'>
            <div className='flex justify-between items-center px-4 py-3 bg-[#F3F3F3] rounded-tl-xl rounded-tr-xl mb-3'>
                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-12 rounded-full' src={img} alt={`${name} photo`} />
                    <div>
                        <h3 className='text-[#403F3F] font-semibold'>{name}</h3>
                        <p className='text-[14px] text-[#706F6F] font-normal'>{published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-5 h-5' src={bookmarks} alt="" />
                    <img className='w-5 h-5' src={shareIcon} alt="" />
                </div>
            </div>
            <div className='px-4'>
                <h2 className='text-[#403F3F] font-bold text-xl mb-5'>{title}</h2>
                <div className='mb-8'>
                    <Link to={`/news/${_id}`}>
                        <img className='w-full h-full object-cover' src={image_url} alt="" />
                    </Link>
                </div>
                <p className='text-[#706F6F] font-medium'>{readMoreDetails ? details : `${details.slice(0, 150)}....`} <button className='text-[#F75B5F] font-bold' onClick={() => setReadMoreDetails(!readMoreDetails)}>{readMoreDetails ? 'Show Less' : 'Show More'}</button></p>
            </div>
            <div className="divider"></div>
            <div className='flex justify-between items-center px-4'>
                <div className='flex items-center gap-3'>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FF8C47]" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FF8C47]" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FF8C47]" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FF8C47]" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FF8C47]" />
                    </div>
                    <div>
                        <p className='font-medium text-[#706F6F]'>{rating.number}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaEye />
                    <p className='text-[#706F6F]'>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;