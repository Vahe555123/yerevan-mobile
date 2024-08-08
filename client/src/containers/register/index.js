import { Link } from "react-router-dom"
import EmailValidator from "email-validator";
import { useValidation, yupResolver } from "../../validations/register";
import { useForm } from "react-hook-form"
import {
    RegisterDiv,
    RegisterInner,
    RegisterInnerDiv,
    RegisterInputDiv,
    RegisterInput,
    LinkDiv,
    Point,
    CheckBoxDiv,
    RegisterButton


} from "./styled"


export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(useValidation()),
    });
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const req = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const res = await req.json()
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <RegisterDiv>
                <LinkDiv>
                    <Point></Point>
                    <Link to="/">
                        <p to>Home</p>
                    </Link>

                    <Point></Point>Create Account
                </LinkDiv>
                <RegisterInner onSubmit={handleSubmit(onSubmit)}>
                    <RegisterInnerDiv>
                        <h2>REGISTER</h2>
                        <RegisterInputDiv>
                            <RegisterInput placeholder="First Name" {...register("name", {
                                required: true,
                            })} />
                            <RegisterInput placeholder="Last Name" {...register("lastName", {
                                required: true,
                            })} />
                            <RegisterInput placeholder="E-Mail" {...register("email", {
                                required: true,
                                validate: {
                                    email: (value) => EmailValidator.validate(value)
                                }
                            })} />
                            <RegisterInput placeholder="Password" {...register("password")} />
                            {/* <RegisterInput placeholder="Confirm Password"/> */}
                        </RegisterInputDiv>
                        <CheckBoxDiv>
                            <label>
                                <input type="checkbox" {...register('ageCheck', {
                                    required: 'Обязательно для выбора',
                                })} />
                                <p>Sign Up for Newsletter</p>
                            </label>

                        </CheckBoxDiv>
                        <CheckBoxDiv>
                            <label>
                                <input type="checkbox" {...register('privacyCheck', {
                                    required: true,
                                })} />
                                <p>I agree with Terms & Conditions</p>
                            </label>

                        </CheckBoxDiv>
                        <RegisterButton type="submit">CREATE AN ACCOUNT</RegisterButton>

                    </RegisterInnerDiv>
                </RegisterInner>
            </RegisterDiv>
            {/* <h1>asdfiokjaljh</h1> */}
        </>
    )
}