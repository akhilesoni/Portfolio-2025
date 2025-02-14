

export default function Chrome(){
    return(
        <div
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                border:"1px solid gray",
                backgroundColor: "black",
                cursor: "grab",
            }}>
            <iframe
                className="no-drag"
                height={"100%"}
                width={"100%"}
                src="https://www.google.com/webhp?igu=1"
                title="Browser"
                referrerPolicy="no-referrer"
                sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
            />
        </div>
    )
}