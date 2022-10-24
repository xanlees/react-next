import React from "react";
import PredictPaymentLoseWingtop from "./Predictlose_top_wing";
import PredictPaymentLoseWingbottom from "./Predictlose_bottom_wing";

const index = ({ upper, lower }) => {
  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="w-full">
          <PredictPaymentLoseWingtop upper={upper} />
        </div>
        <div className=" w-full">
          <PredictPaymentLoseWingbottom lower={lower} />
        </div>
      </div>
    </div>
  );
};

export default index;
