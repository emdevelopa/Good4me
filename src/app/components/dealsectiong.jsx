import Image from "next/image";

export default function Good4meDeal(){
    return(
        <>
            <section>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-[32px] font-bold">GOOD4ME DEAL</h1>
                    <div className="w-[8em] h-[5px] bg-orange-800"></div>
                    <p className="text-center">
                    Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy <br/> products today!
                    </p>
                </div>
                <section>
                    <div>
                        <Image src='' alt='cards' width={200} height={200}/>
                        <h3 className="font-bold ">MULTI-VITAMIN: EVERYDAY WELLNESS</h3>
                    </div>
                </section>
            </section>
        </>
    )
}