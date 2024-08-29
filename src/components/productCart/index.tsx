import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { DataType } from "@/types/data.types";

const CartBox = ({ data }: { data: DataType }) => {
  return (
    <div className="w-full min-w-[150px] max-w-[200px] flex flex-col gap-y-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <Link href="/">
        <div className="relative w-full h-[152px] bg-[#F4F6F7] rounded-lg overflow-hidden">
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={161}
            height={152}
            className="w-auto h-[152px] object-cover brightness-100 hover:brightness-90 transition duration-300"
          />
          <div className="absolute bg-[#FF4444] text-white rounded-xl font-semibold bottom-1.5 px-2.5 py-0.5">
            -{data.discountPercentage.toFixed(0)}%
          </div>
        </div>
        <div className="line-clamp-2">{data.description}</div>
        <div className="line-through text-[#A5B1BB]">{data.price}$</div>
        <div className="text-[#FF4444] text-base">
          {(data.price - (data.price * data.discountPercentage) / 100).toFixed(
            2
          )}
          $
        </div>
      </Link>
      <Button text="Savatga" icon="savat" />
    </div>
  );
};

export default CartBox;
