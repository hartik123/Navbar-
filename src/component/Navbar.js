import React from 'react';
import { Link } from 'react-scroll';


const Navbar = ({ data }) => {
    return (
        <div style={{ zIndex: 1, position: "fixed" }}>
            <ul className="nav-items" style={{ display: "flex", flexDirection: "column", margin: "1rem",width: "15vw", height: "40vh",paddingTop: "1rem", backgroundColor: "white", borderRadius: "1rem", boxShadow:"6px 6px 1rem grey" }}>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    style={{ margin: "1rem" }}
                    onClick={() => data.setOpen(false)}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    style={{ margin: "1rem" }}
                    onClick={() => data.setOpen(false)}
                >About</Link>
            </ul>

        </div>
    )
}

export default Navbar
