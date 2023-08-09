import useMediaQuery from "../hooks/useMediaQuery";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useChartHook from "../hooks/useChartHook";
import { useAppSelector } from "../hooks/useTypedSelector";
import getGradient from "../hooks/useGradientHook";
import { User } from "../interfaces/user.interfaces";

const BarCommon = ({ users }: { users: User[] | null }) => {
  const { width } = useMediaQuery();
  const styles = useChartHook();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "SIGN UPS PER MONTH",
        font: { size: styles.title.size, weight: "900" },
        color: "#444444",
        align: "start" as const,
        padding: {
          bottom: styles.title.padding.bottom,
        },
      },
    },
    layout: {
      padding: {
        top: styles.layout.padding.top,
        bottom: styles.layout.padding.bottom,
        left: styles.layout.padding.left,
        right: styles.layout.padding.right,
      },
    },
    scales: {
      y: {
        ticks: {
          display: true,
          color: "#444444",
          font: { size: styles.ticks.y.size, weight: "400" },
          // stepSize: 8,
          maxTicksLimit: 11,
          align: "end" as const,
        },
        grid: {
          drawTicks: false,
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: function (context: any) {
            return context?.index === 0 ? 0 : 0.5; // <-- this removes the base line
          },
          color: "rgba(68, 68, 68, 0.30)",
        },
        border: { display: false },
        beginAtZero: false,
        min: 0,
      },
      x: {
        ticks: {
          color: "#444444",
          font: { size: styles.ticks.x.size, weight: "400" },
          minRotation: styles.ticks.x.minRotation,
        },
        grid: {
          drawBorder: false,
          lineWidth: 0, // <-- this removes vertical lines between bars
        },
      },
    },
  };

  const labels = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(
          (label, index) =>
            users?.filter((usr) => {
              if (index < 10) {
                return (
                  Number(
                    usr.createdAt
                      .toString()
                      .substring(0, 10)
                      .split("-")[1]
                      .slice(1)
                  ) ==
                  index + 1
                );
              } else {
                return (
                  Number(
                    usr.createdAt.toString().substring(0, 10).split("-")[1]
                  ) ==
                  index + 1
                );
              }
            }).length
        ),
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return getGradient(chart);
        },
        barThickness: styles.bar.width,
      },
    ],
  };

  ChartJS.defaults.font.family = "Heebo";

  return width < 1024 ? (
    <Bar
      options={options}
      data={data}
      className="min-w-full w-full min-h-full rounded-[20px] bg-[#F5F6F7] "
    />
  ) : (
    <Bar
      options={options}
      data={data}
      className=" w-full max-w-[1018px] max-h-[330.5px] rounded-[20px] bg-[#F5F6F7] "
    />
  );
};

export default BarCommon;
