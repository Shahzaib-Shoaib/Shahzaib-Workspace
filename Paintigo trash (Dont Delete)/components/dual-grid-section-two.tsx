import React from "react";
import Image from "next/image";

export default function DualGridSectionTwo() {
  return (
    <div className="grid md:grid-cols-2 mb-10 grid-cols-1 ">
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="md:text-4xl text-3xl text-black font-segoe font-semibold mb-7 mt-14 md:mt-0">
          {/* md:text-4xl text-black font-segoe mb-5 font-semibold sm:mt-14 mt-10 text-3xl */}
          Lorem ipsum dolor sit amet.{" "}
        </h1>
        <h2 className="text-2xl text-gray-900 font-segoe font-medium mb-5 ">
          {/* text-2xl text-gray-900 font-segoe mb-5 font-medium */}
          Lorem ipsum dolor{" "}
        </h2>
        <p className="px-8">
          {/* px-7 */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          sagittis, elit sit amet dapibus eleifend, eros orci fringilla arcu,
          nec lacinia purus tortor in mauris. Integer consectetur sapien vel
          magna maximus, id euismod magna auctor. Aliquam blandit semper magna,
          eu auctor nunc ultrices eu. Sed sed nulla nec mauris vestibulum
          accumsan eget at purus. Morbi elementum, mi ut malesuada pretium, nisi
          risus congue ex, vitae convallis leo nisi eget justo.
        </p>
        <button className="bg-[#262626] p-3 rounded text-white mt-6">
          Buy Now
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/banner-1.jpg"
          width={550}
          height={540}
          alt="banner"
        />
      </div>
    </div>
  );
}
