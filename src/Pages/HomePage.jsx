import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'
import HomePageImage from "../Assets/Images/homePageMainImage.png"
import { Typewriter } from 'react-simple-typewriter'

function HomePage() {
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow pt-10 text-white flex flex-col lg:flex-row items-center justify-center gap-10 mx-6 md:mx-12 lg:mx-16 h-auto lg:h-[90vh]">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            Find out best
                            <span className="text-yellow-500 font-bold"> 
                                <Typewriter
                                    words={["Online Courses"]}
                                    loop={false} 
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    cursor
                                    cursorStyle=">"
                                />
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                            <Link to="/courses">
                                <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 w-full sm:w-auto">
                                    Explore courses
                                </button>
                            </Link>

                            <Link to="/contact">
                                <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 w-full sm:w-auto">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img alt="homepage image" src={HomePageImage} className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto max-w-sm md:max-w-md lg:max-w-full" />
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
