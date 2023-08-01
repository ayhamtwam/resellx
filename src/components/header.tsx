import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Assets from "../assets";
import { ElementProps } from "../interfaces";

const Header = ({ page }: ElementProps) => {
  const pathName = useLocation().pathname;
  const cPage =
    pathName && pathName !== "/"
      ? pathName.substring(1, pathName.length)
      : "monitoring";

  const hrefs =
    page === "Landing"
      ? [
          {
            title: "About us",
            href: "#about-us",
          },
          {
            title: "Pricing",
            href: "#pricing",
          },
          {
            title: "Guide",
            href: " ",
          },
        ]
      : [
          {
            title: "Monitoring",
            href: "/monitoring",
          },
          {
            title: "Settings",
            href: "/settings",
          },
          {
            title: "Guide",
            href: " ",
          },
        ];

  const [showNav, setShowNav] = useState(false);
  const [currentScroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    document.addEventListener("scroll", () => setScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  return (
    <div
      className={`fixed flex flex-col w-screen py-[35px] px-[75px] lg:px-[125px] z-10 transition-all ease-linear ${
        currentScroll > 0 ? "bg-[#F0F0F0]/[.75] drop-shadow-md" : "bg-[#F0F0F0]"
      }`}
    >
      <div
        className={`flex items-center ${
          page === "Landing" && "justify-between"
        } justify-between lg:justify-start`}
      >
        <a href="/" className="cursor-pointer">
          <Assets.Logo />
        </a>

        {page !== "Register" && (
          <div
            style={{
              marginLeft: page === "Landing" ? "auto" : "75px",
            }}
            className="hidden lg:flex items-center gap-[45px] px-[10px] whitespace-nowrap"
          >
            {hrefs.map((href, index) => {
              const isCurrent = cPage === href.title.toLocaleLowerCase();

              return (
                <a
                  key={`href-${index}`}
                  href={href.href}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-semibold text-[18px] ${
                      isCurrent ? "text-[#2E6AFF]" : "text-[#032853]/[.75]"
                    } cursor-pointer`}
                  >
                    {href.title}
                  </span>
                </a>
              );
            })}
          </div>
        )}

        <div className="hidden lg:flex items-center gap-[40px] ml-auto">
          <a href="/login">
            <button className="w-[140px] h-[47.5px] rounded-[5px] bg-[#032853] font-semibold text-[16px] text-white">
              Login
            </button>
          </a>
        </div>

        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          className="lg:hidden cursor-pointer stroke-[#032853]/[.75] justify-self-end"
          onClick={() => setShowNav(!showNav)}
        >
          <path
            d="M1 1H17"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 14.7143H17"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 7.85715H17"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className={`${
          !showNav
            ? "h-[0px]"
            : `${page === "Landing" ? "h-[220.5px]" : "h-[241px]"}`
        }  lg:hidden flex flex-col w-full mt-[20px] gap-[10px] items-center justify-end text-center transition-all duration-[300px] ease-linear overflow-hidden`}
      >
        <div className="flex flex-col gap-[10px] whitespace-nowrap">
          {hrefs.map((href, index) => {
            const isCurrent = cPage === href.title.toLocaleLowerCase();

            return (
              <a href={href.href} className="cursor-pointer">
                <span
                  className={`font-semibold text-[18px] ${
                    isCurrent ? "text-[#2E6AFF]" : "text-[#032853]/[.75]"
                  } cursor-pointer`}
                >
                  {href.title}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-[10px] items-center">
          <a href="Login">
            <button className="w-[140px] h-[47.5px] rounded-[5px] bg-[#032853] font-semibold text-[16px] text-white">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
