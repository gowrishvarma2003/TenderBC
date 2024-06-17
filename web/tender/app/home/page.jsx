'use client'
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import trys from '../components/trys';

const home = ()=>{
    // console.log(email)
    const router = useRouter();
    const [email, setEmail] = useState(null);

    // const { email } = router.query; 
    useEffect(() => {
        // Check if window is defined (executing client-side)
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const emailFromUrl = urlParams.get('email');
            setEmail(emailFromUrl);
        }
    }, []);
    console.log(email);

    const tender = ()=>{
        router.push(`/placetender/?email=${email}`);
    }
    return(
        <>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <button onClick={tender}>PlaceTender</button>
            <trys/>
        </>
    )
}

export default home