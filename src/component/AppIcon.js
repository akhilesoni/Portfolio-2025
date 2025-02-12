import { useRef } from "react";
import Draggable from "react-draggable";


export default function AppIcon(props){

    const nodeRef = useRef(null);




    return(
        <>
        
            <div className={props.activeApp === props.app.name ? "app-icon hover-white active" : "app-icon hover-white"}>
                <img src={props.app.icon} alt={props.app.name}/>
            </div>

            <Draggable nodeRef={nodeRef} cancel=".no-drag" defaultPosition={{x:-300,y:-600}}>
                    <div
                    ref={nodeRef} // ✅ Moved ref to the outermost draggable div
                    style={{
                        position:"fixed",
                        height:530,
                        width:600,
                        backgroundColor: "gray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "grab",
                        borderRadius: 5,
                    }}
                    >
                    
                    <iframe className="no-drag" height={500} width={"100%"} src="https://www.google.com/webhp?igu=1" title="Browser" referrerpolicy="no-referrer" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"></iframe> 
                    </div>
                    
                </Draggable>
            
        
        </>
    )
}