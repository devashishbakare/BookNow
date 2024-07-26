import React, { useState } from "react";
import {
  AiOutlineCopyrightCircle,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";

export const Contact = () => {
  const [showMenu, setShowMenu] = useState(Array(4).fill(false));
  const updateStatus = (index) => {
    const prevValue = showMenu[index];
    const status = new Array(4).fill(false);
    status[index] = !prevValue;
    setShowMenu(status);
  };
  return (
    <>
      <div className="h-auto w-full p-3 flex flex-col items-center justify-center gap-4">
        {/* Top section wrapper */}

        <div className="h-full w-full flex flex-col max-w-[1150px] shadow-lg md:flex-row gap-5 md:items-center md:justify-center">
          <div className="h-[20vh] min-h-[180px] max-w-[400px] w-full flex flex-col gap-4 justify-center sm:ml-[7%] md:w-[50%] md:min-h-[450px] md:max-w-[330px] md:justify-normal">
            <div className="h-[20%] w-full flex items-center gap-5">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
                alt="credImage"
                className="h-[55px] w-[283px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-gilroy-bold text-[20px] tracking-tighter font-semibold">
                complete surety with all comfort.
              </span>
              <span className="font-gilroy-bold text-[14px] leading-[25px] tracking-tighter opacity-[0.7]">
                Inspiration for better and comfortable life
              </span>
            </div>
          </div>
          <div className="h-auto w-full  flex flex-col items-center justify-center sm:hidden">
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(0)}
            >
              <span className="font-gilroy-bold text-[1rem] tracking-tighter leading-[30.5px]">
                Support
              </span>
              {showMenu[0] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[0] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">Help Center</span>
                  <span className="w-full pl-2 text-[0.9rem]">AirCover</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Disability support
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Cancellation options
                  </span>
                </div>
              </>
            )}
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(1)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                Hosting
              </span>
              {showMenu[1] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[1] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">
                    Community forum
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">careers</span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Hosting resources
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Hosting responsibly
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    customer care
                  </span>
                </div>
              </>
            )}
            <div
              className="h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer"
              onClick={() => updateStatus(2)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                BookNow
              </span>
              {showMenu[2] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[2] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">
                    BookNow your home
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Booknow for hosts
                  </span>
                  <span className="w-full pl-2 text-[0.9rem]">
                    Emergency Stay
                  </span>
                </div>
              </>
            )}

            <div
              className={`h-[8vh] min-h-[72px] w-full border-t-2 flex items-center justify-between pl-1 pr-1 cursor-pointer ${
                showMenu[3] ? "" : "border-b-2"
              }`}
              onClick={() => updateStatus(3)}
            >
              <span className="font-gilroy-bold text-[1.1rem] tracking-tighter leading-[30.5px]">
                More
              </span>
              {showMenu[3] ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <AiOutlinePlus />
                </>
              )}
            </div>
            {showMenu[3] && (
              <>
                <div className="h-auto w-full flex flex-col opacity-[0.7] gap-2 mb-5">
                  <span className="w-full pl-2 text-[0.9rem]">Newsroom</span>
                  <span className="w-full pl-2 text-[0.9rem]">Careers</span>
                  <span className="w-full pl-2 text-[0.9rem]">Investors</span>
                  <span className="w-full pl-2 text-[0.9rem]">New Feature</span>
                </div>
              </>
            )}
          </div>

          <div className="hidden sm:flex min-h-[450px] mt-5 h-[50vh] ml-[7%] w-full flex-col  md:w-[50%] md:max-w-[400px]">
            <div className="h-[50%] w-full flex">
              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  Support
                </span>
                <span className="w-full text-[0.8rem]">Help Center</span>
                <span className="w-full text-[0.8rem]">AirCover</span>
                <span className="w-full text-[0.8rem]">Disability Support</span>
                <span className="w-full text-[0.8rem]">
                  Cancellation option
                </span>
              </div>

              <div className="h-auto w-[30%] flex flex-col opacity-[0.7] gap-2 mb-5 md:w-[50%]">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  Hosting
                </span>
                <span className="w-full text-[0.8rem]">Community Forum</span>
                <span className="w-full text-[0.8rem]">careers</span>
                <span className="w-full text-[0.8rem]">Hosting Resources</span>
                <span className="w-full text-[0.8rem]">Customer Care</span>
              </div>
            </div>
            <div className="h-[50%] w-full flex ">
              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  BookNow
                </span>
                <span className="w-full text-[0.8rem]">BookNow your home</span>
                <span className="w-full text-[0.8rem]">BookNow for hosts</span>
                <span className="w-full text-[0.8rem]">Emergency Stay</span>
              </div>

              <div className="h-auto w-[50%] flex flex-col opacity-[0.7] gap-2 mb-5">
                <span className="font-gilroy-bold text-[1.2rem] tracking-tighter leading-[30.5px] font-semibold mb-3">
                  More
                </span>
                <span className="w-full text-[0.8rem]">Newsroom</span>
                <span className="w-full text-[0.8rem]">Careers</span>
                <span className="w-full text-[0.8rem]">Investors</span>
                <span className="w-full text-[0.8rem]">New Features</span>
              </div>
            </div>
          </div>
        </div>
        {/* End top Section wrapper */}
      </div>
    </>
  );
};

//I have added contact section for mobile tomorrow, you have to hide contact at sm and start doing it for sm and lg(flex change)
