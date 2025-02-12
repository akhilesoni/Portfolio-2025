import "../style/taskbar.css"
import Apps from "./taskbar/Apps"
import DateTime from "./taskbar/DateTime"
import Language from "./taskbar/Language"
import WeatherNews from "./taskbar/WeatherNews"

export default function Taskbar(){



    return(
        <div className="taskbar flex">
            <WeatherNews/>

            <Apps/>

            <div className="info flex">
                <Language/>
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