import React, {useContext, useState} from "react";
import { authContext, AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components"


function Login() {
    const user = useContext(AuthContext);
    const { login } = authContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        
    <>
        <div className="min-h-screen bg-image py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Se connecter</h1>
                        </div>

                        <form onSubmit={ formSubmit }>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                        <div className="relative">
                                            <input autoComplete="off" id="email" name="email" type="text"
                                                   className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                   placeholder="Username"
                                                   value={username}
                                                   onChange={(e) => setUsername(e.target.value)}
                                                   onBlur={handleFocus}
                                                   pattern="^[A-Za-z0-9]{3,16}$"
                                                   required
                                                   focused={focused.toString()}
                                            />
                                            <span className="text-xs p-0.5 text-red-600 hidden">
                                                Username should be 3-16 characters and shouldn't include any special character
                                            </span>
                                            <label htmlFor="email"
                                                   className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Username
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input autoComplete="off" id="password" name="password" type="password"
                                                   className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                   placeholder="Password"
                                                   value={password}
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   onBlur={handleFocus}
                                                   pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[_=-+,.;/\?!@#$%^&*<>])[a-zA-Z0-9!_=-+,.;/\?@#$%^&*<>]{8,20}$"
                                                   required
                                                   focused={focused.toString()}
                                            />
                                            <span className="text-xs p-0.5 text-red-600 hidden">
                                                Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character
                                            </span>
                                            <label htmlFor="password"
                                                   className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Password
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <button
                                                onClick={() => {
                                                    login?.(username)
                                                    user.login();
                                                    navigate('/home')
                                                }}
                                                className="bg-blue-500 text-white rounded-md px-2 py-1">
                                                Login
                                            </button>

                                            <button
                                                onClick={() => {
                                                    login?.();
                                                    user.logout();
                                                }}
                                                className="bg-blue-500 text-white rounded-md px-2 py-1">
                                                Logout
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

export default Login;