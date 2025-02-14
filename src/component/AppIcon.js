import { Children, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Rnd } from "react-rnd";

export default function AppIcon(props) {
    const nodeRef = useRef(null);

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={props.activeApp === props.app.name ? "active-app" : ""}>
                <div  onDoubleClick={() => setOpen(true)} className={props.activeApp === props.app.name ? "app-icon hover-white active" : "app-icon hover-white"}>
                    <img src={props.app.icon} alt={props.app.name} />
                </div>

                {open && (
                    <Rnd nodeRef={nodeRef} handle=".handle" cancel=".no-drag"   default={{
                        x: 0,
                        y: 0,
                        width: 200,
                        height: 200,
                      }}
                      minWidth={500}
                      minHeight={500} 
                      style={{
                        border:"2px solid gray",
                        zIndex: props.activeApp === props.app.name ? 1 : 0, // Apply dynamic z-index

                      }}>
                        <div width={"100%"} height={40} className="handle">
                                {props.app.name} <span onClick={() => setOpen(false)}>X</span>        
                        </div>
                        <div className="no-drag">
                            {props.children}
                        </div>
                    </Rnd>
                )}
            </div>
        </>
    );
}

