import Image from "../../node_modules/next/image";
import Good4meDeal from './components/dealsectiong'
import Ourproducts from './components/ourproduct'

export default function Home() {
  return (
    <main className="">
      <header>
        <div className="bg-[#F6623E] flex justify-between items-center py-3 px-[8em] text-white">
          <p>
            Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <a href="#">Sign in</a>
              <p>/</p>
              <a href="#">Register</a>
            </div>
            <p>|</p>
            <div className="flex">
            <Image src='usa.svg' alt='usa' height={100} width={40}/>
              <select className="bg-transparent">
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>
        <nav className="flex justify-between items-center py-8 px-[7em]">
          <div>
            <Image src='logo.svg' alt="logo" width={150} height={0}/>
          </div>
          <ul className="flex gap-8">
            <li className="hover:text-[#0000006c]"><a href="#">HOME</a></li>
            <li className="hover:text-[#0000006c]"><a href="#">SHOP</a></li>
            <li className="hover:text-[#0000006c]"><a href="#">FAQ'S</a></li>
            <li className="hover:text-[#0000006c]"><a href="#">STOCKISTS</a></li>
            <li className="hover:text-[#0000006c]"><a href="#">WHOLESALE</a></li>
            <li className="hover:text-[#0000006c]"><a href="#">CONTACT</a></li>
          </ul>
          <div className="flex gap-3">
            <div className="cursor-pointer hover:bg-[#0000006c] hover:rounded-[50%] p-2 w-[50%] h-[50%]"><Image src='search.svg' alt="search" width={20} height={0} /></div>
            <div className="cursor-pointer hover:bg-[#0000006c] hover:rounded-[50%] p-2 w-[50%] h-[50%]"> <Image src='cart.svg' alt="cart" width={20} height={0} /></div>
          </div>
        </nav>
      </header>
      <div
        className="h-[80vh] w-full bg-center bg-cover relative bg-no-repeat"
        style={{ background: "url(MaskGroup.svg)" }}
      >
        <div className="absolute top-1/4 w-[40%] right-11 flex flex-col gap-6">
          <h2 className="font-bold text-[20px] text-[#F6623E]">Good4Me</h2>
          <h1 className="font-bold text-[42px]">Apple Cider Vinegar</h1>
          <p>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
          <div><button className="bg-[#F6623E] text-white py-2 px-4 ">SHOP NOW</button></div>
        </div>
      </div>
      <Good4meDeal/>
      <Ourproducts/>
    </main>
  );
}
