import Image from "next/image";

export default function GOOD4ME() {
    return (
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3 pt-[4em]">
                    <h1 className="text-[32px] font-bold">#GOOD4ME</h1>
                    <div className="w-[8em] h-[5px] bg-[#F6623E]"></div>
                </div>
                <section className=" flex gap-4 justify-around py-12">
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image29.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image30.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image31.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image30.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image32.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="image33.svg"
                                alt="cards"
                                width={200}
                                height={0}
                            />
                        </div>
                        
                    </div>

                </section>
            </section>
        </>
    );
}
