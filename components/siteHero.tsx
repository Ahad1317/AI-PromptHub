import Image from "next/image";
import React from "react";
import line from "@/public/line.png";
import Marquee from "react-fast-marquee";

type Props = {};

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];
const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];

export function SiteHero(){
  return (
    <div className="w-full md:min-h-screen flex items-center justify-center" style={{ background: "(#2393DC)" }}>
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-6xl 2xl:text-7xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Best <span className="text-[#64ff4c]">AI Marketplace</span>
          <br />
          Buy prompts <br /> at the best price
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-29 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <Marquee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </Marquee>
            <Marquee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}
