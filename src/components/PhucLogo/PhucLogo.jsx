import React, {useRef, useEffect} from 'react'

import { init } from 'ityped'
import "./phuclogo.scss"

const PhucLogo = () => {
    const textRef = useRef();       //ityped function https://www.npmjs.com/package/ityped

    useEffect(() => {               //render ityped function
        init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["React Assignment by Phuc Le"],
        });
    }, []);
    return (     
        <span className="ityped" ref={textRef}></span>   
    )
}

export default PhucLogo
