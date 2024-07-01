// import { useEffect, useState } from "react";

// //destructure
// const Countdown = ({ duration })=>{
//     const[time,setTime] = useState(duration);
// //jab bge time change hoga toh ise effect run hoga
// //to update time everytime we use settimeout har 1s ma settimeout run hoga
// //to format time we use getformattime isma apan  time state variable ko update karaga
//     useEffect(()=>{
//         setTimeout(() => {
//             setTime( time - 1000);
//         },1000);
//     },[time]);
//     const getFormatTime = (milisec) => {
//         let total_sec = parseInt(Math.floor(milisec/1000));
//         let total_min = parseInt(Math.floor(total_sec/60));
//         let total_hour = parseInt(Math.floor(total_min/60));
//         let total_day = parseInt(Math.floor(total_hour/24));
//          //to get repeating format /original format 3day 3hour 4min 6sec
//         let seconds = parseInt(total_sec % 60);
//         let minutes = parseInt(total_min % 60);
//         let hours = parseInt(total_hour % 24);

//         return `${total_day}: ${hours}: ${minutes} : ${seconds}`;
//     };
//     return <div>
//             {getFormatTime(time)}
//             </div>

    
// };


// export default Countdown;



import React, { useState, useEffect } from "react";
import "./App.css";

const COUNTDOWN_TARGET = new Date("2023-10-22T10:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
        //Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object
		<div className='countdown px-5 '>
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box ' key={label}>
							<div className='value '>
								<div className="text-center">{value}</div>
                                <div className='label fw-semibold text-white'> {label} </div>
							</div>
						
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Countdown;
