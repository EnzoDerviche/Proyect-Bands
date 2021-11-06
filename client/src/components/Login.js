import React, { useState, useEffect } from 'react';
import validateError from '../helpers/setErrors';
import { useNavigate  } from "react-router-dom";
import { 
    Authentication,
    Modal,
    Header,
    Title,
    Subtitle,
    Placeholder,
    Inputs,
    InputContainers,
    SubmitContainer,
    Submit,
    GSubmit,
    ErrorRegistro,
} 
from '../css/HomeStyles';

function Login(){
    let navigate = useNavigate ();
    const [errors, setErrors] = useState({});
    const [disabledForm, setDisabledForm] = useState(true);
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    useEffect (() => {
        if(Object.keys(errors).length === 0){
            setDisabledForm(false)
        } else {
            setDisabledForm(true)
        }
    }, [errors])

    function handleClick() {
        navigate("/home");
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateError({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }

    return (
        <Authentication>
            <Modal>
                <Header>
                    <Title>Welcome!</Title>
                </Header>
                <Subtitle>
                    <p>Log in</p>
                    <h3>hola</h3>
                </Subtitle>
                <InputContainers>
                <Inputs
                    required
                    id="email"
                    type="email"
                    value={input.email}
                    name="email"
                    placeholder=" "
                    autoComplete="off"
                    onChange={(e) => handleChange(e)}
                />
                <Placeholder htmlFor="email" className="placeholder">
                    Email
                </Placeholder>
                {errors.email && (
                    <ErrorRegistro>{errors.email}</ErrorRegistro>
                )}
                </InputContainers>
                <InputContainers>
                <Inputs
                    required
                    id="password"
                    type="password"
                    value={input.password}
                    placeholder=" "
                    name="password"
                    autoComplete="off"
                    onChange={(e) => handleChange(e)}
                />
                <Placeholder htmlFor="password" className="placeholder">
                    Password
                </Placeholder>
                {errors.password && (
                    <ErrorRegistro>{errors.password}</ErrorRegistro>
                )}
            </InputContainers>
            <SubmitContainer>
                <Submit disabled={disabledForm} onClick={handleClick}>Get into</Submit>
                <Submit>
                    <GSubmit>
                        <div className="Icon"></div>
                        <span className="ButtonText">Continue with Google</span>
                    </GSubmit>
                </Submit>
            </SubmitContainer>

            </Modal>
        </Authentication>
    )
};

export default Login;