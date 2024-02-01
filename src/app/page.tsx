import React from "react";
// import home from "../assets/HomeBg.png";
import Pizaa from "../assets/Pizaa.png";
import PizaaLogo from "../assets/Vector.png";

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
          PIZZA PARADISE{" "}
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
          <div className="max-w-[1089px] my-14 flex items-center justify-center flex-wrap px-2 mx-auto">
            <div className="max-w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
              <img src={PizaaLogo.src} className="pb-[18px]" alt="" />
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
              Our food is carefully prepared with the highest quality products to satisfy the pleasures of all appetites.
              </p>
            </div>
            <div className="max-w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
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
    </main>
  );
};

export default page;
