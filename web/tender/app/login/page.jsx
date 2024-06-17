'use client';
import React, { useState } from 'react';
import axios from 'axios';
import home from '../home/page';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import test from '../components/trys';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 
    
    const sendDataToServer = async (dataToSend) => {
        const response = await axios.post('http://localhost:8000/login/', dataToSend);
        if(response.status === 200) {
            // router.push({
            //     pathname: '/',
            //     query: { email: email } // Pass email as a query parameter
            // });
            // router.push(`/home/?email=${email}`);`+
            if(response.data.jwt) {
                document.cookie = `jwt=${response.data.jwt}; max-age=${response.data.maxAge}; path=/`;
            }
            router.push('/');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const datatosend = {
            email: email,
            password: password
        };
        sendDataToServer(datatosend);
    };

    return (
        <>
            <div className='flex'>
                <div className='w-6/12 h-screen'>
                    <div className='pl-10 pt-10'>
                        <h1 className="text-blue-500 text-xl font-serif">TenderBC</h1>
                    </div>
                    <div className='m-auto px-24 pt-16'>
                        <h2 className='font-bold pb-4'>Please signin with your credentials</h2>
                        <form onSubmit={handleSubmit}>
                            <input className='border-2 pl-4 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600' type="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} placeholder='Mail' /><br />
                            <input className='border-2 pl-4 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' /><br />
                            <button className='bg-blue px-56 py-1 mt-4  bg-blue-500 text-white rounded-md' type="submit">Login</button>
                        </form>
                        <h2 className="flex justify-center first-letter mt-6 mr-12 text-sm text-gray-500">If you already had an account <span> <a className="text-blue-700 pl-2 font-medium cursor-pointer" href='/signup'> Sign Up</a></span></h2>
                        <h2 className="flex justify-center mt-0 text-sm mr-12 text-gray-500">By creating our account you agree our <span> <a className="text-blue-700 pl-2 pr-2 font-medium">Terma</a></span>and<span> <a className="text-blue-700 pl-2 font-medium">condition</a></span></h2>
                    </div>
                </div>
                <div className='w-6/12 h-screen'>
                    <img className='w-full h-screen' src="/login.webp" alt="" />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
