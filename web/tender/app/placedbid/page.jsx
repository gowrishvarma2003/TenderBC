'use client'
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import InputDKeyModal from '../components/get_dkey';
import {ethers} from 'ethers';
import abi from '../tender.json';
import Navbar from "../components/nav";

const placedBidPage = () => {
    const urlParams =  new URLSearchParams(window.location.search);
    const tenderId = urlParams.get('tender_id');
    const router = useRouter();
    const [tender, setTender] = useState(null);
    const [isEndDateFinished, setIsEndDateFinished] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [cdata , setcdata] = useState({provider:null,signer:null,contract:null});
    const [account, setAccount] = useState("not seleceted");

    const [email, setEmail] = useState('gowrishvarma@gmail.com');
    const [bid_id, setBid_id] = useState();
    const [dkey, setdkey] = useState();

    const getTender = async () => {
        const res = await axios.get(`http://localhost:8000/tender/${tenderId}`);
        setTender(res.data);
    }

    useEffect(()=>{
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
                        mail: email
                    }
                });
                // console.log(res.data);
                setBid_id(res.data);
                // console.log("Bid ID:", bid_id);
            } catch (error) {
                console.error("Error getting bid ID:", error);
            }
        };
        getBidId();
        template();
    },[])

    useEffect( () => {
        if(!tenderId){
            router.refresh();
        }
        console.log("Tender ID: ", tenderId);

        getTender();
    }, [tenderId]);

    useEffect(() => {
        if(!tender){
            router.refresh();
        }
        if (tender && tender.enddate) {
            const endDate = new Date(tender.enddate);
            const currentDate = new Date();
            console.log("Current date:", currentDate);
            setIsEndDateFinished(currentDate > endDate);
        }
    }, [tender]);

    console.log("Is end date finished?", isEndDateFinished);

    const handleSubmit = async () => {
        console.log("Submitting bid with decryption key:", dkey);
        setShowModal(false);
        try {
            if(!tenderId){
                console.log("Tender ID not found");
            }
            if(!bid_id){
                console.log("Bid ID not found");
            }
            if(!dkey){
                console.log("Decryption key not found");
            }
            console.log("bid ID:", bid_id);
            const data = {
                tender_id: tenderId,
                bid_id: bid_id,
                dkey: dkey,
            };
            
            const submit = cdata.contract.saveBidDKey(tenderId, bid_id, dkey);
            await submit.wait();
            console.log("Bid DKey saved");
            savedata();
        }
        catch (error) {
            console.error("Error saving bid DKey:", error);
        }
    };

    const savedata = async () => {
        axios.post('http://localhost:8000/savedkey', {tenderId,bid_id})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error saving data:", error);
            });
    }

    return (
        <>
          <Navbar />
          <div className="flex items-center mt-6">
            <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
            <h1 className=" font-bold text-3xl">Congratulations</h1>
            <img src=".\congrats.png" className="size-12 mx-2" alt="" />
            <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
          </div>

          <div className="flex items-center">
            <div className="flex-grow  mx-4"></div>
            <p className="mr-10">Bid placed successfully</p>
            <div className="flex-grow mx-4"></div>
          </div>


          <div className="container mx-auto px-4 py-8">
            {tender ? (
              <div>
                <div className="shadow-lg p-10">
                    <h1 className="text-xl font-bold">Tender ID: {tender.tenderId}</h1>
                    <h2 className="text-lg font-semibold">Title: {tender.title}</h2>
                    <p className="text-gray-700 mb-2">Description: {tender.description}</p>
                    <p className="text-gray-700 mb-2">Email: {tender.email}</p>
                    <p className="text-gray-700 mb-2">Start Date: {tender.startdate}</p>
                    <p className="text-gray-700 mb-2">End Date: {tender.enddate}</p>
                    <div className="mt-4">
                    {tender.files.map((file, index) => (
                        <a key={index} href={`http://localhost:8000/${ file.split('\\').pop()}`} download className="inline-block bg-blue-500 text-white rounded px-2 py-1 mr-2 mb-2">{file}</a>
                    ))}
                    </div>
                </div>
                <div>
                
                    {isEndDateFinished && (
                        <>
                            <div className="flex items-center mt-6">
                                <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
                                <h1 className=" font-bold text-3xl">Please submit dkey</h1>
                                <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
                            </div>
                            <div className="flex mr-40 my-10">
                                <input onChange={(e)=>setdkey(e.target.value)} type="text" className="w-full px-3 py-4 mt-1 ml-40 mr-10 border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md border-gray-300" placeholder="Enter your Decryption key.." />
                                <button onClick={handleSubmit} className="bg-green-500 px-10 rounded-lg">Submit</button>
                             </div>
                        </>
                    )}
                </div>
              </div>

            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      );
    };

export default placedBidPage;