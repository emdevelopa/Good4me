import Image from "next/image";

export default function Good4meDeal() {
    return (
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-[32px] font-bold">GOOD4ME DEAL</h1>
                    <div className="w-[8em] h-[5px] bg-[#F6623E]"></div>
                    <p className="text-center">
                        Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy <br /> products today!
                    </p>
                </div>
                <section className=" flex gap-4 justify-around p-12">
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-[20%]">
                            <Image src='multivitamin.svg' alt='cards' width={200} height={0} />
                        </div>
                        <h3 className="font-bold text-center py-4">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>

                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] w-[100%]" style={{ background: 'url(multivitamin2.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                        <h3 className="font-bold text-center py-4">FULL RANGE VALUE PACK (SAVE 33%)</h3>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[20em] flex items-center justify-center px-2 py-14">
                            <Image src='multivitamin3.svg' alt='cards' width={200} height={200} />
                        </div>
                        <h3 className="font-bold text-center py-4">VITAMIN C: IMMUNITY SUPPORT</h3>
                    </div>
                    <div className="w-full text-center">
                        <div className="bg-[#E8E8E8] w-[100%] h-[20em]" style={{ background: 'url(multivitamin4.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                        <h3 className="font-bold text-center py-4">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>
                </section>
                <section className="flex gap-8 px-[10em]">
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <Image src='/plane.png' alt='plane' width={100} height={0} />
                        <h1 className="font-bold">WORLDWIDE SHIPPING</h1>
                        <p className="text-center text-[#9D9D9D]">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <Image src='/plane.png' alt='plane' width={100} height={0} />
                        <h1 className="font-bold">WORLDWIDE SHIPPING</h1>
                        <p className="text-center text-[#9D9D9D]">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <Image src='/plane.png' alt='plane' width={100} height={0} />
                        <h1 className="font-bold">WORLDWIDE SHIPPING</h1>
                        <p className="text-center text-[#9D9D9D]">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                </section>
            </section>
        </>
    )
}