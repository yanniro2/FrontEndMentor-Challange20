import React from 'react'
import "./index.css"
function BarChart({ data, value, max })
{


    const height = `h-[${value}px]`;
    const CheckMax = (data.amount === max ? `w-[2rem] bg-Cyan ${height} rounded-sm transistion-all hover:bg-light-Cyan` : `w-[2rem] bg-Soft-red ${height} transition-all rounded-sm hover:bg-light-red  `)
    console.log(value);
    return (
        <div className='w-full flex flex-col items-center justify-end gap-1 group cursor-pointer'>
            <div className=' bg-Dark-brown text-[#fff] font-xl p-1 rounded text-[12px] hidden group-hover:block transition-all cursor-pointer opacity-0 group-hover:opacity-100'>${data.amount}</div>
            <div className={CheckMax}></div>
            <small className=' text-Medium-brown'>{data.day}</small>

        </div>
    )
}

export default BarChart
