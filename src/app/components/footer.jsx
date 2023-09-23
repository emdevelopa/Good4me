import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer>
                <section className="flex gap-[8em] px-[4em]">
                    <div className="w-[30%] flex flex-col items-center">
                        <Image src='logo.svg' alt="logo" width={150} height={0} />
                        <div><p className="text-center">Good health is important, so all of our products have been carefully designed to bring out the best in you.Good health is important, so all of our products have been carefully designed to bring out the best in you.</p></div>
                    </div>
                    <div className="w-[40%]">
                        <h1 className="font-bold text-[24px] pb-4 text-center">Keep In Touch</h1>
                        <p className="text-center pb-4">Subscribe to receive new product updates, be the first to know about sales, and more.</p>
                        <div className="flex border-b-2 border-black"><input type="text" className="w-full outline-none placeholder:text-black placeholder:font-bold" placeholder="Enter your email address" /><button className="font-bold text-[22px] text-[#F6623C]">SUBSCRIBE</button></div>
                    </div>
                    <div className="w-[30%] flex flex-col items-end">
                        <div>
                            <h1 className="font-bold text-[24px] pb-4">MORE INFO</h1>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#">Shipping & Delivery</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Partner Program</a></li>
                                <li><a href="#">Wholesale Portal</a></li>
                                <li><a href="#">You Buy, We Donate</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
               <div className="px-[4em] pt-[6em]">
               <hr/>
               </div>
                <section className="px-[4em] py-[2em] flex justify-between">
                    <div className="w-full flex gap-6">
                        <a href="#"><Image src='facebook.svg' alt='facebook' width={0} height={0} style={{width:'auto', hieght:'auto'}}/></a>
                        <a href="#"> <Image src='ig.svg' alt='instagram' width={0} height={0} style={{width:'auto', hieght:'auto'}}/></a>
                        <a href="#"><Image src='x.svg' alt='twitter' width={0} height={0} style={{width:'auto', hieght:'auto'}}/></a>
                        <a href="#"><Image src='pintrest.svg' alt='pintrest' width={0} height={0} style={{width:'auto', hieght:'auto'}}/></a>
                        <a href="#"><Image src='youtubee.svg' alt='youtube' width={0} height={0} style={{width:'auto', hieght:'auto'}}/></a>
                    </div>
                    <div className="w-full ">
                        <p>© 2021, <span className="text-[#F6623C]">GOOD4ME</span>. Powered by Shopify</p>
                    </div>
                    <div className="w-full">
                    <Image src='payment.svg' alt='youtube' width={0} height={0} style={{width:'auto', hieght:'auto'}}/>
                    </div>
                </section>
            </footer>
        </>
    );
}
