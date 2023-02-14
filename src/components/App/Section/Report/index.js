import React from 'react';
import Button from '../../generic/Button';
import styles from './Report.module.css';

const Report = () => (
    <div className={ styles.report__display }>
        <div className={ styles.rectangle }>
            <img src='/images/report/page1.svg' alt='halaman report' />
            <img src='/images/report/page2.svg' alt='halaman report kecil' style={{ position: 'absolute', top: '50%', left: '35%' }}/>
        </div>
        <div className={ styles.report__desc }>
             <span style={{ color: 'var(--deep-blue)', fontWeight: 'var(--font-bold)', borderBottom: '2px solid var(--deep-blue)' }}>Report</span>
            <h1>Report data more structured</h1>
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero, quasi 
                    laudantium dolore voluptates 
                    cumque inventore et deleniti natus animi ducimus.
            </p>
            <Button backgroundcolor="#0A56C3">Contact Sale</Button>
        </div>
    </div>
)

export default Report;