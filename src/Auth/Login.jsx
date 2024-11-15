import React, { useContext } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/Authentication';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const { signInUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error("Password Should Be 6 Character.");
            return;
        }

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login Successfully.");
                navigate(location?.state || '/');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                toast.error(formattedError);
            })
        // e.target.reset();
        // navigate('/auth/login');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md py-20 px-8 space-y-6 bg-white shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Login your account</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email address
                        </label>
                        <div className="flex items-center mt-1">
                            <FiMail className="w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name='email'
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-gray-100 focus:border-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center mt-1">
                            <FiLock className="w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-gray-100 focus:border-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    <Link className="underline">
                        Forgat Password?
                    </Link>
                </p>

                <button className="w-full py-2 mt-4 text-white bg-gray-800 rounded-md hover:bg-gray-900">
                    Login
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't Have An Account?{' '}
                    <Link to="/auth/register" className="text-red-500 hover:underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
