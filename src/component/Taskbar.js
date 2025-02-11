import "../style/taskbar.css"
import DateTime from "./taskbar/DateTime"
import WeatherNews from "./taskbar/WeatherNews"

export default function Taskbar(){



    return(
        <div className="taskbar flex">
            <WeatherNews/>

            <div className="apps">
                facebook
            </div>

            <div className="info flex">
                <div className="lang hover-white">
                    ENG IN
                </div>
                <div className="sysinfo hover-white">
                    <span className="fa fa-wifi"></span>
                    <span className="fa fa-volume-up"></span>
                    <span className="fa fa-battery"></span>

                </div>
                <DateTime/>
            </div>
        </div>
    )
}