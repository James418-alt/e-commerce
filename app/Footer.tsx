import React from "react";

const Footer = () => {
  const navs = [
    { id: 0, name: "About Us" },
    { id: 1, name: "Blog" },
    { id: 2, name: "FAQs" },
    { id: 3, name: "Order Tracking" },
    { id: 4, name: "Contact" },
    { id: 5, name: "By Gomenti" },
  ];
  return (
    <div className="">
      <div className="bg-[#454242] flex-col flex md:flex-row gap-3 text-gray-300 text-[13px] mt-7 font-medium py-[35px] px-[40px]">
        {navs.map((el: any) => (
          <div
            className="border-b border-gray-400 pb-2 cursor-default md:border-none"
            key={el.id}
          >
            <h1>{el.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
