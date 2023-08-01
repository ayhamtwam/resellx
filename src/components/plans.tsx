import Assets from "../assets";
import { PlanProps } from "../interfaces";

const Plan = ({ type, cost, items, index }: PlanProps) => {
  const styles = [
    "xl:border-r-0 rounded-[10px] xl:rounded-tr-[0px] xl:rounded-br-[0px]",
    "rounded-[10px] xl:rounded-[0px]",
    "rounded-[10px] xl:border-l-0 xl:rounded-tl-[0px] xl:rounded-bl-[0px]",
  ];

  return (
    <div
      className={`flex flex-col py-[40px] px-[25px] gap-[10px] border-[1.5px] ${styles[index]}`}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-[23px] text-[#7A8CA1]">{type}</span>

        <span className="font-semibold text-[56px] text-[#032853]">
          ${cost}/m
        </span>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="w-[255px] h-[1.5px] bg-[#CCCCCC]"></div>

        {items.map((item) => {
          return (
            <div className="flex items-start gap-[15px]">
              {item.contains ? <Assets.GreenCheck /> : <Assets.GrayX />}

              <span className="w-[255px] font-medium text-[14px] text-[#7A8CA1]">
                {item.info}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = [
    {
      type: "Free",
      cost: 0,
      items: [
        {
          contains: true,
          info: "Receive free release monitoring notifications from 10 preset websites via discord.",
        },
        {
          contains: false,
          info: "Customized ProfitPing settings.",
        },
      ],
    },
    {
      type: "Premium",
      cost: 9.99,
      items: [
        {
          contains: true,
          info: "Everything from the Free Plan",
        },
        {
          contains: true,
          info: "Customized ProfitPing preferences that automatically analyze profitability by checking retail prices against resell prices and show it on your webhooks!",
        },
        {
          contains: true,
          info: "Monitor custom Shopify websites.",
        },
      ],
    },
    {
      type: "Pro",
      cost: 14.99,
      items: [
        {
          contains: true,
          info: "Everything from the Premium Plan",
        },
        {
          contains: true,
          info: "Create custom monitoring groups, allowing you to get specific websites monitored in one convenient place!",
        },
        {
          contains: true,
          info: "Color coordinated ProfitPing webhooks, allowing you to know what you should, could, and will buy at the glance of an eye!",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex w-full max-w-[695px] flex-col items-center gap-[10px]">
        <span className="font-bold text-[28px] text-[#032853]">
          Our Pricing Plans
        </span>

        <span className="font-medium text-[16px] text-[#7A8CA1] text-center">
          Find a monthly plan that works for you!
        </span>
      </div>

      <div className="flex flex-col gap-[10px] xl:gap-[0px] xl:flex-row xl:h-[450px] bg-[#F0F0F0]/[.25]">
        {plans.map((plan, index) => {
          return (
            <Plan
              key={`plan-${index}`}
              type={plan.type}
              cost={plan.cost}
              items={plan.items}
              index={index}
            />
          );
        })}
      </div>

      <div className="flex items-center w-fit xl:w-full flex-col gap-[15px]">
        <button className="w-full h-[50px] bg-[#032853] rounded-[5px] font-semibold text-white text-[14.84px]">
          Try it Free
        </button>

        <span className="font-medium text-[16px] text-[#7A8CA1]">
          Payment starts at the end of the 7 day free trial.
        </span>
      </div>
    </div>
  );
};

export default Plans;
