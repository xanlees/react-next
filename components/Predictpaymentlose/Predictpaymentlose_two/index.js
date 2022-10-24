import React from "react";
import PredictPaymentLoseTwotop from "./Predictlose_top_two";
import PredictPaymentLoseTwobottom from "./Predictlose_bottom_two";

const index = ({ top, bottom }) => {
  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="w-full">
          <PredictPaymentLoseTwotop top={top} />
        </div>
        <div className=" w-full">
          <PredictPaymentLoseTwobottom bottom={bottom} />
        </div>
      </div>
    </div>
  );
};

export default index;
