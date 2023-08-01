import Assets from "../assets";

const MonitoredSites = () => {
  return (
    <div className="flex flex-col items-center pt-[125px] md:pt-[200px] lg:pt-[235px] pb-[70px] gap-[15px] md:gap-[37.5px]">
      <span className="font-semibold text-[15px] text-[#7A8CA1] text-center">
        Built to monitor your favorite sites as fast as possible!
      </span>

      <Assets.MonitoredSiteImages />
    </div>
  );
};

export default MonitoredSites;
