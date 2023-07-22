import HandPhone from "../assets/img/Hand&Phone.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Stadistics = () => {
  const { width } = useMediaQuery();

  return width < 1024 ? (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col z-1">
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
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px] ms-[26px]">
                jan
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                feb
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                mar
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                abr
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                may
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                jun
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                jul
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                aug
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                sep
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                oct
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                nov
              </p>
              <p className="w-[19px] h-[16px] text-center text-title text-[11px] font-normal rotate-[-90deg] fold:text-[9px]">
                dec
              </p>
            </div>
            <div className="w-[100%] h-auto flex ps-[26px] absolute justify-between items-end bottom-[0px]">
              <div className="w-[16px] h-[19px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-[5px]"></div>
              <div className="w-[16px] h-[46px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[111px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[94px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[73px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[46px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[15px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[106px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[155px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[135px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[189px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              <div className="w-[16px] h-[168px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
            </div>
          </div>
        </div>
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
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">Mentees</p>
              <p className="text-[14px] font-normal me-[35px]">750</p>
            </div>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">Mentors</p>
              <p className="text-[14px] font-normal me-[35px]">250</p>
            </div>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">Total users</p>
              <p className="text-[14px] font-normal me-[35px]">1000</p>
            </div>
          </div>
          {/* NEW USERS */}
          <div className="w-container-card-stadistics max-w-[500px] h-[197px] rounded-[20px] bg-[#F5F6F7] shadow-container-desktop-3 z-20">
            <p className="w-[159px] h-[22px] text-title font-black text-[20px] mt-[10px] ms-[35px] mb-[10px] leading-normal">
              NEW USERS
            </p>
            {/* HR */}
            <div className="w-hr-desktop h-[0px] border-b-[1px] border-dashed border-title mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">New mentees</p>
              <p className="text-[14px] font-normal me-[35px]">7</p>
            </div>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">New mentors</p>
              <p className="text-[14px] font-normal me-[35px]">10</p>
            </div>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto ms-[25px] me-[25px] mb-[14px]"></div>
            <div className="w-[100%] h-[26px] text-title text-[14px] font-bold mb-[5px] flex items-center justify-between">
              <p className="h-[26px] text-[18px] ms-[35px]">Total users</p>
              <p className="text-[14px] font-normal me-[35px]">17</p>
            </div>
          </div>

          {/* SIGN UPS PER MONTH */}
          <div className="w-container-2 max-w-[1018px] min-h-[300px] h-[auto] max-h-[423px] rounded-[20px] bg-[#F5F6F7] shadow-container-desktop-3">
            <p className="text-title text-[20px] font-black h-[22px] ms-[35px] mt-[10px] mb-[10px]">
              SIGN UPS PER MONTH
            </p>
            {/* HR */}
            <div className="w-hr-desktop h-[0px] border-b-[1px] border-dashed border-title mx-auto ms-[25px] me-[25px] mb-[35px]"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mb-[7px]">
              1k
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              500
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              400
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              300
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              200
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              100
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto"></div>
            <p className="text-title text-[14px] h-[16.51px] font-normal ms-[15px] mt-[7px] mb-[7px]">
              50
            </p>
            <div className="w-hr-desktop h-[0px] border-b-[0.5px] border-[rgba(68, 68, 68, 0.3)] mx-auto relative">
              <div className="w-[100%] h-[17px] flex justify-between absolute top-[6px]">
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px] ms-[26px]">
                  jan
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  feb
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  mar
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  abr
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  may
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  jun
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  jul
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  aug
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  sep
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  oct
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  nov
                </p>
                <p className="w-[30px] text-center text-title text-[14px] font-normal fold:text-[9px]">
                  dec
                </p>
              </div>
              <div className="w-[100%] h-auto flex ps-[26px] absolute justify-between items-end bottom-[0px]">
                <div className="w-[30px] h-[19px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-[5px]"></div>
                <div className="w-[30px] h-[46px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[111px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[94px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[73px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[46px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[15px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[106px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[155px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[135px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[189px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
                <div className="w-[30px] h-[168px] bg-gradient-to-t from-[#39B54A] to-[#BFD732] rounded-t-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadistics;
