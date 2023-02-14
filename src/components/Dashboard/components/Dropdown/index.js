import React from 'react';
import { useState, cloneElement } from 'react';
import style from './Dropdown.module.css';

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={ style.dropdown }>
            {
                cloneElement(trigger, {
                    onClick: handleOpen
                })
            }
            {
                open ? (
                    <ul className={ style.menu }>
                        {
                            menu.map((menuItem, index) => (
                                <li key={index}>
                                    {
                                        cloneElement(menuItem, {
                                            onClick: () => {
                                                menuItem.props.onClick();
                                                setOpen(false)
                                            }
                                        })
                                    }
                                </li>
                            ))
                        }
                    </ul>
                ) : null
            }
        </div>
    )
}

export default Dropdown;