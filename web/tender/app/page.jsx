'use client';
import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './styles.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from './components/nav';

export default function Home() {

  const [alltenders, setalltenders] = useState([{tender_id:'',title:'',description:'',files:[],email:'',startdate:'',starttime:'',enddate:'',endtime:''}]);
  const router = useRouter();

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

  useEffect(() => {
    const token = getCookie('jwt');
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/alltenders', {
          params: { token },
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.length === 0) {
          console.log('No tenders found');
        } else {
          setalltenders(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if(error.response.status === 400){
          router.push('/login');
        }
      }
    };
    fetchData();
  }, []);

  const handleViewTender = (tenderId) => {
    router.push({
      pathname: '/tender',
      query: { tender_id: tenderId }
    });
  };

  const currentDate = new Date();

  const filteredPastTenders = alltenders.filter(tender => new Date(tender.enddate) < currentDate);
  const filteredOngoingTenders = alltenders.filter(tender => new Date(tender.startdate) <= currentDate && new Date(tender.enddate) >= currentDate);
  const filteredUpcomingTenders = alltenders.filter(tender => new Date(tender.startdate) > currentDate);

  return (
    <>
      <Navbar />
      <div className="flex items-center mx-40 mt-10">
        <h1 className='text-3xl font-bold'>Ongoing</h1>
        <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
        <h1 className='px-10 border-2 py-2 rounded-lg border-blue-500 bg-blue-200 hover:bg-blue-300 cursor-pointer text-blue-800'>ALL ongoing tenders <span class="ml-2"></span> &gt; </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-4 lg:grid-cols-2 gap-10 h-full mx-40 mt-10 rounded-2xl h-full overflow-auto">
        {filteredOngoingTenders.map((tender, index) => (
          <div key={index} className="bg-white rounded shadow drop-shadow-lg rounded-2xl hover:border-blue-500 border-2">
            <div className="flex mb-2 p-4">
              <h1 className="size-4 mr-16 font-bold" style={{ display: 'inline-block' }}>TenderID:</h1>
              <h1 className="size-4" style={{ display: 'inline-block' }}>{tender.tender_id}</h1>
            </div>
            <div className='bg-gray-50 p-4 m-0 rounded-b-2xl'>
              <h1 className="text-xl"><span className='font-bold'>Title:</span> {tender.title}</h1>
              <p className="-600 mb-2"><span className='font-bold'>Description: </span>{tender.description}</p>
              <p className=" mb-2"><span className='font-bold'>Mail: </span>{tender.email}</p>
              <div className='flex'>
                {/* <p className='w-auto p-3 bg-gray-200 rounded-lg mr-2'>Start date{tender.startdate}</p> */}
                <p className='w-auto p-3 bg-gray-200 rounded-lg'>End Date: {tender.enddate}</p>
                <Link href={{ pathname: '/tender', query: { tender_id: tender.tender_id } }} passHref>
                  <div className="bg-green-500 text-white rounded-lg px-4 py-2  mt-1 ml-20  w-auto  cursor-pointer flex items-center justify-center">
                    <span className="text-sm">View Tender</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>  
      <div className="flex items-center mx-40 mt-10">
        <h1 className='text-3xl font-bold'>Upcoming</h1>
        <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
        <h1 className='px-10 border-2 py-2 rounded-lg border-blue-500 bg-blue-200 hover:bg-blue-300 cursor-pointer text-blue-800'>ALL Upcoming tenders <span class="ml-2"></span> &gt; </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 h-full mx-40 mt-10 rounded-2xl h-full overflow-auto ">
        {filteredUpcomingTenders.map((tender, index) => (
          <div key={index} className="bg-white rounded shadow drop-shadow-lg rounded-2xl hover:border-blue-500 border-2">
            <div className="flex mb-2 p-4">
              <h1 className="size-4 mr-16" style={{ display: 'inline-block' }}>TenderID:</h1>
              <h1 className="size-4" style={{ display: 'inline-block' }}>{tender.tender_id}</h1>
            </div>
            <div className='bg-gray-50 p-4 m-0 rounded-b-2xl'>
              <h1 className="text-xl font-bold">Title: {tender.title}</h1>
              <p className="text-gray-600 mb-2"> Description:{tender.description}</p>
              <p className="text-gray-500 mb-2">{tender.email}</p>
              <div className='flex'>
                {/* <p className='w-auto p-3 bg-gray-200 rounded-lg mr-2'>Start date{tender.startdate}</p> */}
                <p className='w-auto p-3 bg-gray-200 rounded-lg'>startdate Date: {tender.startdate}</p>
                <Link href={{ pathname: '/tender', query: { tender_id: tender.tender_id } }} passHref>
                  <div className="bg-green-500 text-white rounded-lg px-4 py-2  mt-1 ml-20  w-auto  cursor-pointer flex items-center justify-center">
                    <span className="text-sm">View Tender</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> 
      <div className="flex items-center mx-40 mt-10">
        <h1 className='text-3xl font-bold'>Past</h1>
        <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
        <h1 className='px-10 border-2 py-2 rounded-lg border-blue-500 bg-blue-200 hover:bg-blue-300 cursor-pointer text-blue-800'>ALL past tenders <span class="ml-2"></span> &gt; </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 h-full mx-40 mt-10 rounded-2xl h-full pb-10 overflow-auto">
        {filteredPastTenders.map((tender, index) => (
          <div key={index} className="bg-white rounded shadow drop-shadow-lg rounded-2xl hover:border-blue-500 border-2">
            <div className="flex mb-2 p-4">
              <h1 className="size-4 mr-16" style={{ display: 'inline-block' }}>TenderID:</h1>
              <h1 className="size-4" style={{ display: 'inline-block' }}>{tender.tender_id}</h1>
            </div>
            <div className='bg-gray-50 p-4 m-0 rounded-b-2xl'>
              <h1 className="text-xl font-bold">Title: {tender.title}</h1>
              <p className="text-gray-600 mb-2"> Description:{tender.description}</p>
              <p className="text-gray-500 mb-2">{tender.email}</p>
              <div className='flex'>
                {/* <p className='w-auto p-3 bg-gray-200 rounded-lg mr-2'>Start date{tender.startdate}</p> */}
                <p className='w-auto p-3 bg-gray-200 rounded-lg'>Ended on: {tender.enddate}</p>
                <Link href={{ pathname: '/tender', query: { tender_id: tender.tender_id } }} passHref>
                  <div className="bg-green-500 text-white rounded-lg px-4 py-2  mt-1 ml-20  w-auto  cursor-pointer flex items-center justify-center">
                    <span className="text-sm">View Tender</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}    