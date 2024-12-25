import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import aboutMainImage from '../Assets/Images/aboutMainImage.png'
import CarouselSlide from '../Components/CarouselSlide'
import { celebrities } from '../Constants/CelebrityData'

function AboutUs() {
return (
    <HomeLayout>
        <div className='pl-20 pt-20 flex flex-col text-white'>
            <div className='flex items-center gap-5 mx-10'>
                <section className='w-1/2 space-y-10'>
                    <h1 className='text-5xl text-yellow-500 font-semibold'>
                        Quality Education Within Reach
                    </h1>
                    <p className='text-xl text-gray-300'>
                    Our mission is to deliver affordable, high-quality education to learners worldwide. Our platform serves as a bridge for aspiring teachers and students, enabling them to share their skills, creativity, and knowledge. By fostering collaboration and learning, we aim to empower individuals and contribute to the growth and well-being of society.
                    </p>
                </section>
                <div className='w-1/2'>
                    <img
                    id='test1'
                    style={{
                        filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                    }}
                    alt='about main page'
                    className='drop-shadow-2xl'
                    src={aboutMainImage}
                    />
                </div>

            </div>

            <div className="carousel w-1/2 m-auto my-16">
            {celebrities && celebrities.map(celebrity => (<CarouselSlide{...celebrity} key={celebrity.slideNumber} totalSlides={celebrities.length}  />))}
            </div>
        
        </div>
    </HomeLayout>
  )
}

export default AboutUs