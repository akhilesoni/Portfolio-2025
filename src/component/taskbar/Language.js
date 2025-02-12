import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import "../../style/taskbar/lang.css"

export default function Language(){

    const [lang, setLang] = useState(false)

    return(
        <>
            <div onClick={() => setLang(!lang)} className="lang hover-white">
                ENG IN
            </div>
            <AnimatePresence>

            {lang && (
                <motion.div className="lang-card"
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0,  y: 200 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}>
                    <h3>Keyboard layout</h3>
                    <div className="flex hover-white">
                        <p>
                        ENG
                        </p>
                        <div>
                            <p>English (India)</p>
                            <span>English (India)</span>
                        </div>
                    </div>
                    <div className="flex hover-white">
                        <p>
                        ENG
                        </p>
                        <div>
                            <p>English (United States)</p>
                            <span>English (India)</span>
                        </div>
                    </div>

                </motion.div>
            )}
            </AnimatePresence>

            <div onClick={() => setLang(false)} className={lang? "cover" : ""}></div>
        </>
    )
}