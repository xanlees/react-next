import React from "react";
import PredictPaymentLoseHightop from "./Predictlose_high_top";
import PredictPaymentLoseLowtop from "./Predictlose_low_top";
import PredictPaymentLoseHighbottom from "./Predictlose_high_bottom";
import PredictPaymentLoseLowbottom from "./Predictlose_low_bottom";

const index = ({ high_top, low_top, high_bottom, low_bottom }) => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        <div className=" w-full">
          <PredictPaymentLoseLowtop low_top={low_top} />
        </div>

        <div className="w-full">
          <PredictPaymentLoseLowbottom low_bottom={low_bottom} />
        </div>
        <div className="w-full">
          <PredictPaymentLoseHightop high_top={high_top} />
        </div>

        <div className=" w-full">
          <PredictPaymentLoseHighbottom high_bottom={high_bottom} />
        </div>
      </div>
    </div>
  );
};

export default index;
