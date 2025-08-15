import React from "react";
import { topProductsData } from "../../Data/index";
import ContentHeader from "../ContentHeader";
import ChartComponent from "../Chart/LineChart";
import WrapperDiv from "./WrapperDiv";
const ProductDetails = () => {
  const tableHead = ["#", "Name", "Popularity", "Sales"];
  return (
    <div className="p-4">
      <ContentHeader title="Top Products" />
      <div className="w-full">
        <div>
          <div className="flex justify-between px-6 items-center">
            {tableHead.map((h, idx) => {
              return (
                <h1 key={idx} className="text-[13px] font-medium text-grayText">
                  {h}
                </h1>
              );
            })}
          </div>
          {topProductsData.map((t, idx) => {
            const color = () => t.color;
            return (
              <div
                key={t.id}
                className="text-white/80 w-full flex items-center justify-between gap-3 text-center text-[10px] font-medium px-6 border-b border-grayText/20"
              >
                <span className="py-3">{idx + 0}</span>
                <p className="w-[50%]">{t.name}</p>

                <div className="relative max-w-[25%] w-full h-[3px] rounded-full bg-grayText">
                  <div
                    style={{ background: t.color }}
                    className={`absolute top-0 left-0 ${
                      t.priority >= 20 && "w-[25%]"
                    } ${t.priority >= 50 && "[w-50%]"} ${
                      t.priority >= 80 && "w-[70%]"
                    } ${t.priority >= 90 && "w-[100%]"} rounded-full h-[3px]`}
                  ></div>
                </div>
                <button
                  className={`py-1 px-2 rounded-sm text-[${color()}]`}
                  style={{ border: `${t.color} 1px solid` }}
                >
                  {t.priority}%
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CoustomerFull = () => {
  return (
    <div className="w-full p-4">
      <ContentHeader title="Customer Full Fillment" />
      <div className="w-full">
        <ChartComponent />
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-grayText/20">
          <div>
            <button className="flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full">
              <span className="h-2 w-2 rounded-full bg-secondary "></span>Last
              Month
            </button>
            <p className="text-center text-[10px] font-medium text-white/70">
              $4958
            </p>
          </div>

          <div>
            <button className="flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full">
              <span className="h-2 w-2 rounded-full bg-secondary "></span>This
              Month
            </button>
            <p className="text-center text-[10px] font-medium text-white/70">
              $59876
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopProduct = () => {
  return (
    <div>
      <WrapperDiv>
        <div className="flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md">
          <ProductDetails />
        </div>
        <div className="flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md">
          <CoustomerFull />
        </div>
      </WrapperDiv>
    </div>
  );
};

export default TopProduct;
