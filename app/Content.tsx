"use client";
import React, { useState } from "react";
import { data } from "../data";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addToCart } from "./Global/redux";

const Content = () => {
  let datas = useSelector((state: any) => {
    return state.reducer.prodct;
  });
  let cart = useSelector((state: any) => {
    return state.reducer.cart;
  });
  const dispatch = useDispatch();
  const datad = dispatch(addProduct(data));

  return (
    <div className="px-[40px] mt-[-70px] z-1">
      <div className="grid grid-cols-1 pt-[100px] md:pt-[120px] md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {datad.payload?.map((el: any) => (
          <div key={el.id} className="flex flex-col gap-2 ">
            <Image
              src={el.image}
              alt="#"
              width={1000}
              height={1000}
              className=" h-[340px] object-cover object-right bg-gray-100"
            />
            <h1 className=" text-gray-500 font-light ">{el.title}</h1>
            <div className="font-medium text-[14px] text-gray-800">
              <p>{el.price}</p>
              <p
                onClick={() => {
                  dispatch(addToCart(el));
                }}
                className="underline text-[12px] font-light cursor-pointer text-gray-600"
              >
                Add To Cart
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
