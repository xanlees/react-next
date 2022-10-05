import React from 'react'
import CustomerLayout from '../../layouts/CustomerLayout'
import LotteryList from '../../components/LotteryList'



export default function index() {
  return (
     <>
     <CustomerLayout>
        <LotteryList />
     </CustomerLayout>
     </>
  )
}

LotteryList.defaultProps = {
    lotteries: [
        {
          image: "https://www.laos-guide-999.com/images/Flag-of-LaoPDR.png",
          name: "Lao Dev",
          code: "Code: L001",
          open_date: "12/10/2022",
          closing_time: "12:30:30",
        },
        {
          image: "https://www.laos-guide-999.com/images/Flag-of-LaoPDR.png",
          name: "Lao Lotto",
          code: "Code: L002",
          open_date: "12/10/2022",
          closing_time: "20:30:00",
        },
      ],
  };