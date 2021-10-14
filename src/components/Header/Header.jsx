import React, { useRef, useEffect } from 'react'

// Import Style
import "./header.scss"
import { init } from 'ityped'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';

const Header = () => {
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
        <nav className="header">
            <span className="header__ityped" ref={textRef}></span>
            <div className="header__menu">
                <a target="_blank" rel="noreferrer" href="https://github.com/phuclevinh2000">
                    <GitHubIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>GitHub</span>
                </a>
                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/phuc-le-vinh-2000/">
                    <LinkedInIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>Linkedin</span>
                </a>
                
                <a target="_blank" rel="noreferrer"  href="https://github.com/phuclevinh2000/fs8-react-assignment">
                    <CodeIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>Source Code</span>
                </a>
            </div>
        </nav>
    )
}

export default Header
