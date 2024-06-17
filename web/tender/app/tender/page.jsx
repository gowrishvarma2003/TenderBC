'use client';
import { useRouter } from "next/navigation"
import axios from "axios";
import { useEffect,useState } from "react";
import Navbar from "../components/nav";
import Popup from "../components/popup";
import crypto from 'crypto';
import { ethers } from 'ethers';
import abi from '../tender.json';
import {create} from 'ipfs-http-client';


export default function  tender ({tender_id}){
    const router = useRouter();
    const urlParams =  new URLSearchParams(window.location.search);
    const [tenderId, setTenderId] = useState(urlParams.get('tender_id'));
    const [tender, setTender] = useState(null);
    const [mail, setMail] = useState("gowrishvarma@gmail.com");
    const [bid_id, setBid_id] = useState();
    const [encryptionKey, setEncryptionKey] = useState(null);
    const [encryptedData, setEncryptedData] = useState(null);
    const [checksum, setChecksum] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [cdata, setcdata] = useState({ provider: null, signer: null, contract: null });
    const [account, setAccount] = useState();
    const [metadata, setMetadata] = useState(null);
    
    const [file, setFile] = useState(null);

    const ipfs = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
    });

    const saveToIpfs = async (event) => {
      // event.preventDefault();

      if (!file) {
        console.error("No file selected");
        return;
      }
  
      const data = new FormData();
      // data.append("file", encryptedData);
      data.append("file", new Blob([encryptedData], { type: file.type }));

      const metadata = JSON.stringify({
        name: "bid-file",
        keyvalues: {
          tenderID: tenderId,
          bidderID: bid_id,
        }
      });
      data.append("pinataMetadata", metadata);
    
      try {
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
          maxContentLength: "Infinity", // for large files
          headers: {
            pinata_api_key: "18b7b4e4dcfd63c88384",
            pinata_secret_api_key: "e17c9808abcba8f04faa4b782bcd483842055965a8028f4b07d9a600d8146d8b",
            "Content-Type": "multipart/form-data",
          },
        });
    
        const fileUrl = "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash;
        console.log(fileUrl); 
      } catch (error) {
        console.error("Error uploading file to Pinata:", error);
      }
    };


    const RetrieveFile = async() => {
          try {
            const response = await axios.get('https://api.pinata.cloud/data/pinList', {
              headers: {
                pinata_api_key: "18b7b4e4dcfd63c88384",
                pinata_secret_api_key: "e17c9808abcba8f04faa4b782bcd483842055965a8028f4b07d9a600d8146d8b",
                "Content-Type": "multipart/form-data",
              },
              params: {
                status: 'pinned',
                metadata: JSON.stringify({
                  // name: 'bid-file',
                  keyvalues: {
                    tenderID: "1234",
                    bidderID: "123",
                  }
                })
              }
            });
    
            if (response.data.rows.length > 0) {
              setMetadata(response.data.rows[0]);
              console.log(response.data.rows[0]);
              console.log("we got the data")
            } else {
              console.error('No pinned files found with the specified metadata.');
            }
          } catch (error) {
            console.error('Error fetching metadata from Pinata:', error);
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

    useEffect( () => {
      console.log("Reached UseEffect")
      console.log(new Date().getTime());
        if(!tenderId){
            router.refresh();
        }
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
        console.log("Tender ID: ", tenderId);
        template();
        console.log("Tender ID: ", tenderId);
        const getTender = async () => {
          console.log("aiysdgflafisudf");
          const res = await axios.get(`http://localhost:8000/tender/${tenderId}`);
          console.log(res.data)
          setTender(res.data);
          console.log("Tender:", tender)
      };
        getTender(); 
        getBidId();  
    }, [tenderId]);
    console.log(tender)
    console.log("this si mjnsalkhdn")

    const getBidId = async () => {
      try {   
          const res = await axios.get('http://localhost:8000/bidid',{
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

    const currentTime = new Date().getTime();
    const isBiddingAllowed = tender && new Date(tender.startdate).getTime() < currentTime && new Date(tender.enddate).getTime() > currentTime;

      const encryptFile = () => {
        console.log(bid_id)
        if (!file) {
            console.error('No file selected');
            return;
        }
        const key = crypto.randomBytes(32);
        const keyBigInt = BigInt('0x' + key.toString('hex'));
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const fileBuffer = Buffer.from(reader.result);
            const cipher = crypto.createCipher('aes-256-cbc', key);
            const encryptedData = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);
            setEncryptedData(encryptedData);
            setMail("test@gmail.com")
            setEncryptionKey(keyBigInt.toString()); // Set the encryption key as a BigInt
            console.log("Encrypted file content:", encryptedData);
            console.log("Encryption key:", keyBigInt);
            saveToIpfs();
            const hash = crypto.createHash('sha256');
            hash.update(encryptedData);
            const checksum = hash.digest('hex');
            setChecksum(checksum);
            console.log("Checksum:", checksum);
            placeBid();
            success();
            togglePopup();
        };
    };

    useEffect(() => {
      if (checksum !== null) {
          placeBid();
      }
  }, [checksum]);

  const success = async () => {
    const res = await axios.post('http://localhost:8000/success', {
        email : mail,
        tender_id : tender_id,
    });
    console.log(res);
}

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
          if (!tenderId) {
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
              tender_id: tenderId,
              checksum: checksum,
              _dKey: ""
          };
          console.log("Bid data:", bidData);
          const bid = await cdata.contract.placeBid(tenderId, bid_id, "123",  checksum);
          await bid.wait();
          console.log("Bid:", bid);
          console.log("bid placed");
      } catch (error) {
          console.error("Error placing bid:", error);
      }
  };
    
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

      return (
        <>
          <Navbar />
          <div className="container mx-auto p-8">
            {tender ? (
              <>
                <div className="bg-white shadow rounded-lg p-8">
                  <h1 className="text-2xl font-bold mb-4">Tender ID: {tender.tender_id}</h1>
                  <h2 className="text-xl font-semibold mb-2">Title: {tender.title}</h2>
                  <p className="text-gray-700 mb-2">Description: {tender.description}</p>
                  <p className="text-gray-700 mb-2">Email: {tender.email}</p>
                  <p className="text-gray-700 mb-2">Start Date: {tender.startdate}</p>
                  <p className="text-gray-700 mb-2">End Date: {tender.enddate}</p>
                  <div className="flex flex-wrap">
                  {tender.files.map((file, index) => (
                          <a key={index} href={`http://localhost:8000/${ file.split('\\').pop()}`} download className="inline-block bg-blue-500 text-white rounded px-2 py-1 mr-2 mb-2">{file}</a>
                      ))}
                  </div>
                </div>
                { isBiddingAllowed ? (
                  <>
                    <div className="flex items-center mt-6">
                      <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
                      <h1 className=" font-bold text-3xl">Place bid</h1>
                      <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
                    </div>
                    <div>
                      <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                      <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg" onClick={addFile}>Add File</button>
                      <div>
                        {file &&
                            <ul>
                                <li className="mx-1 my-2">
                                    <p className="inline-block bg-blue-500 text-white rounded px-2 py-1 mr-2 mb-2">{file.name}</p>
                                    <button onClick={removeFile}>Remove</button>
                                </li>
                            </ul>
                        }
                      </div>
                      <button className="bg-green-500 px-4 text-white  py-2 rounded-lg " onClick={encryptFile}>Place bid</button>
                      <Popup show={showPopup} handleClose={togglePopup} dkey = {encryptionKey}>
                          <p>Popup content goes here.</p>
                      </Popup>
                    </div>
                  </>
                ):(
                  <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
                    <p className="text-center">Bidding closed</p>
                  </div>
                )
                }
              </>
            ) : (
              <p className="text-gray-700">Loading...</p>
            )}
          </div>
        </>
      );
    }