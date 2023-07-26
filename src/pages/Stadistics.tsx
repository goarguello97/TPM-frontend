import HandPhone from "../assets/img/Hand&Phone.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
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
import { faker } from "@faker-js/faker";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import getGradient from "../hooks/useGradientHook";
import useChartHook from "../hooks/useChartHook";

const Stadistics = () => {
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
        min: 50,
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
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "juli",
    "ago",
    "oct",
    "nov",
    "dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
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
    <div className="h-[100vh] bg-[#F5F6F7] flex justify-center items-start">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background rounded-br-[45px] absolute flex flex-col z-1">
        <p className="text-title text-[30px] fold-horizontal:text-[20px] font-extrabold leading-[44px] h-[32px] mt-[44px] ms-[30px] mb-[5px] z-10 fold-horizontal:mt-[10px] fold-horizontal:leading-[25px]">
          Stadistics
        </p>
        <p className="text-title text-[14px] fold-horizontal:text-[10px] font-normal leading-[15px] ms-[30px] z-10">
          Check all the activity <br /> of you page
        </p>
        <img
          src={HandPhone}
          alt="Hand&Phone"
          className="w-[225px] absolute bottom-[0px] right-[10px] z-[2]"
        />
        <img
          src={Doodle2}
          alt="Doodle2"
          className="w-[137.92px] absolute bottom-[0px] left-[-30px]"
        />
      </div>

      {/* Contenedor principal */}
      <div className="w-container h-container-2 fold-horizontal:min-h-fold-2 fold-horizontal:max-h-fold-2 fold-horizontal:mt-[110px] bg-[#FFFFFF] rounded-t-[40px] shadow-container mt-[249px] absolute left-[50%] translate-x-[-50%] flex justify-center flex-wrap shadow:pb-[82px] overflow-y-scroll">
        {width > 280 ? (
          <>
            {/* TOTAL OF USERS */}
            <div className="w-container-card-stadistics-mobile h-[141px] bg-[#F5F6F7] mt-[20px] me-[5.5px] rounded-[20px] fold:me-0">
              <p className="text-title font-black h-[22px] text-[15px] mt-[15px] ms-[15px] mb-[5px]">
                TOTAL OF USERS
              </p>
              {/* HR */}
              <div className="w-hr h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                Mentees <span className="ms-[42px] font-normal">750</span>
              </p>
              <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                Mentors <span className="ms-[44px] font-normal">250</span>
              </p>
              <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                Total users <span className="ms-[17px] font-normal">1000</span>
              </p>
            </div>
            {/* NEW USERS */}
            <div className="w-container-card-stadistics-mobile h-[141px] bg-[#F5F6F7] mt-[20px] rounded-[20px]">
              <p className="text-title font-black h-[22px] text-[15px] mt-[15px] ms-[15px] mb-[5px]">
                NEW USERS
              </p>
              {/* HR */}
              <div className="w-hr h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                New mentees <span className="ms-[28px] font-normal">7</span>
              </p>
              <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                New mentors <span className="ms-[21px] font-normal">10</span>
              </p>
              <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
                Total users <span className="ms-[34px] font-normal">17</span>
              </p>
            </div>
            {/* SIGN UPS PER MONTH */}
            <div className="w-container-2 h-container-card-stadistics-mobile bg-[#F5F6F7] mb-[107px] fold-horizontal:mt-[5px] fold-horizontal:h-auto fold-horizontal:mb-[0px] rounded-[20px] relative">
              <Bar
                options={options}
                data={data}
                className="min-w-full w-full min-h-full rounded-[20px] bg-[#F5F6F7] "
              />
            </div>
          </>
        ) : (
          <>
            {/* TOTAL OF USERS */}
            <div className="w-container-card-stadistics-mobile-fold h-[141px] bg-[#F5F6F7] mt-[20px] me-[5px] rounded-[20px]">
              <p className="text-title font-black h-[22px] text-[14px] mt-[15px] ms-[5px] mb-[5px]">
                TOTAL OF USERS
              </p>
              {/* HR */}
              <div className="w-hr3 h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                Mentees <span className="ms-[42px] font-normal">750</span>
              </p>
              <div className="w-hr3 h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                Mentors <span className="ms-[44px] font-normal">250</span>
              </p>
              <div className="w-hr3 h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                Total users <span className="ms-[17px] font-normal">1000</span>
              </p>
            </div>
            {/* NEW USERS */}
            <div className="w-container-card-stadistics-mobile-fold h-[141px] bg-[#F5F6F7] mt-[20px] rounded-[20px]">
              <p className="text-title font-black h-[22px] text-[14px] mt-[15px] ms-[5px] mb-[5px]">
                NEW USERS
              </p>
              {/* HR */}
              <div className="w-hr3 h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                New mentees <span className="ms-[28px] font-normal">7</span>
              </p>
              <div className="w-hr3 h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                New mentors <span className="ms-[21px] font-normal">10</span>
              </p>
              <div className="w-hr3 h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
              <p className="w-full h-[21px] text-title text-[12px] font-bold ps-[5px] pe-[5px] mb-[2px] flex justify-between">
                Total users <span className="ms-[34px] font-normal">17</span>
              </p>
            </div>
            {/* SIGN UPS PER MONTH */}
            <div className="w-container-3 h-container-card-stadistics-mobile bg-[#F5F6F7] mb-[107px] rounded-[20px] relative">
              <div className="w-hr3 h-[0px] border-b-[1px] border-dashed border-title mb-[35px] absolute top-[35px] left-[50%] translate-x-[-50%]"></div>
              <Bar
                options={options}
                data={data}
                className="min-w-full w-full min-h-full rounded-[20px] bg-[#F5F6F7] "
              />
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background ps-[272px] flex items-start">
      <div className="w-container-desktop-2 h-container-desktop-2 max-h-[864px] bg-white rounded-[35px] shadow-container-desktop-2 relative mt-[40px]">
        {/* Encabezado */}
        <div className="w-[100%] h-[184px] bg-[#F5F6F7] rounded-t-[35px] absolute z-10">
          <div className="w-[292px] h-[89px]">
            <p className="w-[129px] h-[73px] text-title text-[50px] font-medium leading-[73.44px] absolute top-[40px] left-[65px]">
              Stadistics
            </p>
            <p className="h-[29px] text-title text-[20px] font-normal leading-[29.38px] absolute top-[100px] left-[65px]">
              Check all the activity of you page
            </p>
          </div>
        </div>
        {/* Contenedor Principal */}
        <div className="w-container-desktop-3 h-container-desktop-3 mt-[138px] mx-auto pt-[109px] pb-[20px] rounded-[40px] bg-[#FFF] shadow-container-desktop-3 absolute z-20 left-[50%] translate-x-[-50%] flex justify-center flex-wrap">
          {/* Imagenes */}
          <img
            src={HandPhone}
            alt="HandPhone"
            className="w-[308.981px] absolute right-[-35px] top-[-200px] z-10"
          />
          <img
            src={Doodle2}
            alt="Doodle2"
            className="w-[197.984px] absolute right-[235px] top-[-105px]"
          />
          {/* Tarjetas */}
          {/* TOTAL USERS */}
          <div className="w-container-card-stadistics max-w-[500px] h-[197px] rounded-[20px] bg-[#F5F6F7] shadow-container-desktop-3 me-[18px]">
            <p className="w-[159px] h-[22px] text-title font-black text-[20px] mt-[10px] ms-[35px] mb-[10px] leading-normal">
              TOTAL OF USERS
            </p>
            {/* HR */}
            <div className="w-hr-desktop h-[0px] border-b-[1px] border-dashed border-title mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              Mentees
              <span className="text-[14px] font-normal me-[35px]">750</span>
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              Mentors
              <span className="text-[14px] font-normal me-[35px]">250</span>
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              Total users
              <span className="text-[14px] font-normal me-[35px]">1000</span>
            </p>
          </div>
          {/* NEW USERS */}
          <div className="w-container-card-stadistics max-w-[500px] h-[197px] rounded-[20px] bg-[#F5F6F7] shadow-container-desktop-3 z-20">
            <p className="w-[159px] h-[22px] text-title font-black text-[20px] mt-[10px] ms-[35px] mb-[10px] leading-normal">
              NEW USERS
            </p>
            {/* HR */}
            <div className="w-hr-desktop h-[0px] border-b-[1px] border-dashed border-title mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              New mentees
              <span className="text-[14px] font-normal me-[35px]">7</span>
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              New mentors
              <span className="text-[14px] font-normal me-[35px]">10</span>
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <p className="w-[100%] h-[26px] text-[18px] ps-[35px] text-title font-bold mb-[5px] flex items-center justify-between">
              Total users
              <span className="text-[14px] font-normal me-[35px]">17</span>
            </p>
          </div>
          {/* SIGN UPS PER MONTH */}
          <div className="w-container-2 max-w-[1018px] max-h-[330.5px] rounded-[20px] bg-[#F5F6F7] shadow-container-desktop-3 relative">
            <div className="w-hr-desktop h-[0px] border-b-[1px] border-dashed border-title mx-auto ms-[25px] me-[25px] mb-[35px] absolute top-[42px]"></div>

            <Bar
              options={options}
              data={data}
              className=" w-full max-w-[1018px] max-h-[330.5px] rounded-[20px] bg-[#F5F6F7] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadistics;
