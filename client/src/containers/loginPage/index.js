import React, { useEffect, useState } from "react";
import { Link, useLocation , useNavigate } from "react-router-dom";
import EmailValidator from "email-validator";
import { useValidation, yupResolver } from "../../validations/validations";
import { useForm } from "react-hook-form"
import {
    LoginDiv,
    LoginInner,
    LoginInnerDiv,
    LoginInput,
    LoginInputDiv,
    CheckBoxDiv,
    LoginButton,
    Forgot,
    ForgotPassword,
    Register,
    InputDiv,
    LinkDiv,
    Point

} from "./styled"
export const LoginPage = () => {
    const loc = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(useValidation()),
    });

    const onSubmit = async(data) => {
        console.log(data);
       try {
        const req = await fetch("http://localhost:3001/login" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        if(req.ok){
            localStorage.setItem("token" , res.token)
            loc("/profile")
        }
       } catch (error) {
        console.log(error);
       }
    }


    return (
        <>
            <LoginDiv>
                <LinkDiv>
                    <Point></Point>
                    <Link to="/">
                        <p to>Home</p>
                    </Link>

                    <Point></Point>Log IN
                </LinkDiv>
                <LoginInner onSubmit={handleSubmit(onSubmit)}>
                    <LoginInnerDiv>
                        <h2>LOG IN</h2>
                        <LoginInputDiv>
                            <InputDiv>
                                <p>{errors.name ? errors.name : null}</p>

                                <LoginInput placeholder={("Email")} {...register("name", {
                                    required: true,
                                })}></LoginInput>
                            </InputDiv>


                            <InputDiv>
                                <p>{errors.password ? errors.password : null}</p>

                                <LoginInput type="password" placeholder={("Password")} {...register("password")}></LoginInput>
                            </InputDiv>
                        </LoginInputDiv>

                        <CheckBoxDiv >
                            <label>
                                <input type="checkbox" {...register("ageCheck", {
                                    requuired: 'Обязфтельно для выбора',
                                })} />
                                <p>Remember me</p>
                            </label>

                        </CheckBoxDiv>
                        <LoginButton type="submit">LOG IN</LoginButton>
                        <Forgot>
                            <ForgotPassword>Forgot Your Password?</ForgotPassword>
                            <Link to="/register">
                                <Register>Register</Register>
                                </Link>
                        </Forgot>
                    </LoginInnerDiv>
                </LoginInner>
            </LoginDiv>
            
        </>
    )

}



