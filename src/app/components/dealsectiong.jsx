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
                <section  className=" flex justify-around py-4">
                    <div>
                        <div className="bg-[#E8E8E8] flex items-center justify-center px-2 py-[20%]">
                            <Image src='multivitamin.svg' alt='cards' width={200} height={0}/>
                        </div>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>

                    <div className="">
                        <div className="bg-[#E8E8E8] h-[20em] bg-center bg-fixed bg-cover bg-no-repeat" style={{background:'url(multivitamin2.svg)'}}>
                            {/* <Image src='multivitamin2.svg' alt='cards' width={200} height={200}/> */}
                        </div>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>
                    <div className="">
                        <div className="bg-[#E8E8E8] flex items-center justify-center px-2 py-14">
                            <Image src='multivitamin.svg' alt='cards' width={200} height={200}/>
                        </div>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div><div className="">
                        <div className="bg-[#E8E8E8] flex items-center justify-center px-2 py-14">
                            <Image src='multivitamin.svg' alt='cards' width={200} height={200}/>
                        </div>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>
                </section>
            </section>
        </>
    )
}