import React from "react";
import PredictPaymentLoseTwoLower from "./Predictlose_lower_2";
import PredictPaymentLoseTwoUpper from "./Predictlose_upper_2";

const index = ({ upper, lower }) => {
  //   console.log("upper", upper);

  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="w-full">
          <PredictPaymentLoseTwoUpper upper={upper} />
        </div>

        <div className=" w-full ">
          <PredictPaymentLoseTwoLower lower={lower} />
        </div>
      </div>
    </div>
  );
};

export default index;
