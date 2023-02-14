import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { useState } from "react";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);




    return (
            <nav className={ Styles.Nav }>
                <img src="/images/navbar/logo.svg" className={Styles.image} alt="Logo Perusahaan Pt. Catur Jaya Solusi Bersama"/>
                <ul className={ isExpanded ? `${Styles.Nav_ul}` : `${Styles.Nav_ul} ${Styles.hidden}`}>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Plan</li>
                    <li>Reviews</li>
                </ul>
                <div>
                    <GiHamburgerMenu className={Styles.hide} onClick={() => setIsExpanded(!isExpanded)}/>                </div>
                 <StyledLink to="/signin"> <button className={Styles.button}>Sign In</button></StyledLink>
            </nav>
    )
}

export default Navbar;