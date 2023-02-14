import React from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Aside = () => (
    <ProSidebarProvider>
        <Sidebar width='240px'>
            <Menu>
                <MenuItem component={<Link to="/dashboard"/>}>Dashboard</MenuItem>
                <SubMenu label="Transaksi">
                    <MenuItem component={<Link to="/dashboard/transaksi"/>}>Penjualan</MenuItem>
                    <MenuItem>Pembelian</MenuItem>
                    <MenuItem>Biaya Lain</MenuItem>
                    <MenuItem>Pendapatan Lain</MenuItem>
                </SubMenu>
                <SubMenu label="Produk">
                    <MenuItem>Item</MenuItem>
                    <MenuItem>Kategori</MenuItem>
                    <MenuItem>Satuan</MenuItem>
                </SubMenu>
                <SubMenu label="Lokasi">
                    <MenuItem component={<Link to="/dashboard/lokasi"/>}>Toko</MenuItem>
                    <MenuItem>Gudang</MenuItem>
                </SubMenu>
                <SubMenu label="Master Data">
                    <MenuItem>Konsumen</MenuItem>
                    <MenuItem>Supplier</MenuItem>
                    <MenuItem>Akun Transaksi</MenuItem>
                </SubMenu>
                <SubMenu label="Akun">
                    <MenuItem component={<Link to="/dashboard/akun"/>}>Pengguna</MenuItem>
                    <MenuItem>Group</MenuItem>
                </SubMenu>
                <MenuItem>Laporan</MenuItem>
                <MenuItem component={<Link to="/dashboard/pengaturan"/>}>Pengaturan</MenuItem>
            </Menu>
        </Sidebar>
    </ProSidebarProvider>
)

export default Aside;