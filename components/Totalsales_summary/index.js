import React from "react";
import Totalsale_Summary_top from "./Totalsales_summary_top";
import Totalsale_Summary_bottom from "./Totalsales_summary_bottom";

const index = ({ totalsales_summary_top, totalsales_summary_bottom }) => {
  return (
    <div>
      {/* <div className=" px-10">
        <h1 className=" font-semibold form-input-element-xl">ຊື່ Lao lootery VIP ງວດ 23/10/2022</h1>
      </div> */}
      <div className="flex  flex-col-2">
        <div className="w-full">
          <Totalsale_Summary_top
            totalsales_summary_top={totalsales_summary_top}
          />
        </div>
        <div className=" w-full">
          <Totalsale_Summary_bottom
            totalsales_summary_bottom={totalsales_summary_bottom}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
