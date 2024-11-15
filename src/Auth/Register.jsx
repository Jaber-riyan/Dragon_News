import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Register your account</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="photo">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 focus:border-gray-400"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={acceptedTerms}
                            onChange={() => setAcceptedTerms(!acceptedTerms)}
                            className="w-4 h-4 mr-2 text-gray-800 border-gray-300 rounded focus:ring-0"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Accept <span className="font-bold text-gray-800">Terms & Conditions</span>
                        </label>
                    </div>
                </div>

                <button
                    disabled={!acceptedTerms}
                    className={`w-full py-2 mt-4 text-white rounded-md ${acceptedTerms ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    Register
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already Have An Account?{' '}
                    <Link to="/auth/login" className="text-red-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
