import React from "react";
import PredictPaymentLoseTwoLower from "./Predictlose_lower_2";
import PredictPaymentLoseTwoUpper from "./Predictlose_upper_2";

const index = ({ upper, lower }) => {
  //   console.log("upper", upper);

  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="relative translate-x-96">
          <PredictPaymentLoseTwoUpper upper={upper} />
        </div>

        <div className=" relative translate-x-96 px-40 ">
          <PredictPaymentLoseTwoLower lower={lower} />
        </div>
      </div>
    </div>
  );
};

export default index;
