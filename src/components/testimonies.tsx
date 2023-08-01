import { RefObject, useRef, useState } from "react";
import { TestimonyProps } from "../interfaces";

const Testimony = ({ username, testimony, image }: TestimonyProps) => {
  return (
    <div className="flex items-center flex-col gap-[20px] min-w-full">
      <img
        src={image}
        alt=""
        className="w-[60px] h-[60px] rounded-[5px] border border-[#000]/[.2]"
      />

      <span className="font-medium text-[16px] text-[#7A8CA1]">{username}</span>

      <span className="font-bold text-[23px] text-[#032853] text-center tracking-[.5px] w-[400px] lg:w-full max-w-[948px]">
        "{testimony}"
      </span>
    </div>
  );
};

const Testimonies = () => {
  const carouselRef = useRef() as RefObject<HTMLDivElement>;
  const [currentIndex, setCurrentIndex] = useState(0 as number);

  const testimonies = [
    {
      username: "bobbyflips",
      testimony: `I applied to be a ResellX alpha-tester in mid-september and it’s BLAZING fast. The monitors have helped me cop up shock-drops where there wasn’t time to go online and research the shoe.`,
      image:
        "https://media.discordapp.net/attachments/1026623618018455562/1034317448280817744/EYzhy0AU8AAJxRa.jpeg?width=624&height=936",
    },
    {
      username: "doorstepl",
      testimony: `Genuinely the most useful tool for me as a beginner. Before I joined I had no idea what to buy or when to even buy it but this really simplified things. Would 100% recommend!`,
      image:
        "https://media.discordapp.net/attachments/1026623618018455562/1034317512558522499/FfrdcaWXoAAQ6vl.jpeg?width=936&height=936",
    },
    {
      username: "Hishiro",
      testimony: `I really hated watching restocks happening in but always missing out on them because I didn’t know whether the products were worth my money & time. Finally I have everything in one place!`,
      image:
        "https://media.discordapp.net/attachments/1026623618018455562/1034317559467614218/FfzQ9HjVQAAon0j.jpeg?width=702&height=936",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#F0F0F0] py-[150px] border-t-2 border-[#00]/[.1] gap-[50px] overflow-hidden">
      <div ref={carouselRef} className="flex overflow-hidden">
        {testimonies.map((testimony, index) => {
          return (
            <Testimony
              key={`testimony-${index}`}
              username={testimony.username}
              testimony={testimony.testimony}
              image={testimony.image}
            />
          );
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
              newIndex = testimonies.length - 1;
            }
            const scrollTo = carouselRef.current.clientWidth * newIndex;

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
          {testimonies.map((testimony, index) => {
            return (
              <span
                key={`testimony-btn-${index}`}
                style={{
                  color: currentIndex == index ? "#628FFF" : "#7A8CA1",
                }}
                className="font-bold text-[17.5px] cursor-pointer"
                onClick={() => {
                  if (!carouselRef.current) return;
                  let scrollTo = carouselRef.current.clientWidth * index;

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

            if (newIndex == testimonies.length) {
              newIndex = 0;
            }
            const scrollTo = carouselRef.current.clientWidth * newIndex;

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

export default Testimonies;
