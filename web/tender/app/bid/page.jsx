'use client'
import React, { useEffect, useState } from 'react';
import crypto from 'crypto';
import { ethers } from 'ethers';
import abi from '../tender.json';
import axios from 'axios';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import S3 from "aws-sdk/clients/s3";
const AWS = require('aws-sdk');
import Popup from '../components/popup';

export default function Bid() {
    const [mail, setMail] = useState("gowrishvarma@gmail.com");
    const [file, setFile] = useState(null);
    const [encryptedData, setEncryptedData] = useState(null);
    const [encryptionKey, setEncryptionKey] = useState(143);
    const [checksum, setChecksum] = useState(null);
    const [bid_id, setBid_id] = useState();
    const [cdata, setcdata] = useState({ provider: null, signer: null, contract: null });
    const [account, setAccount] = useState();
    const [tender_id, setTender_id] = useState(143);
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    }

    useEffect(() => {
        const template = async ()=>{
            const contractAddress = "0x74E0E61b6ba2A637b6a022Acf3c5F9078009D8c5";   
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

        const getBidId = async () => {
            try {   
                const res = await axios.get('http://localhost:8000/bidid', {
                    params: {
                        mail: mail
                    }
                });
                // console.log(res.data);
                setBid_id(res.data);
                // console.log("Bid ID:", bid_id);
            } catch (error) {
                console.error("Error getting bid ID:", error);
            }
        };

        template();
        getBidId();
    }, []);


    // AWS.config.update({
    //     accessKeyId: 'jumyqvarzyr6eb36h6ebeluxu24q',
    //     secretAccessKey: 'jzowhzm37ehtarlt6qdyavwpiabfmdtanp4hcscg3x4klgvabekyq',
    //     region: 'https://gateway.storjshare.io'
    //   });
      
      // Function to connect to Amazon S3
      function connectToDStorage() {
        const accessKeyId = "jw2xlterpqlo7gzdb2a4gssnsr2a";
        const secretAccessKey = "jz2md4hzq3wc44rl4yggt3f5kxl5mvpeeooxuqm2t6k7z2lsowlrg";
        const endpoint = "https://gateway.storjshare.io";

        const s3 = new S3({
            accessKeyId,
            secretAccessKey,
            endpoint,
            s3ForcePathStyle: true,
            signatureVersion: "v4",
            connectTimeout: 0,
            httpOptions: { timeout: 0 }
        });
        return s3;
        // return new AWS.S3();
      }

    async function saveToDStorage(encryptedData) {
        try {
            console.log("started")
            const s3 = connectToDStorage();
            console.log("Connected to DStorage");
            const bucketName = 'tender';
            const fileContent = encryptedData;
    
            const params = {
                Bucket: bucketName,
                Key: 'first', // Set key as the file name
                Body: fileContent
            };
            console.log("Uploading to DStorage");
            await s3.upload(params).promise();
            console.log("Saved to DStorage");
        } catch (error) {
            console.error("Error saving to DStorage:", error);
        }
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const addFile = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };

    const removeFile = () => {
        setFile(null);
    };

    const encryptFile = () => {
        console.log(bid_id)
        if (!file) {
            console.error('No file selected');
            return;
        }
        const key = crypto.randomBytes(32);
        const keyBigInt = BigInt('0x' + key.toString('hex'));
        const reader = new FileReader();
        reader.onload = () => {
            const fileBuffer = Buffer.from(reader.result);
            const cipher = crypto.createCipher('aes-256-cbc', key);
            const encryptedData = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);
            setEncryptedData(encryptedData);
            setMail("test@gmail.com")
            setEncryptionKey(keyBigInt.toString()); // Set the encryption key as a BigInt
            console.log("Encrypted file content:", encryptedData);
            console.log("Encryption key:", keyBigInt);
            saveToDStorage(encryptedData);
            // const hash = crypto.createHash('sha256');
            // hash.update(encryptedData);
            // const checksum = hash.digest('hex');
            // setChecksum(checksum);
            // // console.log("Checksum:", checksum);
            // // placeBid();
            // togglePopup();
            // success();
        };
        reader.readAsArrayBuffer(file);
    };

    useEffect(() => {
        if (checksum !== null) {
            placeBid();
        }
    }, [checksum]);

    const placeBid = async () => { 
        console.log("Placing bid");
        try {
            if (!checksum) {
                console.log(checksum)
                console.error('Checksum not set');
                return;
            }
            if (!bid_id) {
                console.error('Bid ID not set');
                return;
            }
            if (!tender_id) {
                console.error('Tender ID not set');
                return;
            }
            if (!cdata.provider) {
                console.error('Provider not set');
                return;
            }
            if (!cdata.signer) {
                console.error('Signer not set');
                return;
            }
            if (!cdata.contract) {
                console.error('Contract not set');
                return;
            }
            const bidData = {
                bid_id: bid_id,
                tender_id: tender_id,
                checksum: checksum,
            };
            console.log("Bid data:", bidData);
            const bid = await cdata.contract.placeBid(tender_id, bid_id, checksum);
            await bid.wait();
            console.log("Bid:", bid);
            console.log("bid placed");
        } catch (error) {
            console.error("Error placing bid:", error);
        }
    };

    const display = () => {
        console.log(encryptionKey);
    }

    const success = async () => {
        const res = await axios.post('http://localhost:8000/success', {
            email : mail,
            tender_id : tender_id,
        });
        console.log(res);
    }

    return (
        <>
            <h1>Place bid</h1>
            <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            <button onClick={addFile}>Add File</button>
            <button onClick={encryptFile}>Encrypt File</button>
            <button onClick={display}>key</button>
            {file &&
                <ul>
                    <li>
                        {file.name}
                        <button onClick={removeFile}>Remove</button>
                    </li>
                </ul>
            }
            <Popup show={showPopup} handleClose={togglePopup} dkey = {encryptionKey}>
                <p>Popup content goes here.</p>
            </Popup>
        </>
    );
}
