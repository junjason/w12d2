import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect } from 'react-router-dom';

export const LoginFormPage = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            credential, 
            password
        }

        dispatch(login(payload));

        setCredential('');
        setPassword('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <label> Username or Email:
                <input value = {credential} onChange = {(e) => setCredential(e.target.value)}/>
            </label>
            <label> Password
                <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password"/>
            </label>
            <input type = "submit" value="Sign In"/>
        </form>
    );
}