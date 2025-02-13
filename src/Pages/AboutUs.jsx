import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import AboutUsPage from "../Assets/Images/AboutUsPage-Photoroom.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import { Typewriter } from "react-simple-typewriter";

function AboutUs() {
    return (
        <HomeLayout>
            <div className="pt-20 px-10 text-white">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-3xl shadow-lg">
                    {/* Left Content */}
                    <section className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-bold text-yellow-400">
                        <Typewriter
                            words={["Quality Education Within Reach"]}
                            loop={false} // Set to true if you want looping effect
                            typeSpeed={70}
                            cursor
                            cursorStyle="|"
                        />
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Our mission is to deliver affordable, high-quality education to
                            learners worldwide. Our platform serves as a bridge for aspiring
                            teachers and students, enabling them to share their skills,
                            creativity, and knowledge. By fostering collaboration and
                            learning, we aim to empower individuals and contribute to the
                            growth and well-being of society.
                        </p>
                        <button className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300">
                            Learn More
                        </button>
                    </section>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={AboutUsPage}
                            alt="About Us"
                            className="w-[70%] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="w-full flex flex-col items-center my-16">
                    <h2 className="text-4xl font-semibold text-yellow-400 mb-6">
                        Our Achievements
                    </h2>
                    <div className="carousel w-full md:w-3/4 lg:w-1/2">
                        {celebrities &&
                            celebrities.map((celebrity) => (
                                <CarouselSlide
                                    {...celebrity}
                                    key={celebrity.slideNumber}
                                    totalSlides={celebrities.length}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;
