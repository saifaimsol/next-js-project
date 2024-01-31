"use client";

export default function stdlist({params}){
    console.log(params)
    return(
        <div>
           <h1> Student Details</h1>
           <h3>{params.student}</h3>
        </div>
    )
}