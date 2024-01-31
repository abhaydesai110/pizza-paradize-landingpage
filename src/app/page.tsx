import React from "react";
import home from "../assets/HomeBg.png";

const page = () => {
  return (
    <main className="">
      <section className="max-w-[1460px] h-[821px]  mx-auto bg-[url(../assets/HomeBg.png)]">
        <nav className="max-w-[1208px] mx-auto px-2 flex items-center justify-between text-white">
          <h1 className="text-2xl uppercase">LOGO</h1>
          <div className="flex items-center justify-center space-x-9">
            <p className="">Home</p>
            <p className="">Menu</p>
            <p className="">Order</p>
            <p className="">Location</p>
            <p className="">Reviews</p>
          </div>
          <button className="w-64 h-12 rounded-2xl border border-white">contact</button>
        </nav>
      </section>
    </main>
  );
};

export default page;
