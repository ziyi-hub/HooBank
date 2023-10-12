import React, {useState} from 'react';
import { Footer, FormInput } from "../components";

function Register(props) {

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMsg: "Username should be 3-16 characters and shouldn't include any special character",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMsg: "Email should be a valid email address",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMsg: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!,.@#$%^&*])[a-zA-Z0-9!,.@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMsg: "Password don't match",
            pattern: values.password,
            required: true,
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        //const data = new FormData(e.target);
        //console.log(Object.fromEntries(data.entries()));
    }

    console.log(values);
    return (
        <>
            <div className="min-h-screen bg-image py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Register</h1>
                            </div>

                            <form onSubmit={ formSubmit }>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                        {
                                            inputs.map((input) => (
                                                <FormInput
                                                    key={input.id}
                                                    {...input}
                                                    value={values[input.name]}
                                                    onChange={onChange}

                                                />
                                            ))
                                        }
                                        {/*<div className="relative">*/}
                                        {/*    <input autoComplete="off" id="email" name="email" type="text"*/}
                                        {/*           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"*/}
                                        {/*           placeholder="Username"*/}
                                        {/*           value={username}*/}
                                        {/*           onChange={(e) => setUsername(e.target.value)}*/}
                                        {/*           onBlur={handleFocus}*/}
                                        {/*           pattern="^[A-Za-z0-9]{3,16}$"*/}
                                        {/*           required*/}
                                        {/*           focused={focused.toString()}*/}
                                        {/*    />*/}
                                        {/*    <span className="text-xs p-0.5 text-red-600 hidden">*/}
                                        {/*        Username should be 3-16 characters and shouldn't include any special character*/}
                                        {/*    </span>*/}
                                        {/*    <label htmlFor="email"*/}
                                        {/*           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">*/}
                                        {/*        Username*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}

                                        <div className="relative">
                                            <button
                                                onClick={() => {

                                                }}
                                                className="bg-blue-500 text-white rounded-md px-2 py-1">
                                                Register
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;