// 'use client';
// // import abi from './tender.json';
// // import { useState, useEffect } from "react";
// // import { ethers } from "ethers";
// // import login from './signup/page';
// // import {providers} from "ethers";
// // const { providers } = ethers;
// // import './components/take.js';
// // import dynamic from 'next/dynamic';
// import Button from "./components/trys";
// // const take = dynamic(() => import('./components/take.js'), { ssr: false });

// export default function Home() {
// //   const [state, setState] = useState({
// //     provider:null,
// //     signer:null,
// //     contract:null
// //   })

// //   const [account, setAccount] = useState("not seleceted");

// // useEffect(()=>{
// //   const template = async ()=>{
// //     const contractAddress = "0x6704d5F17413D7dB0572a6b8847BEeA47ab5a19c";
// //     const contractABI = abi.abi;
// //     try{
// // const {ethereum} = window;
// //     const account = await ethereum.request({method:"eth_requestAccounts"});
// //     window.ethereum.on('accountsChanged', () => {
// //       window.location.reload();
// //     })
// //     setAccount(account);
// //     const provider = new ethers.BrowserProvider(ethereum);
// //     const signer = await provider.getSigner();
// //     const contract = new ethers.Contract(contractAddress, contractABI, signer);
// //     console.log(contract);
// //     setState({provider,signer,contract});
// //     } catch(error){
// //       console.log(error);
// //     }
// //   }
// //   template();
// // },[])

// // const [id,setid] = useState(0);
// // const [name, setname] = useState("");
// // const [description,setdescription] = useState("");
// // const [time, settime] = useState(0);

// // const placetender = async (e)=>{
// //   e.preventDefault();
// //   const transaction = await state.contract.placeTender(name, description, time);
// //   await transaction.wait();
// //   console.log("transaction mined");
// //   console.log(transaction);
// // }

//   return (
//     <>
//       <div>
//         <Button />
//       </div> 
//     </>
//   );
// }
