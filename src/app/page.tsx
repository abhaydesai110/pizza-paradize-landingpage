import React from "react";
// import home from "../assets/HomeBg.png";
import Pizaa from "../assets/Pizaa.png";
import PizaaLogo from "../assets/Vector.png";
import chezzy7 from "../assets/7cheez.png";
import mymac from "../assets/mymac.png";
import fire from "../assets/fire.png";
import { Apple, Phone } from "lucide-react";

const page = () => {
  return (
    <main className="">
      <section className="max-w-[1460px]  mx-auto bg-[url(../assets/HomeBg.png)] relative">
        <nav className="max-w-[1208px] mx-auto h-12 my-auto px-2 flex pt-[26px] items-center justify-between text-white">
          <h1 className="text-2xl uppercase">LOGO</h1>
          <div className="flex items-center justify-center space-x-9">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Menu</p>
            <p className="cursor-pointer">Order</p>
            <p className="cursor-pointer">Location</p>
            <p className="cursor-pointer">Reviews</p>
          </div>
          <button className="w-64 h-12 rounded-full text-xl border border-white">
            contact
          </button>
        </nav>
        <h1 className="text-9xl text-white md:pt-[89px] w-full flex justify-center">
          PIZZA PARADISE
        </h1>
        <img className="mx-auto -mt-[120px]" src={Pizaa.src} alt="pizaa" />
        <div className="w-full flex justify-center pt-9 pb-14 ">
          <button className="mx-auto text-white px-8  py-3 rounded-full bg-[#930E0E] uppercase">
            order now
          </button>
        </div>
      </section>
      <section className="max-w-[1460px] mx-auto relative">
        <div className="w-full my-[100px]">
          <div className="max-w-[1089px] my-14 flex  justify-center flex-wrap px-2 mx-auto">
            <div className="max-w-full md:w-1/2 lg:w-1/3 flex flex-col  space-y-[18px] items-center">
              <img src={PizaaLogo.src} className="" alt="" />
              <h1 className="text-2xl">ORIGINAL RECIPES</h1>
              <p className="text-center">
                Immerse yourself in a world of innovative and unique pizzas
                crafted by our talented team.
              </p>
            </div>
            <div className="max-w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-[18px] items-center">
              <img src={PizaaLogo.src} className="" alt="" />
              <h1 className="text-2xl">QUALITY FOOD</h1>
              <p className="text-center">
                Our food is carefully prepared with the highest quality products
                to satisfy the pleasures of all appetites.
              </p>
            </div>
            <div className="max-w-full md:w-1/2 lg:w-1/3 flex  space-y-[18px] flex-col items-center">
              <img src={PizaaLogo.src} className="" alt="" />
              <h1 className="text-2xl">FAST DELIVERY</h1>
              <p className="text-center">
                Our home delivery service is faster than you think, so you can
                enjoy your food in a reasonable time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="max-w-[1208px] mx-auto px-2 ">
          <h1 className="uppercase pb-[48px] text-5xl font-bold text-center w-full">
            our menu
          </h1>
          <div className="w-full flex items-center justify-center flex-wrap">
            <div className="max-w-full pr-4 pb-11  md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full pb-11 px-4 md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full pb-11 pl-4  md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-wrap">
            <div className="max-w-full pr-4 pb-11  md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full pb-11 px-4 md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full pb-11 pl-4  md:w-1/2 lg:w-1/3">
              <div className="border rounded-b-2xl ">
                <img src={chezzy7.src} className="w-full h-[289px]" alt="" />
                <div className="p-[18px] flex flex-col ">
                  <h2 className="text-[18px]">PEPPERONI PIZZA</h2>
                  <p>
                    Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce
                  </p>
                  <div className="w-full flex items-center justify-between pt-[18px]">
                    <button className="w-[93px] h-10 rounded-full border border-[#E29E00]">
                      $22.00
                    </button>
                    <button className="bg-[#E29E00] w-[118px] h-10 rounded-full text-white">
                      call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1456px] min-h-[583px]  px-2 mx-auto relative bg-red-200 ">
        <img src={mymac.src} className="w-[548px] h-[580px]  z-10 absolute" alt="" />
        <img src={fire.src} className="w-[548px] h-[580px] -mt-16  absolute" alt="" />
        <div className=" bg-[url('../assets/sectionbg.png')] text-white w-full flex justify-end">
          <div className="max-w-[482px] my-[60px] mr-[124px] space-y-12">
            <div className="flex flex-col space-y-[18px]">
              <h1 className="text-5xl ">THE EASIEST WAY TO ORDER </h1>
              <p>
                Enjoy your pizza at home with your friends or in front of your
                tv!
              </p>
            </div>
            <div className="flex flex-col space-y-[18px]">
              <h2 className="flex space-x-1">
                <Phone />
                <span>(725) 644-1021</span>
              </h2>
              <h2 className="flex space-x-1">
                <Apple />
                <span>(725) 600-1000</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
