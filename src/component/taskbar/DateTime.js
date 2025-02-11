import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { AnimatePresence, motion } from "framer-motion";

import "react-calendar/dist/Calendar.css";
import "../../style/taskbar/datetime.css"
export default function DateTime(){

    const [calendar, setCalendar] = useState(false)

    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 60*1000); // Updates every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);


    const openCalendar = () => {
        setCalendar(!calendar)
    }

    return(
        <>
            <div onClick={openCalendar} className="calendar hover-white">
                <p>{time.toLocaleString().substring(10)}</p>
                <p>{time.toLocaleString().substring(0,9)}</p>

            </div>

            <AnimatePresence>
                {calendar && (
                    <motion.div
                    className="calendar-wrapper"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0,  x: 200 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                    <p className="highlighted-date">{date.toDateString()}</p>
                    <Calendar onChange={setDate} value={date} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}