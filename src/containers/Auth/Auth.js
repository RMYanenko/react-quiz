import React, { Component } from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {

    loginHandler = () =>{

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
    return (
        <div className={classes.Auth}>
            <div>
                <h1>Auth</h1>

                <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    <input type="text"/>
                    <input type="text"/>

                    <Button type="succec" onClick={this.loginHandler}>Войти</Button>
                    <Button type="primary" onClick={this.registerHandler}>Зарегистирироватся</Button>
                </form>
            </div>            
        </div>
    )
    }
}
