import { useState } from "react";
import { NotificationProps } from "../interfaces";

const Notification = ({ title, info }: NotificationProps) => {
  const [dissapear, setDissapear] = useState(false);
  const [deleted, setDeleted] = useState(false);

  setTimeout(() => {
    setDissapear(true);
  }, 1000);

  setTimeout(() => {
    setDeleted(true);
  }, 1150);

  return (
    <div
      className={`flex flex-col justify-center px-[10px] bg-red-500 border border-[#CCCCCC] drop-shadow-md w-[275px] h-[65px] rounded-[7.5px] ${
        dissapear ? "opacity-0" : ""
      } ${deleted ? "hidden" : ""} transition-all`}
    >
      <span className="font-semibold text-white text-[16px]">{title}</span>
      <span className="font-semibold text-[#F0F0F0] text-[14px]">{info}</span>
    </div>
  );
};

export default Notification;
