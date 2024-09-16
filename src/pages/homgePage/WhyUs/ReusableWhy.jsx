import React from 'react'
import { Button } from "../../../components/Button"

export function ReusableWhy({ bg, img, article, head, icon, btn }) {

    console.log(img)

    return (
        <div className={`${bg} rounded-2xl justify-between flex py-[50px] px-[100px] gap-[150px] items-center text-white w-full`}>
            <div className="flex flex-col gap-[72px] items-start justify-start text-left">
                <div className="flex flex-col gap-8">
                    <div className='flex justify-center items-center rounded-lg bg-white *:w w-12 h-12 *:h-6 *:w-6 *:object-cover'><img src={icon} alt="" /></div>
                    <h3><b>{head}</b></h3>
                    <article>
                        {article}
                    </article>
                </div>
                <div className="*:w-[200px]">
                    <Button>{btn}</Button>
                </div>
            </div>
            <img src={img} alt={head} />
        </div>
    )

}
