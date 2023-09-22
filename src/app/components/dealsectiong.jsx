import Image from "next/image";

export default function Good4meDeal(){
    return(
        <>
            <section className="py-8">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-[32px] font-bold">GOOD4ME DEAL</h1>
                    <div className="w-[8em] h-[5px] bg-orange-800"></div>
                    <p className="text-center">
                    Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy <br/> products today!
                    </p>
                </div>
                <section  className=" flex gap-4 justify-around p-4">
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[90%] flex items-center justify-center px-2 py-[20%]">
                            <Image src='multivitamin.svg' alt='cards' width={200} height={0}/>
                        </div>
                        <h3 className="font-bold text-center">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>

                    <div className="w-full">
                        <div className="bg-[#E8E8E8] w-[100%] h-[90%]" style={{background:'url(multivitamin2.svg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                        </div>
                        <h3 className="font-bold text-center">FULL RANGE VALUE PACK (SAVE 33%)</h3>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#E8E8E8] h-[90%] flex items-center justify-center px-2 py-14">
                            <Image src='multivitamin3.svg' alt='cards' width={200} height={200}/>
                        </div>
                        <h3 className="font-bold text-center">VITAMIN C: IMMUNITY SUPPORT</h3>
                    </div>
                    <div className="w-full text-center">
                        <div className="bg-[#E8E8E8] w-[100%] h-[90%]" style={{background:'url(multivitamin4.svg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                        </div>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>
                </section>
            </section>
        </>
    )
}