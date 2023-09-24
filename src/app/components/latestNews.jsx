import Image from "next/image";

export default function Latestnews() {
    return (
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3 pt-[4em]">
                    <h1 className="text-[32px] font-bold">LATEST NEWS</h1>
                    <div className="w-[8em] h-[5px] bg-[#F6623E]"></div>
                </div>
                <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-around p-12">
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[18em]" style={{ background: 'url(latnews1.svg)' }}>

                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[18em]" style={{ background: 'url(latnews2.svg)' }}>

                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[18em]" style={{ background: 'url(latnews3.svg)' }}>

                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ
                            </button>
                        </div>
                    </div>

                </section>
            </section>
        </>
    );
}
