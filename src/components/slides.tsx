import { RefObject, useRef, useState } from "react";
import { SlideProps } from "../interfaces";

const Slide = ({ title, image }: SlideProps) => {
  return (
    <div className="flex flex-col min-w-full items-center px-[25px]">
      <div className="flex flex-col items-center justify-center gap-[25px] bg-[#D9D9D9] rounded-[14.75px] w-full max-w-[706px] h-[398px]">
        <span className="font-bold text-[16px] sm:text-[18px] md:text-[24px] text-[#032853] text-center w-full max-w-[400px] md:max-w-[600px] px-[10px]">
          {title}
        </span>

        <img
          className="w-full max-w-[250px] sm:max-w-[350px] h-auto"
          src={image}
        />
      </div>
    </div>
  );
};

const Slides = () => {
  const carouselRef = useRef() as RefObject<HTMLDivElement>;
  const [currentIndex, setCurrentIndex] = useState(0 as number);

  const slides = [
    {
      title: `Firstly, we monitor sites for releases. When something releases, we’re the first to know.`,
      image: "/slide-one.png",
    },
    {
      title: `Once we see that something has released, we instantaneously check the products prices on StockX and then calculate your potential profit!`,
      image: "/slide-two.png",
    },
    {
      title: `Depending on your profit settings, you can get notified of these releases and BOOM… COPPED!`,
      image: "/slide-three.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[45px] w-full">
      <div className="text-center font-bold text-[28px]">
        <span className="text-[#032853]">How ResellX</span>
        <span className="text-[#628FFF]">&nbsp;Works</span>
      </div>

      <div ref={carouselRef} className="flex overflow-hidden">
        {slides.map((slide) => {
          return <Slide title={slide.title} image={slide.image} />;
        })}
      </div>

      <div className="flex items-center justify-center gap-[32.5px]">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          className="cursor-pointer"
          onClick={() => {
            if (!carouselRef.current) return;

            let newIndex = currentIndex - 1;

            if (newIndex < 0) {
              newIndex = slides.length - 1;
            }
            const scrollTo = carouselRef.current?.clientWidth * newIndex;

            carouselRef.current?.scroll({
              left: scrollTo,
              top: 0,
              behavior: "smooth",
            });

            setCurrentIndex(newIndex);
          }}
        >
          <path
            d="M7 13.5L1 7.5L7 1.5"
            stroke="#7A8CA1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex gap-[22.5px]">
          {slides.map((slide, index) => {
            return (
              <span
                style={{
                  color: currentIndex == index ? "#628FFF" : "#7A8CA1",
                }}
                className="font-bold text-[17.5px] cursor-pointer"
                onClick={() => {
                  if (!carouselRef.current) return;
                  let scrollTo = carouselRef.current?.clientWidth * index;

                  carouselRef.current?.scroll({
                    left: scrollTo,
                    top: 0,
                    behavior: "smooth",
                  });

                  setCurrentIndex(index);
                }}
              >
                {index + 1}
              </span>
            );
          })}
        </div>

        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          className="cursor-pointer"
          onClick={() => {
            if (!carouselRef.current) return;
            let newIndex = currentIndex + 1;

            if (newIndex == slides.length) {
              newIndex = 0;
            }
            let scrollTo = carouselRef.current?.clientWidth * newIndex;

            carouselRef.current?.scroll({
              left: scrollTo,
              top: 0,
              behavior: "smooth",
            });

            setCurrentIndex(newIndex);
          }}
        >
          <path
            d="M0.999999 1.5L7 7.5L1 13.5"
            stroke="#7A8CA1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slides;
