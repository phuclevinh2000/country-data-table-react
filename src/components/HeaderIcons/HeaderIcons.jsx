import React from 'react'

import "./headericons.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';

const HeaderIcons = () => {
    console.log("hi")
    return (
            <div className="menu">
                <a target="_blank" rel="noreferrer" href="https://github.com/phuclevinh2000">
                    <GitHubIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>GitHub</span>
                </a>
                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/phuc-le-vinh-2000/">
                    <LinkedInIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>LinkedIn</span>
                </a>
                
                <a target="_blank" rel="noreferrer"  href="https://github.com/phuclevinh2000/fs8-react-assignment">
                    <CodeIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>Source Code</span>
                </a>
            </div> 
    )
}

export default React.memo(HeaderIcons)
