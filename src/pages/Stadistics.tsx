import HandPhone from "../assets/img/Hand&Phone.svg";
import Doodle2 from "../assets/img/Doodle2.svg";

const Stadistics = () => {
  return (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col z-1">
        <p className="text-title text-[30px] font-extrabold leading-[44px] h-[32px] mt-[44px] ms-[30px] mb-[5px] z-10">
          Stadistics
        </p>
        <p className="text-title text-[14px] font-normal leading-[15px] ms-[30px] z-10">
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
      <div className="w-container min-h-container-2 max-h-container-2 fold-horizontal:min-h-fold-2 fold-horizontal:max-h-fold-2 absolute bg-[#FFFFFF] rounded-t-[40px] shadow-container left-[50%] bottom-[0px] translate-x-[-50%] flex flex-wrap justify-center items-start pb-[107px] shadow:pb-[82px] overflow-y-scroll">
        {" "}
        <div className="w-[152px] h-[141px] bg-[#F5F6F7] mt-[20px] me-[11px] rounded-[20px] fold:me-0">
          <p className="text-title font-black h-[22px] text-[15px] mt-[15px] ms-[15px] mb-[5px]">
            TOTAL OF USERS
          </p>
          {/* HR */}
          <div className="w-[122px] h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            Mentees <span className="ms-[42px] font-normal">750</span>
          </p>
          <div className="w-[122px] h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            Mentors <span className="ms-[44px] font-normal">250</span>
          </p>
          <div className="w-[122px] h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            Total users <span className="ms-[17px] font-normal">1000</span>
          </p>
        </div>
        <div className="w-[152px] h-[141px] bg-[#F5F6F7] mt-[20px] rounded-[20px]">
          <p className="text-title font-black h-[22px] text-[15px] mt-[15px] ms-[15px] mb-[5px]">
            NEW USERS
          </p>
          {/* HR */}
          <div className="w-[122px] h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[7px]"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            New mentees <span className="ms-[28px] font-normal">7</span>
          </p>
          <div className="w-[122px] h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            New mentors <span className="ms-[21px] font-normal">10</span>
          </p>
          <div className="w-[122px] h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="h-[21px] text-title text-[14px] font-bold ms-[15px] mb-[2px]">
            Total users <span className="ms-[34px] font-normal">17</span>
          </p>
        </div>
        <div className="w-container-2 h-[284px] bg-[#F5F6F7] mt-[11px] rounded-[20px]">
          <p className="text-title text-[15px] font-black h-[22px] ms-[15px] mt-[15px] mb-[5px]">
            SIGN UPS PER MONTH
          </p>
          {/* HR */}
          <div className="w-hr h-[0px] border-b-[1px] border-dashed border-title mx-auto mb-[8px]"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mb-[5.49px]">
            1k
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[6.44px] mb-[8.05px]">
            500
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[4.79px] mb-[5.7px]">
            400
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[7.14px] mb-[7.35px]">
            300
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[5.5px] mb-[4.99px]">
            200
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[7.85px] mb-[6.64px]">
            100
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
          <p className="text-title text-[12px] h-[16.51px] font-normal ms-[15px] mt-[6.2px] mb-[4.29px]">
            50
          </p>
          <div className="w-hr h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto relative">
            <div className="w-[100%] h-[17px] flex justify-between absolute top-[6px]">
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px] ms-[26px]">
                jan
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                feb
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                mar
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                abr
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                may
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                jun
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                jul
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                aug
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                sep
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                oct
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                nov
              </p>
              <p className="text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                dec
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadistics;
