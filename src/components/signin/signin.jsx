import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custombutton/custombutton';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './signin.scss';

class SignIn extends React.Component{
    constructor() {
        super();
        
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = event => {
            event.preventDefault();

            this.setState({email: '', password: ''})
        }

        this.handleChange = event => {
            const {value, name} = event.target;

            this.setState({ [name]: value})
        }
    }

    render() {
        return (
            <div className= 'signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label= 'Email'
                        required
                    />
                    
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label= 'Password'
                        required
                    />                   

                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} > {''}Sign In With Google{''}</CustomButton>
                </form>
            </div>
        )
    }
};

export default SignIn;