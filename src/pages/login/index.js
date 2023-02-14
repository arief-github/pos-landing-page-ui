import React from "react";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import Swal from "sweetalert2";
import Card from "../../components/Login/components/Card";
import Form from "../../components/Login/components/Form";
import style from './login.module.css';

const Login = () => {
    const [adminEmail, adminPassword] = ["admin@example.com","qwerty"];
    const history = useHistory();

    const [email, setEmail] = useState(adminEmail);
    const [password, setPassword] = useState(adminPassword);

    const handleEmailChange = e => setPassword(e.target.value);
    const handlePasswordChange = e => setEmail(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault();

        if(email === adminEmail && password === adminPassword) {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    localStorage.setItem('is_authenticated', true);

                    history.push('/dashboard');
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Log In',
                        showConfirmButton: false,
                        timer: 1500,
                    })

                }
            })
        } else {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                  Swal.showLoading();
                },
                willClose: () => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Incorrect email or password.',
                    showConfirmButton: true,
                  });
                },
              });
        }
    }

    return (
        <div className={ style.Login }>
            <Card>
                <Form handleLogin={handleLogin} 
                      handleEmailChange={handleEmailChange} 
                      handlePwdChange={handlePasswordChange}
                      valueEmail={email}
                      valuePwd={password}
                      />
            </Card>
        </div>
    )
}

export default withRouter(Login);
