'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Router from 'next/navigation';
// import { useRouter } from 'next/navigation';
import {ethers} from 'ethers';
import abi from '../tender.json';
// import {providers} from "ethers";
// const { providers } = ethers;
// import uuid from 'uuid';
const uuid = require('uuid');
import Navbar from '../components/nav';
import tender from '../tender/page';
import './page.css';


const text = "Please enter details";
const characters = text.split("");

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

const Placetender = () => {
    // const router = useRouter();
    // const urlParams = new URLSearchParams(window.location.search);
    // const email = urlParams.get('email');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [startdate, setStartdate] = useState();
    const [enddate, setEnddate] = useState();
    // const [starttime, setStarttime] = useState('');
    // const [endtime, setEndtime] = useState('');
    // const [tender_id, setTender_id] = useState('');
    const [cdata , setcdata] = useState({provider:null,signer:null,contract:null});
    const [account, setAccount] = useState("not seleceted");

    useEffect(()=>{
        const template = async ()=>{
            const contractAddress = "0x4369a0e277383e5D724435439c7D429B4a710d81";
            const contractABI = abi.abi;
            const {ethereum} = window;
            const account = await ethereum.request({method:"eth_requestAccounts"});
            window.ethereum.on('accountsChanged', () => {
                window.location.reload();
            })
            setAccount(account);
            const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            setcdata({provider,signer,contract});
        }
        template();
    },[])

    const placetender = async () => {
        console.log("Placing tender");
        try {
            const start = Date.parse(startdate)/1000;
            const end = Date.parse(enddate)/1000;
            const tender_id = Date.now() + Math.floor(Math.random() * 10000000) + 1;
            if (!cdata.contract) {
                throw new Error("Contract object not initialized");
            }
            console.log("Account:", account);
            console.log("Contract:", cdata.contract);
            console.log(tender_id)
            const transaction = await cdata.contract.createTender(tender_id, start, end);
            console.log("Transaction:", transaction);
            
            console.log("Transaction mined:");
            await transaction.wait();
            console.log("Transaction mined:", transaction);
            const data = new FormData();
                data.append('title', title);
                data.append('description', description);
                data.append('startdate', startdate);
                data.append('enddate', enddate);
                data.append('tender_id', tender_id);
                
                files.forEach((file) => {
                    data.append('files', file);
                });
                const token = getCookie('jwt');
                axios.post('http://localhost:8000/placetender/', data, {
                    params: { token },
                    headers: { Authorization: `Bearer ${account}` },
                })
                .then((response) => {
                   console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error("Error placing tender:", error);
        }
    }

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles([...files, ...selectedFiles]);
    };

    const addFile = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    // const submit =async () =>{
    //     // await placetender();
    //     const data = new FormData();
    //     data.append('email', email);
    //     data.append('title', title);
    //     data.append('description', description);
    //     data.append('startdate', startdate);
    //     data.append('enddate', enddate);
        
    //     files.forEach((file) => {
    //         data.append('files', file);
    //     });
    //     axios.post('http://localhost:8000/placetender/', data)
    //     .then((response) => {
    //         setTender_id(response.data.id);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };

    return (
        <>
            <Navbar />
            <div className='flex'>
                <div className="flex flex-col gap-4 p-4 w-1/2 px-16">
                    <input
                        className="border-2 pl-4 pr-64 py-1 rounded mb-4 shadow-md focus:outline-blue-600"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        className="border-2 pl-4 pr-64 pt-4 rounded mb-4  shadow-md focus:outline-blue-600 h-48"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    ></textarea>
                    <input id="fileInput" type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
                    <div className='flex'>
                        <input
                            className="border-2 pl-4 pr-14 py-1 rounded mb-4 shadow-md focus:outline-blue-600 mr-4"
                            type="datetime-local"
                            value={startdate}
                            onChange={(e) => setStartdate(e.target.value)}
                            placeholder="Start Date"
                        />
                        <input
                            className="border-2 pl-4 pr-14 py-1 rounded mb-4 shadow-md focus:outline-blue-600"
                            type="datetime-local"
                            value={enddate}
                            onChange={(e) => setEnddate(e.target.value)}
                            placeholder="End Date"
                        />
                    </div>
                    <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600" onClick={addFile}>
                        Add File
                    </button>
                    <ul className="list-disc pl-5">
                        {files.map((file, index) => (
                        <li key={index} className="flex justify-between items-center py-1">
                            {file.name}
                            <button className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => removeFile(index)}>
                            Remove
                            </button>
                        </li>
                        ))}
                    </ul>
                    <button className="placetender bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600" onClick={placetender}>
                        Submit
                    </button>
                </div>
                <div className='container mt-10' >
                    <p className='place'>Place</p>
                    <p className='text'>Tender....</p>
                </div>
            </div>
        </>
    );
}

export default Placetender;