import React from 'react';
import Form from '../Form';
import style from './Card.module.css';

const Card = ({ children }) => (
    <div className={ style.card__container }>
        { children }
    </div>
)

export default Card;

