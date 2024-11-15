import FindOnSocialMedia from '../FindOnSocialMedia';
import SocialLogin from '../SocialLogin';

const RightNavbar = () => {
    return (
        <div>
            <div className='mb-8'>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <FindOnSocialMedia></FindOnSocialMedia>
            </div>
        </div>
    );
};

export default RightNavbar;