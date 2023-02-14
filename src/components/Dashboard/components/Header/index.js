import React from 'react';
import style from './Header.module.css';
import {RxSwitch, RxEnterFullScreen} from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';

const Header = () => (
    <header>
        <img />
        <nav style={{ display: 'flex', listStyle: 'none', gap: 15 }}>
            <li><RxSwitch/></li>
            <li><BiSearch/></li>
            <li><RxEnterFullScreen/></li>
        </nav>
    </header>
)

export default Header;