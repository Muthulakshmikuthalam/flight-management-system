"use client"

import {create} from "zustand"
import {persist} from "zustand/middleware"

interface FlightStore{

searchQuery:any
selectedFlight:any
selectedSeat:string
bookingStep:number
passengerForm:any

setSearchQuery:(data:any)=>void
setSelectedFlight:(data:any)=>void
setSelectedSeat:(seat:string)=>void
setBookingStep:(step:number)=>void
setPassengerForm:(data:any)=>void

resetStore:()=>void

}

export const useFlightStore=

create<FlightStore>()(

persist(

(set)=>({

searchQuery:null,

selectedFlight:null,

selectedSeat:"",

bookingStep:1,

passengerForm:{},


setSearchQuery:(data)=>

set({

searchQuery:data

}),


setSelectedFlight:(data)=>

set({

selectedFlight:data

}),


setSelectedSeat:(seat)=>

set({

selectedSeat:seat

}),


setBookingStep:(step)=>

set({

bookingStep:step

}),


setPassengerForm:(data)=>

set({

passengerForm:data

}),


resetStore:()=>set({
selectedFlight:null,
selectedSeat:"",
passengerForm:{},
searchQuery:null,
bookingStep:1
})

}),


{

name:"flight-storage",

partialize:(state)=>({
searchQuery:state.searchQuery,
selectedFlight:state.selectedFlight,
selectedSeat:state.selectedSeat,
bookingStep:state.bookingStep,

passengerForm:{
name:state.passengerForm.name,
nationality:
state.passengerForm.nationality
}

})

}

)

)