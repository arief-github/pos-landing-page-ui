import React from 'react';
import { statistics } from '../../../../dummy-data/statistics';
import Dropdown from '../../components/Dropdown';
import style from './Transaksi.module.css';

const Transaksi = () => {
  const handleMenuOne = () => {
    console.log("clicked one");
  }
  const handleMenuTwo = () => {
    console.log("clicked two");
  }
  
    return (
        <>
            <div className={ style.transaksi__header }>
                <div className={ style.title }>
                    <p>Penjualan</p>
                    <p>Data Transaksi Penjualan Barang ke Konsumen</p>
                </div>
                <div className={ style.action }>
                    <div className={ style.left }>
                    <Dropdown trigger={<button>Dropdown</button>}  menu={[
                        <button onClick={handleMenuOne}>Menu 1</button>,
                        <button onClick={handleMenuTwo}>Menu 2</button>,
                    ]} />
                    </div>
                    <div className={ style.right }>
                        
                    </div>
                </div>
            </div>
            <div className={ style.transaksi__body }>
                <table>
                    <tr>

                        <th>No. Transaksi</th>
                        <th>Tanggal</th>
                        <th>Konsumen</th>
                        <th>Jumlah Item</th>
                        <th>Total</th>
                        <th>Diskon</th>
                        <th>Sub Total</th>
                        <th>Pajak</th>
                    </tr>
                    <tr>
                        {
                           
                        }
                    </tr>
                </table>
            </div>
        </>
    )
} 

export default Transaksi;