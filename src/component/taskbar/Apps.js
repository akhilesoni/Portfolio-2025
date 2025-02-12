import { useState } from "react"
import { apps } from "../../model/apps"
import "../../style/taskbar/apps.css"
import AppIcon from "../AppIcon"

export default function Apps(){

    const data = apps

    const [activeApp, setActiveApp] = useState("")

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
                       <div>
                         <AppIcon app={app} activeApp={activeApp}/>
                       </div>
                        
                    ))}
                </div>

           </div>
       </>
    )
}