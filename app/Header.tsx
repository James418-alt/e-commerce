"use client";
import { Menu, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FcCancel } from "react-icons/fc";
import {
  MdArrowLeft,
  MdArrowRight,
  MdCancel,
  MdDangerous,
  MdSwipeLeft,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./Global/redux";

const Header = () => {
  const cart = useSelector((state: any) => {
    return state.reducer.cart;
  });
  const dispatch = useDispatch();

  const navs = [
    { id: 0, name: "Shop" },
    { id: 1, name: "Category" },
    { id: 2, name: "Store" },
  ];
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <main>
      <div className="flex fixed bg-white justify-between w-full items-center px-[40px] py-[20px] border shadow-sm">
        <div className="flex gap-5 items-center">
          <div className="md:flex gap-5 hidden">
            {navs.map((el) => (
              <nav
                className="hover:shadow-md p-1 cursor-default font-light text-[15px]  text-gray-500"
                key={el.id}
              >
                {el.name}
              </nav>
            ))}
          </div>
          <div>
            <Menu
              onClick={() => {
                setShow(!show);
              }}
              className="block md:hidden"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[20px] ml-[-120px] hidden md:block">
            S A V O Y
          </h1>
        </div>
        {toggle ? (
          <></>
        ) : (
          <>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className="relative cursor-default"
            >
              <ShoppingCartIcon />
              {cart.length === 0 ? (
                ""
              ) : (
                <div className="bg-red-600 rounded-full absolute bottom-3 left-3 flex justify-center items-center w-[20px] h-[20px]">
                  <p className="text-white font-semibold text-[12px]">
                    {cart?.length}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="pt-[80px] bg-white flex flex-col gap-2 px-[40px] justify-start w-full">
        {show ? (
          <div className="md:hidden">
            {navs.map((el) => (
              <nav
                className=" p-1 hover:shadow-sm cursor-default font-light text-[15px]  text-gray-500"
                key={el.id}
              >
                <div>{el.name}</div>
              </nav>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      {toggle ? (
        <>
          {" "}
          <div className="fixed mt-[-80px] ">
            <div className=" md:grid flex flex-wrap md:grid-cols-3 w-[100vw] overflow-x-auto h-[100vh]">
              <div className="md:col-span-2 w-[10%] md:w-full  col-span-1 bg-gray-400 bg-opacity-20"></div>
              <div className="relative w-full col-span-3 md:col-span-1 bg-gray-700 p-3">
                <div className="flex justify-end p-5">
                  {" "}
                  <h1
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    className="text-white font-semibold text-[16px] border-b w-full flex justify-end pb-5 border-gray-500 cursor-default"
                  >
                    Close
                  </h1>
                </div>

                <div>
                  {cart.length === 0 ? (
                    <h1 className="text-[12px] text-gray-300 flex justify-center items-center mt-6">
                      You Don't have any Item in Cart
                    </h1>
                  ) : (
                    <>
                      {cart.map((el: any) => (
                        <div
                          key={el.id}
                          className="text-gray-200 px-[20px] text-[12px] font-normal mb-7 flex justify-between items-center"
                        >
                          <div className="flex gap-3 items-center">
                            <Image
                              className=" h-[100px] w-[80px] object-cover object-right bg-gray-100"
                              src={el.image}
                              alt="#"
                              width={1000}
                              height={1000}
                            />

                            <div className="flex flex-col gap-3">
                              <h1 className="text-[18px] font-normal">
                                {el.title}
                              </h1>
                              <div className="flex items-center">
                                <h1 className="font-light text-[15px]">Qty</h1>
                                <div className="flex items-center">
                                  <MdArrowLeft className="w-[40px] h-[40px] mr-[-10px]" />
                                  <h2>{el.qty}</h2>
                                  <MdArrowRight className="w-[40px] h-[40px] ml-[-10px]" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-14 md:gap-8  md:mb-[23px]">
                            <MdDangerous
                              onClick={() => dispatch(removeFromCart(el))}
                              className="text-[23px]"
                            />
                            <p className="text-[13px] font-light">{el.price}</p>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Header;
