import React from "react";
import { prices } from "../../../../dummy-data/prices";
import { RiCheckLine } from 'react-icons/ri';
import style from './Price.module.css';
import Button from "../../generic/Button";

const Price = () => {
    return (
        <div className={ style.price__display }>
            {
                prices.map((price) =>  
                    <div className={ style.price__card } key={ price.id }>
                        <div className={ style.ellipse1 }></div>
                        <div className={ style.ellipse2 }></div>
                        <div className={ style.tag }>
                            <span>{ price.tag }</span>
                        </div>
                        <div className={ style.price }>
                            <div className={ style.amount }>{ price.amount }</div>
                            <div className={ style.time }></div>
                        </div>
                        <div className={ style.features }>
                                {
                                    price.features.map(item => (
                                        <ul style={ { listStyle: 'none', display: 'flex' } }>
                                            <li> <span style={{ marginRight: '10px' }}><RiCheckLine/></span> </li>
                                            <li> { item } <br/> </li>
                                        </ul>
                                    ))
                                }
                            <Button backgroundcolor="#0A56C3">Buy Plan</Button>
                        </div>  
                    </div>
                )
            }  
        </div>
    )
}

export default Price;