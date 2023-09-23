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
            </footer>
        </>
    );
}
