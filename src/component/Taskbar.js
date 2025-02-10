import "../style/taskbar.css"

export default function Taskbar(){



    return(
        <div className="taskbar flex">
            <div className="weather flex hover-white">
                <img src="image/sun.png"/>
                <div>
                    <p>29 * c</p>
                    <span>Sunny</span>
                </div>
            </div>

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
                <div className="calender hover-white">
                    <p>23:34</p>
                    <p>09-02-2025</p>
                </div>
            </div>
        </div>
    )
}