import React, { useState } from 'react'
// import Test from './Test';
import { Link, animateScroll as scroll } from "react-scroll";
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './component/Navbar';
import HamburgerMenu from 'react-hamburger-menu';


const App = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(prevState => !prevState)

    }
    return (
        <div>
            <div style={{ margin: "2rem" , zIndex: 2, position: "fixed", cursor: "pointer"}}>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={handleClick}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='#a85c47'
                    borderRadius={0}
                    animationDuration={0.5}
                    // style={{ margin: "10rem" ,position: "fixed"}}
                />
            </div>
            {console.log(open)}

            {open && <Navbar data={{open, setOpen}}/>}
            <Home
                id="home" />
            <About
                id="about" />
        </div>
    )
}

export default App
