import React from "react";
import Button from "../../generic/Button";
import styles from './Sales.module.css';

const Sales = () => {
    return (
        <div className={styles.sales__display}>
            <div className={ styles.sales__left }>
                <span style={{ color: 'var(--deep-blue)', fontWeight: 'var(--font-bold)', borderBottom: '2px solid var(--deep-blue)' }}>Sales</span>
                <h1> Save & Manage Sales </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero, quasi 
                    laudantium dolore voluptates 
                    cumque inventore et deleniti natus animi ducimus.
                </p>
                <Button backgroundcolor="#0A56C3">Contact Sale</Button>
            </div>
            <div className={ styles.sales__right }>
                <div className={ styles.rectangle }>
                    <img src="/images/sales/page1.svg" alt="gambar halaman sales" />
                    <img src="/images/sales/page2.svg" alt="gambar kecil halaman sales" style={{ position: 'absolute', top: '50%', left: '35%' }} />
                </div>
            </div>
        </div>
    )
}

export default Sales;