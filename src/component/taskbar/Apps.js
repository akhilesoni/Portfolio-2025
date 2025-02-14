import { useState } from "react"
import { apps } from "../../model/apps"
import "../../style/taskbar/apps.css"
import AppIcon from "../AppIcon"
import Chrome from "../Apps/Chrome"

export default function Apps(){

    const data = apps

    const [activeApp, setActiveApp] = useState("Chrome")

    return(
       <>
           <div className="apps flex">

                <div className="flex">
                    <div className="app-icon hover-white">
                        <img src={"/image/windows.svg"} alt={"windows 11"}/>
                    </div>
                    <div className="search flex">
                        <img height={"20px"} src="image/search.png"/>
                        <input type="search" placeholder="Search"/>
                    </div>
                </div>

                <div className="flex">
                    {data.map( app => (
                       <div onMouseDown={() => setActiveApp(app.name)}>
                         <AppIcon app={app} activeApp={activeApp}>
                            {app.app}
                         </AppIcon>
                       </div>
                        
                    ))}
                </div>

           </div>
       </>
    )
}