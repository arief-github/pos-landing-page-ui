import React from "react";
import style from './home.module.css';
import { statistics } from "../../../../dummy-data/statistics";
import { FiBarChart } from 'react-icons/fi'

const Home = () => (
    <div className={ style.card__container }>
        {
            statistics.map((stat) => (
                <div className={ style.card } key={stat.id} style={{ background: `${stat.bgcolor}` }}>
                    <span>{ stat.total }</span>
                    <br/>
                    <span>{ stat.desc }</span>
                    <span style={{ textAlign: 'right' }}> <FiBarChart/> </span>
                    <br/>
                    <hr/>
                    <span>{ stat.update } </span>
                </div>
            ))
        }
    </div>
)

export default Home;