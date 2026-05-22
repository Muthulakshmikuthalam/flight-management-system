"use client"

import { useEffect,useState } from "react"
import { supabase } from "../../lib/supabase"

import {
Trash2,
RefreshCcw,
BadgeCheck,
XCircle,
Plane
}
from "lucide-react"

type Booking={

id:string
pnr_code:string
seat_no:string
total_price:number
status:string
created_at:string

}

export default function MyBookings(){

const [bookings,setBookings]=
useState<Booking[]>([])

const [loading,setLoading]=
useState(false)


useEffect(()=>{

getBookings()

},[])



async function getBookings(){

setLoading(true)

const {data,error}=await supabase

.from("bookings")

.select("*")

.order(
"created_at",
{ascending:false}
)

setLoading(false)

if(error){

console.log(
"Offline mode:",
error
)

const cached=

localStorage.getItem(
"bookings"
)

if(cached){

setBookings(
JSON.parse(cached)
)

}

return

}


setBookings(data || [])


localStorage.setItem(

"bookings",

JSON.stringify(data)

)

}



async function cancelBooking(

id:string

){

const confirmDelete=

window.confirm(

"Cancel this booking?"

)

if(!confirmDelete)return


const {error}=await supabase

.from("bookings")

.update({

status:"Cancelled"

})

.eq("id",id)


if(error){

alert(
error.message
)

}else{

alert(
"Booking cancelled successfully"
)

getBookings()

}

}



async function rescheduleBooking(

booking:Booking

){

const confirmChange=

window.confirm(

"Reschedule this booking?"

)

if(!confirmChange)return


const bookingTime=

new Date(
booking.created_at
)

const now=

new Date()


const diffHours=

(

bookingTime.getTime()

-

now.getTime()

)

/

(1000*60*60)


if(diffHours<2){

alert(

"Reschedule not allowed within 2 hours"

)

return

}


const {error}=await supabase

.from("bookings")

.update({

status:"Rescheduled"

})

.eq(

"id",

booking.id

)


if(error){

alert(
error.message
)

}else{

alert(
"Flight rescheduled successfully"
)

getBookings()

}

}



return(

<div className="min-h-screen bg-slate-100 p-10">

<h1 className="text-4xl font-black mb-8">

My Bookings

</h1>


{loading&&(

<div className="bg-white p-8 rounded-xl text-center">

Loading...

</div>

)}


<div className="grid gap-5">

{

!loading && bookings.length===0 ?

<div className="bg-white rounded-2xl p-10 text-center shadow">

<Plane
className="mx-auto h-10 w-10 text-slate-300 mb-3"
/>

<h2 className="font-bold text-xl">

No bookings found

</h2>

<p className="text-slate-500">

Book a flight to see it here

</p>

</div>

:

bookings.map((booking)=>(

<div

key={booking.id}

className="bg-white rounded-3xl p-6 shadow"

>

<div className="flex justify-between items-center">

<div>

<h2 className="font-bold text-2xl">

PNR:
{" "}
{booking.pnr_code}

</h2>


<div className="mt-3 space-y-2">

<p>

Seat:
{" "}
{booking.seat_no ||

"Not assigned"}

</p>

<p>

Price:
₹{booking.total_price}

</p>

</div>


<div className="mt-4">

{

booking.status==="Confirmed"&&(

<div className="text-green-600 flex items-center gap-2">

<BadgeCheck size={16}/>

Confirmed

</div>

)

}


{

booking.status==="Rescheduled"&&(

<div className="text-yellow-600 flex items-center gap-2">

<RefreshCcw size={16}/>

Rescheduled

</div>

)

}



{

booking.status==="Cancelled"&&(

<div className="text-red-600 flex items-center gap-2">

<XCircle size={16}/>

Cancelled

</div>

)

}

</div>

</div>


<div className="flex gap-3">


<button

disabled={
booking.status==="Cancelled"
}

onClick={()=>

rescheduleBooking(
booking
)

}

className="bg-yellow-100 px-4 py-3 rounded-xl disabled:opacity-50"

>

<RefreshCcw className="inline h-4 w-4 mr-2"/>

Reschedule

</button>



<button

disabled={
booking.status==="Cancelled"
}

onClick={()=>

cancelBooking(
booking.id
)

}

className="bg-red-100 px-4 py-3 rounded-xl disabled:opacity-50"

>

<Trash2 className="inline h-4 w-4 mr-2"/>

Cancel

</button>

</div>

</div>

</div>

))

}

</div>

</div>

)

}