import Advertisement from '../Advertisement';
import FindOnSocialMedia from '../FindOnSocialMedia';
import RightSuggestNews from '../RightSuggestNews';
import SocialLogin from '../SocialLogin';

const RightNavbar = () => {
    return (
        <div className='space-y-8'>
            <div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <FindOnSocialMedia></FindOnSocialMedia>
            </div>
            <div>
                <RightSuggestNews></RightSuggestNews>
            </div>
            <div>
                <Advertisement></Advertisement>
            </div>
        </div>
    );
};

export default RightNavbar;