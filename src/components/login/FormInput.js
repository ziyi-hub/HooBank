import React, { useState } from 'react';

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const {label, errorMsg, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="relative">
            <input
                autoComplete="off"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                {...inputProps}
                onChange={ onChange }
                onBlur={ handleFocus }
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className="text-xs p-0.5 text-red-600 hidden">
                {errorMsg}
            </span>
            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                {label}
            </label>
        </div>
    );
}

export default FormInput;