import swimming from '../assets/swimming.png'
import classRoom from '../assets/class.png'
import playGround from '../assets/playground.png'

const RightSuggestNews = () => {
    return (
        <div className='py-6 bg-[#F3F3F3] px-4 space-y-5'>
            <h2 className="text-[#403F3F] font-semibold text-[1.1rem] mb-3">Q-Zone</h2>
            <div>
                <img src={swimming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default RightSuggestNews;