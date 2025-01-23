import { Element, Link as LinkScroll } from "react-scroll";
import { Card } from "../components/Card.jsx"
import { Check } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element className="flex flex-col md:flex-row items-center sm:px-8 md:px-20 lg:px-28 xl:px-36 justify-center w-full h-full" name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase">
              <p className="text-black">The Industry&apos;s #1 OnlyFans Management Agency</p>
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Transform Your Life
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-black">
              Embrace Your Desired Lifestyle, and Enjoy The Journey To Success
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
            <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
              Apply Now
            </button>
            </LinkScroll>
          </div>

        </div>

        <div className="relative h-[500px] w-full md:w-[600px]">
            <Card className="absolute left-0 top-12 w-48 rotate-[-6deg] transform p-4 shadow-lg transition-transform hover:rotate-0">
              <div className="text-sm text-gray-500">Messages</div>
              <div className="text-2xl font-bold">800+</div>
              <div className="mt-2 h-2 w-full rounded bg-blue-100">
                <div className="h-full w-3/4 rounded bg-blue-500" />
              </div>
            </Card>

            <Card className="absolute right-0 top-0 w-48 rotate-[6deg] transform p-4 shadow-lg transition-transform hover:rotate-0">
              <div className="text-sm text-gray-500">Date</div>
              <div className="text-xl font-semibold">01/01/25</div>
              <div className="mt-2 h-2 w-full rounded bg-green-100">
                <div className="h-full w-1/2 rounded bg-green-500" />
              </div>
            </Card>

            <Card className="absolute left-12 top-48 w-64 rotate-[-3deg] transform p-6 shadow-lg transition-transform hover:rotate-0">
              <div className="mb-2 text-sm text-gray-500">Current Balance</div>
              <div className="text-3xl font-bold">$27,812.91</div>
              <div className="mt-2 text-xs text-blue-500">You are in the top 0.1% of all creators</div>
            </Card>

            <div className="absolute bottom-12 right-12 rotate-[12deg] transform transition-transform hover:rotate-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                <div className="text-center">
                  <Check className="mx-auto h-8 w-8" />
                  <div className="mt-1 text-xs">
                    Payout
                    <br />
                    Cleared
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 h-full w-full" style={{ zIndex: -1 }}>
              <path
                d="M100,100 L200,150 L300,200 L400,250"
                stroke="rgb(219 234 254)"
                strokeWidth="2"
                strokeDasharray="4"
                fill="none"
              />
            </svg>
          </div>
      </Element>
    </section>
  );
};

export default Hero;