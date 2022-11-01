import React from "react";
import Card from "./Card";
import Link from "next/link";

export default function index({ lotteries }) {
  return (
    <section className="">
      <div className="container my-12 mx-auto px-4 md:px-12 bg-white shadow-2xl rounded-lg mr-20 ">
        <h1 className="text-4xl pt-3 text-red-600 font-bold">Lao Lotto</h1>
        <div className="flex flex-wrap mx-3 lg:-mx-4">
          {/* <div className="flex flex-wrap mx-3 lg:-mx-4 md:gap-x-1"> */}
          {lotteries?.map((item, index) => {
            console.log("day", lotteries[0].lottery_day[0].days);
            console.log(
              "time",
              lotteries[0].lottery_day[0].lottery_time[0].closing_date
            );

            return (
              <>
                <Link
                  href={
                    item.period[0].is_online
                      ? `/buy-lottery/${item.period[0].id}`
                      : ""
                  }
                >
                  <a className="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:w-1/3 ">
                    <Card
                      key={index}
                      lotteries={item}
                      is_online={
                        item.period[0].is_online ? "Open now" : "Close now"
                      }
                      image={item.thumbnail}
                      code={item.code}
                      name={item.name}
                      date_open={item.period[0].date_open}
                      period_number={item.period[0].period_number}
                      closing_time={item.period[0].closing_time}
                    />
                  </a>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
