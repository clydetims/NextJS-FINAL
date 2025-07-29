'use client'
import { useState } from "react";
import React from 'react'
import { EyeOff, Eye } from 'lucide-react'

type InputProps = {
    label: string;
    id: string;
    value: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
    className?: string
    labelClassName?: string
    placeholder?: string
    Icon?: React.ComponentType<{ className?: string }>
}

export default function Input({
    label,
    id,
    value,
    type = 'text',
    onChange,
    required = false,
    className = '',
    labelClassName = '',
    placeholder=''

}: InputProps) {


    const [showPassword, setShowPassword] = useState(false);

    function handleShowPassword () {
        setShowPassword((prev) => !prev)
    }

    return(
        <div>
            <label 
                htmlFor={id} 
                className={`${labelClassName}`}
            >
                {label}
            </label>

            {
                id === 'password' || id === 'email' ? (
                    <div className="relative">
                        <input 
                            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                            name={id}
                            id={id}
                            value={value}
                            required = {required}
                            className= {`${className}`}
                            placeholder={placeholder}
                            onChange={onChange}
                        />
                        {
                            id === 'password' && (
                                <button
                                    type="button"
                                    onClick={handleShowPassword}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            )
                        }
                    </div>
                ) : (

                    <input 
                        type={type}
                        name={id}
                        id={id}
                        value={value}
                        required = {required}
                        className= {`${className}`}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                )
            }
        </div>
    )

}