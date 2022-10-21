import React from "react";
import Card from "./Card";

export default function index({ lotteries }) {
  return (
    <section className="">
      <div className="container my-12 mx-auto px-4 md:px-12 bg-white shadow-2xl rounded-lg mr-20 ">
        <h1 className="text-4xl pt-3 text-red-600 font-bold">Lao Lotto</h1>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {lotteries?.map((item, index) => {
            return (
              <>
                <Card key={index} lotteries={item} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
