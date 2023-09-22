import Image from "next/image";

export default function Shopall() {
    return (
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3 pt-[4em]">
                    <h1 className="text-[32px] font-bold">SHOP ALL</h1>
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
                             <Image
                             className="absolute right-2 top-2"
                                src="onSale.svg"
                                alt="cards"
                                width={80}
                                height={0}
                            />
                        </div>
                        <h3 className="font-bold text-center py-4">
                        **PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)
                        </h3>
                        <div className="flex justify-center gap-4">
                            <p className="text-[#F6623E]">$39.95 NZD</p>
                            <p className="line-through text-[#9D9D9D]">$199.75 NZD</p>
                        </div>
                    </div>

                   
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-14 relative">
                            <Image
                                src="multivitamin3.svg"
                                alt="cards"
                                width={200}
                                height={200}
                            />
                             <Image
                             className="absolute right-2 top-2"
                                src="onSale.svg"
                                alt="cards"
                                width={80}
                                height={0}
                            />
                        </div>
                        <h3 className="font-bold text-center py-4">
                        PROBIOTICS: GUT HEALTH + BLOAT SUPPORT
                        </h3>
                        <div className="flex justify-center gap-4">
                            <p className="text-[#F6623E]">$39.95 NZD</p>
                            <p className="line-through text-[#9D9D9D]">$199.75 NZD</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div
                            className="bg-[#E8E8E8] h-[20em] w-[100%] relative"
                            style={{
                                background: "url(multivitamin2.svg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        > <Image
                        className="absolute right-2 top-2"
                           src="onSale.svg"
                           alt="cards"
                           width={80}
                           height={0}
                       /></div>
                        <h3 className="font-bold text-center py-4">
                        DETOX + BLOAT SUPPORT VALUE PACK
                        </h3>
                        <div className="flex justify-center gap-4">
                            <p className="text-[#F6623E]">$39.95 NZD</p>
                            <p className="line-through text-[#9D9D9D]">$199.75 NZD</p>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <div
                            className="bg-[#E8E8E8] w-[100%] h-[20em] relative"
                            style={{
                                background: "url(multivitamin4.svg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        > <Image
                        className="absolute right-2 top-2"
                           src="onSale.svg"
                           alt="cards"
                           width={80}
                           height={0}
                       /></div>
                        <h3 className="font-bold text-center py-4">
                        APPLE CIDER VINEGAR
                        </h3>
                        <div className="flex justify-center gap-4">
                            <p className="text-[#F6623E]">$39.95 NZD</p>
                            <p className="line-through text-[#9D9D9D]">$199.75 NZD</p>
                        </div>
                    </div>
                  
                </section>
                <div className="flex justify-center">
                        <button className="font-bold py-4 px-6 border-[2px] border-[#F6623E] hover:bg-[#F6623E] hover:text-[#fff]">
                            VIEW ALL PRODUCTS
                        </button>
                    </div>
            </section>
        </>
    );
}
