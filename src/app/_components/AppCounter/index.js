"use client";
import { useCountUp } from "use-count-up";

const AppCounter = ({end, duration}) => {
  const { value } = useCountUp({
    isCounting: true,
    end: end,
    duration: duration,
    easing: "linear"
  });
  return <p className="mb-0 counter text-white">{value}</p>;
};

export default AppCounter;
