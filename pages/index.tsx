import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const style = {
  body: `bg-[#e3e3e3] p-0 m-0 leading-normal box-border `,
  wrapper: `bg-[#e3e3e3] m-0 p-0`,
  workSection: `pt-24 px-16 pb-12 bg-[#fff]`,
  workHeading: `text-[#55198b] mb-3 font-black sm:text-4xl text-center`,
  row: `mr-auto ml-auto max-w-[75rem] m-0 p-0`,
  workTagline: ``,
};

const Home: NextPage = () => {
  return (
    <div className="bg-[#e3e3e3] p-0 m-0 leading-normal box-border">
      <div className="bg-[#e3e3e3] m-0 p-0">
        <section className="pt-24 px-16 pb-12 bg-[#fff]">
          <h2 className="text-center text-[#55198b] mb-3 font-black sm:text-[2.5rem] ">
            Websites Portfolio
          </h2>
          <div className="m-0 p-0 max-w-[75rem] before:table before:content-[''] after:table after:content-[''] after:clear-both ml-auto mr-auto">
            <p className="text-center text-[#767779] text-[1.4em] mb-16">
              Here are few of my websites.
            </p>
          </div>
          {/* Odd */}
          <div className="m-0 p-0 max-w-[75rem] before:table before:content-[''] after:table after:content-[''] after:clear-both ml-auto mr-auto mb-[5.5em]">
            <div className="m-0 p-0 w-full sm:w-3/6 sm:left-2/4 sm:relative float-left pr-[0.625rem] pl-[0.625rem] last:float-right sm:pr-[0.9375rem] sm:pl-[0.9375rem]">
              <img src="https://fester-924622-portfolio.netlify.app/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/HTML%20Form.png" alt="" className="border-none inline-block align-middle max-w-full h-14 w-24" />
            </div>
            <div className="m-0 p-0 w-full sm:w-[41.66667%] sm:relative sm:left-[-58.33333%] float-left pr-[0.625rem] pl-[0.625rem] last:float-right sm:pr-[0.9375rem] sm:pl-[0.9375rem]">
              <div className="m-0 p-0">
                <h3 className="text-[#738182] uppercase font-black sm:text-[1.9375rem]">HTML Form</h3>
                <p className="text-xs uppercase mt-8 mx-0 -mb-[0.1em] font-medium text-[#55198b]">Web</p>
                <p className="icons"><i className=" text-[#55198b] mr-4 fi-monitor"></i><i className=" text-[#55198b] mr-4 fi-tablet-portrait"></i><i className=" text-[#55198b] mr-4 fi-mobile"></i></p>
                <p className="text-[#738182] font-medium text-xl mb-7">Simple HTML,CSS Signup form with JS Validation. A project from Axiom FSD Module-A.</p>
                <a className=" text-white text-base uppercase font-black tracking-normal rounded-[45px] h-auto py-[0.8em] px-[2.1em] bg-[#55198b] " href="../Axiom-Module-A/Project-1/index.html">Visit Website</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;


































//<Image className="border-none inline-block align-middle max-w-full h-auto" src="https://fester-924622-portfolio.netlify.app/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/HTML%20Form.png" width='100' height='100'/>

// className="border-none inline-block align-middle max-w-full h-auto"