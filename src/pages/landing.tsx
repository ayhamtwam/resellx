import { FAQ, MonitoredSites, Plans } from "../components";
import Assets from "../assets";
import Testimonies from "../components/testimonies";
// import Slides from "../components/slides";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#f0f0f0] px-[125px] pt-[225px] max-lg:pt-[175px]">
        <div className="flex items-start justify-center xl:justify-between w-full max-xl:flex-wrap gap-[40px]">
          <div className="flex flex-col w-[600px] gap-[40px] items-center xl:items-start">
            <div className="flex flex-col gap-[5px]">
              <div className="text-center xl:text-start text-[30px] md:text-[40px] leading-[1.15]">
                <span className="font-bold text-[#032853]">Simplifying</span>

                <span className="font-bold bg-clip-text text-transparent bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF]">
                  &nbsp;Resale Research
                </span>

                <span className="font-bold text-[#032853]">
                  &nbsp;for Expert Resellers and Beginners Alike.
                </span>
              </div>

              <span className="font-semibold text-[12.5px] md:text-[15px] text-[#7A8CA1] text-center xl:text-start">
                We take the guesswork out of reselling for expert and beginner
                resellers alike by providing real-time profit calculations.
              </span>
            </div>
          </div>

          <img
            src="./webhooks.png"
            className="min-w-[250px] w-full max-w-[500px] h-auto relative md:drop-shadow-webhooks"
          />
        </div>

        <MonitoredSites />
      </div>

      <div
        id="about-us"
        className="flex flex-col items-center bg-white border-t-2 border-[#00]/[.1]"
      >
        {/* <Slides /> */}

        <div className="flex flex-col py-[100px] md:py-[150px] items-center xl:items-start">
          <div className="flex flex-col w-full max-w-[695px] gap-[10px] items-center xl:items-start xl:text-start">
            <div className="font-bold text-[24px] md:text-[28px]">
              <span className="text-[#032853]">What Makes ResellX</span>
              <span className="text-[#628FFF]">&nbsp;Unique?</span>
            </div>

            <span className="font-medium w-full max-w-[300px] md:max-w-[400px] xl:max-w-full text-center xl:text-start text-[16px] text-[#7A8CA1]">
              ResellX was custom built to best serve YOU. We listed what we
              think are some of our best attributes.
            </span>
          </div>

          <div className="flex flex-col gap-[50px] pt-[50px] px-10">
            <div className="flex w-full gap-[100px] flex-wrap justify-center">
              <div className="flex flex-col gap-[25px]">
                <div className="flex items-center justify-center bg-[#F0F0F0] w-[44px] h-[44px] rounded-[5px]">
                  <Assets.Bell />
                </div>

                <div className="flex flex-col w-full max-w-[417px] gap-[5px]">
                  <span className="font-bold text-[23px] text-[#032853]">
                    PricePing
                  </span>

                  <span className="font-medium w-full max-w-[250px] xl:max-w-full text-[16px] text-[#7A8CA1]">
                    Get pinged about restocks and releases that match your
                    defined PriceTools criteria.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[25px]">
                <div className="flex items-center justify-center bg-[#F0F0F0] w-[44px] h-[44px] rounded-[5px]">
                  <Assets.ArrowClick />
                </div>

                <div className="flex flex-col w-full max-w-[417px] gap-[5px]">
                  <span className="font-bold text-[23px] text-[#032853]">
                    Ease of Use
                  </span>

                  <span className="font-medium w-full max-w-[250px] xl:max-w-full text-[16px] text-[#7A8CA1]">
                    An Intuitive website interface and simple webhooks provide
                    the ability to make the split-second decisions that define
                    whether you cop or drop a product.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-[100px] flex-wrap justify-center">
              <div className="flex flex-col gap-[25px]">
                <div className="flex items-center justify-center bg-[#F0F0F0] w-[44px] h-[44px] rounded-[5px]">
                  <Assets.CardPen />
                </div>

                <div className="flex flex-col w-full max-w-[417px] gap-[5px]">
                  <span className="font-bold text-[23px] text-[#032853]">
                    Price Tools
                  </span>

                  <span className="font-medium w-full max-w-[250px] xl:max-w-full text-[16px] text-[#7A8CA1]">
                    Know a product’s retail prices, resell prices, and your
                    profit margins thanks to ResellX.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[25px]">
                <div className="flex items-center justify-center bg-[#F0F0F0] w-[44px] h-[44px] rounded-[5px]">
                  <Assets.LightningBolt />
                </div>

                <div className="flex flex-col w-full max-w-[417px] gap-[5px]">
                  <span className="font-bold text-[23px] text-[#032853]">
                    Industry Leading Speed
                  </span>

                  <span className="font-medium w-full max-w-[250px] xl:max-w-full text-[16px] text-[#7A8CA1]">
                    You’ll be the first to know when something drops and if it’s
                    worth your investment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonies />

      <div
        id="pricing"
        className="flex justify-center bg-white pt-[70px] border-t-2 border-[#00]/[.1] overflow-hidden"
      >
        <div className="flex flex-col items-center w-full">
          <Plans />

          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Landing;
