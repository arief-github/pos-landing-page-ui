import React from "react";
import { testimonials } from "../../../../dummy-data/testimonials";
import styles from './Testimonials.module.css'
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
    return createArray(totalStars).map((index) => <FaStar color="#FFAF1A" key={index} style={{ marginRight: 14 }}/>)
}

const Testimonials = () => {
    return (
        <div className={styles.testimonials__display}>
        {
            testimonials.map((item) => (
                        <ul key={item.id} className={styles.testimonials__ul}>
                            <li style={{ textAlign: 'center' }}> <StarRating/> </li>
                            <li> <span className={ styles.testimonials__comment}>{ item.comment }</span> </li>
                                <ul style={{ listStyle: "none", display: 'flex', gap: 10, marginTop: 20 }}>
                                    <li><img src={ item.image } alt="person" style={{ display: "inline" }}/></li>
                                    <div>
                                        <li> <span className={ styles.testimonials__name }>{ item.name }</span>  </li>
                                        <li> <span className={ styles.testimonials__profession }>{ item.profession }</span> </li>
                                    </div>
                                </ul>
                        </ul>
                ))
            }
        </div>
    )
}

export default Testimonials;