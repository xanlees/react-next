import React from "react";
import PredictPaymentLoseEvennumbertop from "./Predictlose_Evennumber_top";
import PredictPaymentLosePrimenumbertop from "./Predictlose_Primenumber_top";
import PredictPaymentLoseEvennumberbottom from "./Predictlose_Evennumber_bottom";
import PredictPaymentLosePrimenumberbottom from "./Predictlose_Primenumber_bottom";

const index = ({
  evennumber_top,
  primenumber_top,
  evennumber_bottom,
  primenumber_bottom,
}) => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        <div className="w-full">
          <PredictPaymentLoseEvennumbertop evennumber_top={evennumber_top} />
        </div>

        <div className="w-full">
          <PredictPaymentLoseEvennumberbottom
            evennumber_bottom={evennumber_bottom}
          />
        </div>

        <div className=" w-full">
          <PredictPaymentLosePrimenumbertop primenumber_top={primenumber_top} />
        </div>

        <div className=" w-full">
          <PredictPaymentLosePrimenumberbottom
            primenumber_bottom={primenumber_bottom}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
