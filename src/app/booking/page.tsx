"use client"

import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabase"
import { useFlightStore } from "../../store/flightStore"

import {
User,
Globe,
Landmark,
ShieldCheck
}
from "lucide-react"

export default function Booking(){

const router=useRouter()

const {

passengerForm,
setPassengerForm,

selectedSeat,
selectedFlight,

setBookingStep

}=useFlightStore()

const [name,setName]=useState("")
const [passport,setPassport]=useState("")
const [nationality,setNationality]=useState("")
const [isSubmitting,setIsSubmitting]=useState(false)


useEffect(()=>{

if(passengerForm){

setName(
passengerForm.name || ""
)

setNationality(
passengerForm.nationality || ""
)

}

},[passengerForm])



async function saveBooking(){

if(
!name||
!passport||
!nationality
){

alert(
"Fill all details"
)

return

}

setIsSubmitting(true)

const pnr=

"PNR"+

Math.floor(

100000+

Math.random()*900000

)


setPassengerForm({

name:name,
passport_no:passport,
nationality:nationality

})

setBookingStep(3)


const {error}=await supabase

.from("bookings")

.insert([{

status:"Confirmed",

total_price:
selectedFlight?.price || 5000,

pnr_code:pnr,

seat_no:selectedSeat,

passenger_name:name

}])


setIsSubmitting(false)


if(error){

alert(
error.message
)

return

}


router.push(

`/confirmation?pnr=${pnr}`

)

}



return(

<div

className="min-h-screen w-full flex items-center justify-center p-4 md:p-10 bg-cover bg-center"

style={{

backgroundImage:

`linear-gradient(
to bottom,
rgba(224,242,254,0.4),
rgba(224,242,254,0.2)
),

url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop')`

}}

>

<div className="w-full max-w-md backdrop-blur-xl bg-white/75 rounded-3xl p-8 shadow-2xl">

<div className="text-center mb-6">

<div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto">

<ShieldCheck className="h-6 w-6 text-blue-600"/>

</div>

<h1 className="text-2xl font-black mt-3">

Passenger Details

</h1>

</div>


<div className="space-y-4">

<div className="relative">

<User className="absolute left-3 top-4 h-4 w-4 text-slate-400"/>

<input

value={name}

onChange={(e)=>

setName(
e.target.value
)

}

placeholder="Full Name"

className="w-full border rounded-xl py-3 pl-10"

/>

</div>


<div className="relative">

<Landmark className="absolute left-3 top-4 h-4 w-4 text-slate-400"/>

<input

value={passport}

onChange={(e)=>

setPassport(
e.target.value
)

}

placeholder="Passport"

className="w-full border rounded-xl py-3 pl-10"

/>

</div>


<div className="relative">

<Globe className="absolute left-3 top-4 h-4 w-4 text-slate-400"/>

<input

value={nationality}

onChange={(e)=>

setNationality(
e.target.value
)

}

placeholder="Nationality"

className="w-full border rounded-xl py-3 pl-10"

/>

</div>

</div>


<div className="bg-slate-100 p-4 rounded-xl mt-6">

<p>

Flight:

{selectedFlight?.flight_no}

</p>

<p>

Seat:

{selectedSeat || "None"}

</p>

<p>

Price:

₹{selectedFlight?.price}

</p>

</div>


<button

onClick={saveBooking}

disabled={isSubmitting}

className="w-full bg-blue-600 text-white rounded-xl py-3 mt-6"

>

{

isSubmitting

?

"Booking..."

:

"Confirm Booking"

}

</button>

</div>

</div>

)

}

