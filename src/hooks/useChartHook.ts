import { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

const useChartHook = () => {
  const [styles, setStyles] = useState({
    layout: { padding: { top: 15, bottom: 9, left: 15, right: 15 } },
    title: { size: 15, padding: { bottom: 25 } },
    ticks: { y: { size: 12 }, x: { size: 11, minRotation: 90 } },
    bar: { width: 16 },
  });
  const { width } = useMediaQuery();

  useEffect(() => {
    if (width < 1024) {
      setStyles({
        layout: { padding: { top: 15, bottom: 9, left: 15, right: 15 } },
        title: { size: 15, padding: { bottom: 25 } },
        ticks: { y: { size: 12 }, x: { size: 11, minRotation: 90 } },
        bar: { width: 16 },
      });
    } else {
      setStyles({
        layout: {
          padding: {
            top: 15,
            bottom: 18,
            left: 35,
            right: 25,
          },
        },
        title: { size: 20, padding: { bottom: 45 } },
        ticks: { y: { size: 14 }, x: { size: 14, minRotation: 0 } },
        bar: { width: 30 },
      });
    }
  }, [width]);
  return styles;
};

export default useChartHook;
