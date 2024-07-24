import React from 'react';
import loginBg from '../assets/video2.mp4';

const Login = () => {
    return (
        <div className="relative h-screen">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
            >
                <source src={loginBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Form Container */}
            <div className="flex justify-center items-center h-full ">
                <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md border border-purple-600 animate-grow">
                    <h3 className="text-4xl font-bold text-slate-700 mb-8 text-center">
                        Login
                    </h3>

                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-xl font-semibold py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-lg hover:from-blue-800 hover:to-indigo-900  "
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
