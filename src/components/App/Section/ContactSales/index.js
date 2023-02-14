import React from "react";
import style from './ContactSales.module.css';

const ContactSales = () => (
    <div className={ style.contactsales__display }>
        <div className={ style.left }>
            <h2>A faster and easier way to <br/> <span style={{ color: 'var(--orange)' }}>manage sales.</span></h2>
        </div>
        <div className={ style.right }>
            <img src="/images/contact/page1.svg" alt="gambar fitur 1" className={ style.abs_img_1 }/>
            <img src="/images/contact/page2.svg" alt="gambar fitur 2" className={ style.abs_img_2 }/>
        </div>
    </div>
)

export default ContactSales;