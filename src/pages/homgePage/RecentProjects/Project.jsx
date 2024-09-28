import React from "react"
export function Project({ img, title, article }) {
  return (


    <div className="flex flex-col items-start text-left rounded-lg gap-6 text-darkBlue cursor-pointer hover:shadow-2xl   ">
      <img src={img} alt="recent projects" className="object-cover w-[100%] h-[40vh] rounded-tl-lg rounded-tr-lg" />
      <div className="flex flex-col gap-5 px-6 py-5">
        <h3 className="font-bold text-lg font-montserrat" >{title}</h3>
        <article className="font-poppins font-normal">{article}</article>
      </div>
    </div>
  )
};
