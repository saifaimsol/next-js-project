'use client';
import Link from "next/link";


const login=()=>{
    return(
        <div>
            <h1>login</h1>
            <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/"> go to Home Page</Link>
        </div>
    )
}

export default login;
