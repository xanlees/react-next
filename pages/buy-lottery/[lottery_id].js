import React from "react";
// import BuyLottery from "../../components/BuyLottery/BuyTwoNumber";
import { useRouter } from "next/router";

export default function buyLottery() {
  const router = useRouter();
  const { lottery_id } = router.query;

  return <p>buyLottery: {lottery_id}</p>;
}
