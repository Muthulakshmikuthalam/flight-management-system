"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import { useFlightStore } from "../../store/flightStore"
import {
  Armchair,
  ShieldCheck,
  AlertCircle
} from "lucide-react"

export default function SeatSelection() {

  const [seats,setSeats]=useState<any[]>([])

  const {
    selectedSeat,
    setSelectedSeat,
    selectedFlight
  }=useFlightStore()

  useEffect(()=>{

    fetchSeats()

  },[])


  async function fetchSeats(){

    if(!selectedFlight){

      console.log("No flight selected")
      return

    }

    const {data,error}=await supabase

      .from("seats")

      .select("*")

      .eq(
        "flight_id",
        selectedFlight.id
      )

    if(error){

      console.log(error)

    }

    else{

      setSeats(data || [])

    }

  }


  function getSeatByCoordinate(
    rowNum:number,
    letter:string
  ){

    return seats.find(

      (s)=>

      s.seat_number===
      `${rowNum}${letter}`

    )

  }


  const rowNumbers=

  Array.from(
    {length:14},
    (_,i)=>i+1
  )

  const leftGroup=["A","B","C"]

  const rightGroup=["D","E","F"]


  return(

<div className="min-h-screen bg-slate-50 py-10 px-4">

<div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl grid lg:grid-cols-12 overflow-hidden">


<div className="lg:col-span-5 p-8 bg-slate-50">

<div className={`p-4 rounded-2xl mb-8 flex items-center gap-3

${
selectedSeat

?

"bg-emerald-50 text-emerald-700"

:

"bg-amber-50 text-amber-700"

}

`}>

{

selectedSeat

?

<ShieldCheck className="h-5 w-5"/>

:

<AlertCircle className="h-5 w-5"/>

}

<span className="text-xs font-bold">

{

selectedSeat

?

`Seat ${selectedSeat} selected`

:

"No seat selected"

}

</span>

</div>


<h1 className="text-3xl font-black">

Choose Your Seat

</h1>


<p className="text-xs text-slate-500 mt-2">

Flight:

{

selectedFlight
?.flight_no

||

"Not Selected"

}

</p>



<div className="bg-blue-600 text-white rounded-2xl p-5 mt-8">

<div className="text-xs">

Selected Seat

</div>

<div className="text-3xl font-bold">

{

selectedSeat ||

"None"

}

</div>

</div>

</div>



<div className="lg:col-span-7 p-8 bg-slate-100">

<div className="bg-white rounded-[40px] p-6">

<div className="grid grid-cols-7 text-center mb-6 text-xs font-bold text-slate-400">

<div>A</div>
<div>B</div>
<div>C</div>

<div>Row</div>

<div>D</div>
<div>E</div>
<div>F</div>

</div>


<div className="space-y-2 max-h-[60vh] overflow-y-auto">

{

rowNumbers.map(

(rowNum)=>(

<div

key={rowNum}

className="grid grid-cols-7 gap-1 items-center"

>

{

leftGroup.map(

(letter)=>{

const seat=

getSeatByCoordinate(
rowNum,
letter
)

const seatName=
`${rowNum}${letter}`

const isSelected=

selectedSeat===seatName


const isAvailable=

seat

?

seat.is_available

:

true


return(

<button

key={seatName}

disabled={!isAvailable}

onClick={()=>

setSelectedSeat(
seatName
)

}

title={seatName}

className={`

aspect-square
rounded-xl
flex
items-center
justify-center

${

isSelected

?

"bg-blue-600 text-white"

:

isAvailable

?

"bg-emerald-50"

:

"bg-slate-200"

}

`}

>

<Armchair className="h-4 w-4"/>

</button>

)

}

)

}



<div className="text-xs font-bold text-slate-300">

{rowNum}

</div>



{

rightGroup.map(

(letter)=>{

const seat=

getSeatByCoordinate(
rowNum,
letter
)

const seatName=
`${rowNum}${letter}`

const isSelected=

selectedSeat===seatName


const isAvailable=

seat

?

seat.is_available

:

true


return(

<button

key={seatName}

disabled={!isAvailable}

onClick={()=>

setSelectedSeat(
seatName
)

}

title={seatName}

className={`

aspect-square
rounded-xl
flex
items-center
justify-center

${

isSelected

?

"bg-blue-600 text-white"

:

isAvailable

?

"bg-emerald-50"

:

"bg-slate-200"

}

`}

>

<Armchair className="h-4 w-4"/>

</button>

)

}

)

}

</div>

)

)

}

</div>

</div>

</div>

</div>

</div>

)

}