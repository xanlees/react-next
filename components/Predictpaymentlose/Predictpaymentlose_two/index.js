import React from "react";
import PredictPaymentLoseTwotop from "./Predictlose_top_two";
import PredictPaymentLoseTwobottom from "./Predictlose_bottom_two";

const index = ({ upper, lower }) => {
  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="w-full">
          <PredictPaymentLoseTwotop upper={upper} />
        </div>
        <div className=" w-full">
          <PredictPaymentLoseTwobottom lower={lower} />
        </div>
      </div>
    </div>
  );
};

export default index;
