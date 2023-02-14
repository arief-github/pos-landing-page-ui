import React from "react";
import style from "./Dashboard.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../../components/Dashboard/components/Header";
import Aside from "../../components/Dashboard/components/Aside";
import Akun from "../../components/Dashboard/pages/akun";
import Lokasi from "../../components/Dashboard/pages/lokasi";
import Home from "../../components/Dashboard/pages/home";
import Pengaturan from "../../components/Dashboard/pages/pengaturan";
import Card from "../../components/Dashboard/components/Card";
import Transaksi from "../../components/Dashboard/pages/transaksi";

const Dashboard = () => (
    <Router>
        <div className={ style.dashboard__container }>
            <div className={ style.header }>
                <Header/>
            </div>
            <div className={ style.aside }>
                <Aside/>
            </div>
            <div className={ style.main }>
                    <Card>
                        <Switch>
                                <Route exact path="/dashboard" component={Home} />
                                <Route path="/dashboard/akun" component={Akun} />
                                <Route path="/dashboard/lokasi" component={Lokasi}/>
                                <Route path="/dashboard/pengaturan" component={Pengaturan}/>
                                <Route path="/dashboard/transaksi" component={Transaksi}/>
                        </Switch>
                    </Card>
            </div>
            <div className={ style.footer }>
                footer
            </div>
        </div>
    </Router>
)

export default Dashboard;