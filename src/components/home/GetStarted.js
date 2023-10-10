import React from "react";
import styles from "../../style";
import { arrowUp } from "../../assets";


const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r rom-sky-500 to-indigo-500">Get</span>
                </p>
                <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r rom-sky-500 to-indigo-500">Started</span>
            </p>
        </div>
    </div>
)


export default GetStarted;