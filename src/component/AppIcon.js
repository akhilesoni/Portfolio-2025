import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function AppIcon(props) {
    const nodeRef = useRef(null);

    const [open, setOpen] = useState(false)
    

    return (
        <>
            <div className={props.activeApp === props.app.name ? "active-app" : ""}>
                <div onDoubleClick={() => setOpen(true)} className={props.activeApp === props.app.name ? "app-icon hover-white active" : "app-icon hover-white"}>
                    <img src={props.app.icon} alt={props.app.name} />
                </div>

                {open && (
                     <Draggable nodeRef={nodeRef} handle=".handle" cancel=".no-drag" defaultPosition={{ x: -300, y: -600 }} >
                     <div
                         ref={nodeRef}
                         style={{
                             position: "absolute",
                             height: 530,
                             width: 600,
                             backgroundColor: "gray",
                             cursor: "grab",
                             borderRadius: 5,
                             zIndex: props.activeApp === props.app.name ? 1 : 0, // Apply dynamic z-index
                         }}
                     >
                         <div width={"100%"} height={40} className="handle">{props.app.name} <span onClick={() => setOpen(false)}>close</span></div>
                         <iframe
                             className="no-drag"
                             height={500}
                             width={"100%"}
                             src="https://www.google.com/webhp?igu=1"
                             title="Browser"
                             referrerPolicy="no-referrer"
                             sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
                         />
                     </div>
                 </Draggable>
                )}
            </div>
        </>
    );
}
