"use client"

import { useFlightStore } from "../../store/flightStore"
import { useState } from "react"

import {
CheckCircle,
Ticket,
User,
ShieldCheck,
PlaneTakeoff,
CalendarDays,
XCircle
}
from "lucide-react"

export default function Confirmation(){

const {

selectedFlight,
selectedSeat,
passengerForm,
resetStore

}=useFlightStore()

const [isProcessing,setIsProcessing]=useState(false)


const pnr=

Math.random()
.toString(36)
.substring(2,8)
.toUpperCase()


async function handleReschedule(){

const confirmAction=

window.confirm(
"Reschedule this booking?"
)

if(!confirmAction) return

setIsProcessing(true)

alert(
"Redirecting for flight reschedule"
)

setIsProcessing(false)

}


async function handleCancel(){

const confirmAction=

window.confirm(
"Cancel this booking?"
)

if(!confirmAction) return

setIsProcessing(true)

resetStore()

alert(
"Booking Cancelled"
)

setIsProcessing(false)

window.location.href="/dashboard"

}



return(

<div

className="min-h-screen w-full flex items-center justify-center p-4 md:p-10 bg-cover bg-center"

style={{

backgroundImage:

`linear-gradient(
to bottom,
rgba(240,249,255,0.2),
rgba(224,242,254,0.4)
),

url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop')`

}}

>


<div className="absolute top-6 left-6 flex items-center gap-2">

<div className="bg-blue-600 p-2 rounded-lg text-white">

<PlaneTakeoff className="h-4 w-4"/>

</div>

<span className="font-bold text-sm">

SkyWay Flights

</span>

</div>



<div className="w-full max-w-lg">

<div className="bg-emerald-600 text-white rounded-t-[28px] p-6 text-center">

<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">

<CheckCircle className="h-6 w-6"/>

</div>

<h1 className="text-2xl font-black mt-3">

Booking Confirmed 🎉

</h1>

<p className="text-xs mt-2">

Your booking is successfully generated

</p>

</div>



<div className="bg-white rounded-b-[28px] p-8 shadow-2xl">


<div className="space-y-6">


<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


<div className="flex gap-3 bg-slate-50 p-4 rounded-xl">

<User className="h-5 w-5 text-slate-500"/>

<div>

<p className="text-xs text-slate-400">

Passenger

</p>

<p className="font-bold">

{passengerForm?.name}

</p>

</div>

</div>



<div className="flex gap-3 bg-slate-50 p-4 rounded-xl">

<Ticket className="h-5 w-5 text-blue-500"/>

<div>

<p className="text-xs text-slate-400">

PNR

</p>

<p className="font-bold">

{pnr}

</p>

</div>

</div>

</div>



<div className="bg-slate-50 p-5 rounded-xl space-y-2">

<p>

Passport:

******

</p>

<p>

Nationality:

{passengerForm?.nationality}

</p>

<p>

Flight:

{selectedFlight?.flight_no}

</p>

<p>

Route:

{selectedFlight?.origin}

→

{selectedFlight?.destination}

</p>

<p>

Seat:

{selectedSeat}

</p>

<p>

Price:

₹{selectedFlight?.price}

</p>

</div>



<div className="border-t pt-5">

<div className="grid sm:grid-cols-2 gap-3">


<button

onClick={handleReschedule}

disabled={isProcessing}

className="bg-white border p-3 rounded-xl font-bold"

>

<CalendarDays className="inline h-4 w-4 mr-2"/>

Reschedule

</button>



<button

onClick={handleCancel}

disabled={isProcessing}

className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl font-bold"

>

<XCircle className="inline h-4 w-4 mr-2"/>

Cancel Booking

</button>


</div>

</div>



<div className="border-t pt-5 flex justify-between">

<div className="flex items-center gap-2 text-slate-400">

<ShieldCheck className="h-4 w-4"/>

<span className="text-xs">

Digital Ticket Generated

</span>

</div>


<button

onClick={()=>window.print()}

className="bg-slate-900 text-white px-4 py-2 rounded-xl"

>

Print Ticket

</button>

</div>

</div>

</div>

</div>

</div>

)

}