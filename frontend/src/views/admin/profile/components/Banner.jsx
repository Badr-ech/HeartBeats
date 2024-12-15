import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import doliprane from "assets/img/dashboards/doliprane.png";
import Card from "components/card";
import { useFetch } from "hooks/api";

const Banner = ({ medecine }) => {
  return (
    <Card extra={"items-center w-[300px] h-full p-[16px] bg-cover"}>
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700"></div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {medecine?.name}
        </h4>
      </div>

      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {medecine?.quantity}
          </p>
          <p className="text-sm font-normal text-gray-600">Available</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {medecine?.price}
          </p>
          <p className="text-sm font-normal text-gray-600">Stock</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            {medecine?.usedNumberPerDay}/1
          </p>
          <p className="text-sm font-normal text-gray-600">Day</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
