import Image from "next/image";

export default function Latestnews() {
    return (
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3 pt-[4em]">
                    <h1 className="text-[32px] font-bold">LATEST NEWS</h1>
                    <div className="w-[8em] h-[5px] bg-[#F6623E]"></div>
                </div>
                <section className=" flex gap-4 justify-around p-12">
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-[20%] relative">
                            <Image
                                src="multivitamin.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ MORE
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-[20%] relative">
                            <Image
                                src="multivitamin.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ MORE
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-[20%] relative">
                            <Image
                                src="multivitamin.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        <p className="text-[#F6623E] text-center">August 26, 2020</p>
                        <h3 className="font-bold text-center py-4">
                            WE DONATE ONE WEEKS SUPPLY
                        </h3>
                        <p className="text-center text-[#9D9D9D]">We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <div className="flex justify-center py-[2em]">
                            <button className="bg-[#F6623E] text-white py-2 px-4 ">
                                READ MORE
                            </button>
                        </div>
                    </div>

                </section>
            </section>
        </>
    );
}
