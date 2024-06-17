'use client'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/nav';

const mybids = () => {
    const [email, setEmail] = useState("gowrishvarma@gmail.com");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/mybids', {
                    params: {
                        email: email
                    }
                });
                setData(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        
    }, [email]);
    return (
        <>
          <Navbar />
          <div class="flex items-center mx-40 mt-10 mb-10">
            <h1 className='text-3xl font-bold'>My bids</h1>
            <div class="flex-grow border-t-2 border-gray-300 mx-4"></div>
          </div>
          <div className="mx-40 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {data.map((bid, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <h1 className='mb-2'><span className='font-bold'>Tender id: </span>{bid.tender_id}</h1>
                  <h2 className="text-xl mb-2"><span className='font-bold'>Title: </span>{bid.title}</h2>
                  <p className="mb-4"><span className='font-bold'>Description:</span>{bid.description}</p>
                  <p className="mb-4"><span className='font-bold'>Email:</span> {bid.email}</p>
                  <div className="flex flex-wrap">
                  <Link href={{ pathname: '/placedbid', query: {tender_id:bid.tender_id} }} passHref>
                      <div className="bg-blue-500 text-white rounded px-2 py-1 mr-2 mb-2 cursor-pointer">
                      View Tender
                      </div>
                  </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

export default mybids;