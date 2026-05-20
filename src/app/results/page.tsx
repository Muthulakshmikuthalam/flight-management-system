"use client"

import { useEffect,useState } from "react"

export default function Results(){

const [flights,setFlights]=useState<any[]>([])

useEffect(()=>{

const data=
localStorage.getItem(
"searchResults"
)

if(data){

setFlights(
JSON.parse(data)
)

}

},[])

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-5">

Available Flights

</h1>

{

flights.map((flight)=>(

<div
key={flight.id}
className="border p-5 mb-5 rounded"
>

<h2 className="font-bold">

{flight.flight_no}

</h2>

<p>

{flight.origin}
→
{flight.destination}

</p>

<p>

Price:
₹{flight.base_price}

</p>

<p>

Duration:
2h 30m

</p>

<select
className="border p-2 mt-2"
>

<option>

Economy

</option>

<option>

Business

</option>

<option>

First Class

</option>

</select>

<a
href="/booking"
className="bg-green-500 text-white p-2 rounded ml-4"
>

Book

</a>

</div>

))

}

</div>

)

}