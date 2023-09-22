"use client"
import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            style={{ flexBasis: '100%' }}
                        >
                            <section>
                                <h4>REAL REVIEWS</h4>
                                <h2>REAL RESULTS</h2>
                                <div className='flex'>
                                    {
                                        image.rating.map((_, index) => (

                                            <img key={index} src='star.svg' alt='star' />

                                        ))
                                    }
                                </div>
                                <p>
                                    {image.overview}
                                </p>
                                <p>
                                    {image.user}
                                </p>
                            </section>
                            <img src={image.image} alt={`Slide ${index + 1}`} className="w-" />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                    onClick={prevSlide}
                >
                    Previous
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Carousel;
