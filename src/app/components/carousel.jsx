"use client";
import Image from "next/image";
import React, { useState } from "react";

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
            <div className="relative overflow-hidden bg-[#FEF0E7] p-4">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-shrink-0 gap-8 px-[12em] max-[916px]:p-[6em] max-[724px]:p-[2em] items-center relative" // Add relative class here
                            style={{ flexBasis: "100%" }}
                        >
                            <section className="flex flex-col gap-4 relative"> {/* Add relative class here */}

                                <div>
                                    <h4 className="font-semibold text-[12px] tracking-wider pb-[1em]">REAL REVIEWS</h4>
                                    <h2 className="font-semibold text-[24px] tracking-widest text-[#F6623E]">REAL RESULTS</h2>
                                    <div className="flex">
                                        {image.rating.map((_, index) => (
                                            <Image key={index} src="star.svg" alt="star" width={0} height={0} style={{ width: 'auto', hieght: 'auto' }} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p>{image.overview}</p>
                                    <div className="bg-white">
                                        <Image src={image.image} alt={`Slide ${index + 1}`} width={1500} height={0} />
                                    </div>
                                </div>
                                <p className="text-[#F6623E]">{image.user}</p>
                                <div className="flex gap-2 text-[#9D9D9D] font-bold"> {/* Move the button container here */}
                                    <button
                                        className='border-[2px] border-[#9D9D9D] py-1 px-3 hover:border-orange-400 hover:text-orange-400'
                                        onClick={prevSlide}
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className="border-[2px] border-[#9D9D9D] py-1 px-3 hover:border-orange-400 hover:text-orange-400"
                                        onClick={nextSlide}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </section>

                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Carousel;
