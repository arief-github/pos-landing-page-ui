import React from 'react';
import styles from './Features.module.css';
import { BiCheck } from 'react-icons/bi'

const lists = [
    ["Dashboard", "Fitur Penjualan", "Fitur Pembelian", "Fitur Database Produk"],
    ["Fitur Lokasi Toko", "Fitur Lokasi Gudang", "Fitur Database Konsumen", "Fitur Database Supplier"],
    ["Fitur Manage User", "Fitur Laporan Penjualan", "Fitur Laporan Pembelian", "Fitur Laporan Stock"],
];

const Features = () => (
    <div className={ styles.features__display }>
        <div className={ styles.features__text }>
            <p>Features</p>
            <h1>Features that facilitate all your sales activity</h1>
            <p style={{ textAlign: 'center' }}>Lorem dolor sit amet consectur Lorem dolor sit amet consectur</p>
        </div>
        <div className={ styles.features__image }>
            <img src='/images/features/page1.svg' alt='halaman 1'/>
            <img src='/images/features/page2.svg' alt='halaman 2'/>
            <img src='/images/features/page3.svg' alt='halaman 3'/>
        </div>
        <div className={ styles.features__lists }>
            <ul>
                {
                    lists[0].map(list => (    
                        <li><BiCheck/> { list }</li>
                    ))
                }
            </ul>
            <ul>
                {
                    lists[1].map(list => (    
                        <li> <BiCheck/> { list }</li>
                    ))
                }
            </ul>
            <ul>
                {
                    lists[2].map(list => (    
                        <li> <BiCheck/> { list }</li>
                    ))
                }
            </ul>
        </div>
    </div>
)

export default Features;

