
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Page() {
    // Use state to store the fetched data
    const [data, setData] = useState(null);
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace "YOUR_API_ENDPOINT" with the actual URL of your API
                const response = await fetch("https://dummyjson.com/products");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                console.log(result);
            
                setProduct(result.products)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // The empty dependency array ensures that the effect runs once when the component mounts

    return (
     <>
        <h1 className='text-center text-4xl text-teal-900 m-10'>Product List</h1>
        <div className='flex justify-between flex-wrap gap-6' >
            
            {product.map((item) => (
                <div key={item.id} className='flex  flex-col items-center  w-full max-w-96 m-auto  bg-slate-200 rounded-md py-8 hover:bg-red-50 cursor-pointer'>
                 <p className=' text-lg text-gray-500 font-semibold'>{item.title}</p>
                <img src={item.images[0]} width={400} height={500}  className='w-full max-w-52 rounded-sm gap-4 py-4'/>
                </div>
            ))
            }
        </div>
     </>
    );
}
