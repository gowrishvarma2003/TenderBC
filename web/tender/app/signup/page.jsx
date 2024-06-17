'use client';
import {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [contact, setContact] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [established, setEstablished] = useState('');
    const [password, setPassword] = useState('');

    const sendDataToServer = async (dataToSend) => {
        try {
          const response = await axios.post('http://localhost:8000/user/', dataToSend);
          console.log(response);
          console.log(response.data.jwt);
          if (response.data.jwt) {
            document.cookie = `jwt=${response.data.jwt}; max-age=${response.data.maxAge}; path=/`;
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

    const save = (e) => {
        e.preventDefault();
        console.log(name, email, contact, pincode, city, state, country, established, password);
        const dataToSend = {
            name: name,
            email: email,
            contact: contact,
            address: {
                pincode: pincode,
                city: city,
                state: state,
                country: country
            },
            established: established,
            password: password
          };
        sendDataToServer(dataToSend);
    };
    
    return (
        <>
            <div className='flex'>
              <div className='w-6/12 h-screen'>
                  <div className='pl-10 pt-10'>
                    <h1 className="text-blue-500 text-xl font-serif">TenderBC</h1>
                  </div>
                  <div className='m-auto px-24 pt-6'>
                  <h2 className='font-bold pb-4'>Please register your compeany</h2>
                    <form onSubmit={save}>
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="name" placeholder="Company Name" onChange={(e)=>setName(e.target.value)} /> <br />
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/> <br />
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="contact" placeholder="Contactnumber" onChange={(e)=>setContact(e.target.value)}/> <br />
                        <h2>Address</h2>
                        <div className='flex'>
                          <input className="border-2 pr-auto py-1 pl-2 mr-7  rounded mb-4 shadow-md focus:outline-blue-600" type="pincode" placeholder="pincode" onChange={(e)=>setPincode(e.target.value)}/>
                          <input className="border-2 pr-auto py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="city" placeholder="City" onChange={(e)=>setCity(e.target.value)}/> <br />
                        </div>
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="state" placeholder="State" onChange={(e)=>setState(e.target.value)}/>
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="country" placeholder="Country" onChange={(e)=>setContact(e.target.value)}/> <br />
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="established" placeholder="Established Year" onChange={(e)=>setEstablished(e.target.value)}/> <br />
                        <input className="border-2 pr-64 py-1 pl-2  rounded mb-4 shadow-md focus:outline-blue-600" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> <br />
                        <button className="bg-blue px-52 py-1 mt-4  bg-blue-500 text-white rounded-md ">Register</button>
                    </form>
                      <h2 className="flex justify-center first-letter mt-6 mr-12 text-sm text-gray-500">If you already had an account <span> <a className="text-blue-700 pl-2 font-medium cursor-pointer"> Sign Up</a></span></h2>
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

export default signup;