// "use client"

// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// type SearchQuery={

// origin:string
// destination:string

// }

// type Passenger={

// name:string
// passport_no:string
// nationality:string

// }

// interface Flight{

// id?:string
// flight_no?:string
// origin?:string
// destination?:string
// price?:number

// }

// interface FlightStore{

// searchQuery:SearchQuery | null

// selectedFlight:Flight | null

// selectedSeat:string

// bookingStep:number

// passengerForm:Passenger


// setSearchQuery:
// (data:SearchQuery)=>void

// setSelectedFlight:
// (data:Flight)=>void

// setSelectedSeat:
// (seat:string)=>void

// setBookingStep:
// (step:number)=>void

// setPassengerForm:
// (data:Passenger)=>void

// resetStore:()=>void

// }

// export const useFlightStore=

// create<FlightStore>()(

// persist(

// (set)=>({

// searchQuery:{

// origin:"",
// destination:""

// },

// selectedFlight:null,

// selectedSeat:"",

// bookingStep:1,

// passengerForm:{

// name:"",
// passport_no:"",
// nationality:""

// },


// setSearchQuery:(data)=>

// set({

// searchQuery:data

// }),


// setSelectedFlight:(data)=>

// set({

// selectedFlight:data

// }),


// setSelectedSeat:(seat)=>

// set({

// selectedSeat:seat

// }),


// setBookingStep:(step)=>

// set({

// bookingStep:step

// }),


// setPassengerForm:(data)=>

// set({

// passengerForm:data

// }),


// resetStore:()=>

// set({

// selectedFlight:null,

// selectedSeat:"",

// searchQuery:{

// origin:"",
// destination:""

// },

// bookingStep:1,

// passengerForm:{

// name:"",
// passport_no:"",
// nationality:""

// }

// })

// }),


// {

// name:"flight-storage",


// partialize:(state)=>({

// searchQuery:
// state.searchQuery,

// selectedFlight:
// state.selectedFlight,

// selectedSeat:
// state.selectedSeat,

// bookingStep:
// state.bookingStep,


// passengerForm:{

// name:
// state.passengerForm.name,

// nationality:
// state.passengerForm.nationality

// }

// })

// }

// )

// )

import { create } from "zustand"
import { persist } from "zustand/middleware"

type SearchQuery = {
  origin: string
  destination: string
}

type Passenger = {
  name: string
  passport_no: string
  nationality: string
}

type Flight = {
  id?: string
  flight_no?: string
  origin?: string
  destination?: string
  base_price?: number
}

interface FlightStore {
  searchQuery: SearchQuery | null

  selectedFlight: Flight | null
  selectedSeat: string | null

  bookingStep: number

  passengerForm: Passenger

  setSearchQuery: (data: SearchQuery) => void
  setSelectedFlight: (data: Flight | null) => void
  setSelectedSeat: (seat: string | null) => void
  setBookingStep: (step: number) => void
  setPassengerForm: (data: Passenger) => void

  resetStore: () => void
}

export const useFlightStore = create<FlightStore>()(
  persist(
    (set) => ({
      searchQuery: null,

      selectedFlight: null,
      selectedSeat: null,

      bookingStep: 1,

      passengerForm: {
        name: "",
        passport_no: "",
        nationality: ""
      },

      setSearchQuery: (data) =>
        set({
          searchQuery: data
        }),

      setSelectedFlight: (data) =>
        set({
          selectedFlight: data
        }),

      setSelectedSeat: (seat) =>
        set({
          selectedSeat: seat
        }),

      setBookingStep: (step) =>
        set({
          bookingStep: step
        }),

      setPassengerForm: (data) =>
        set({
          passengerForm: data
        }),

      resetStore: () =>
        set({
          searchQuery: null,
          selectedFlight: null,
          selectedSeat: null,
          bookingStep: 1,
          passengerForm: {
            name: "",
            passport_no: "",
            nationality: ""
          }
        })
    }),
    {
      name: "flight-storage",

      partialize: (state) => ({
        searchQuery: state.searchQuery,
        selectedFlight: state.selectedFlight,
        selectedSeat: state.selectedSeat,
        bookingStep: state.bookingStep,
        passengerForm: state.passengerForm
      })
    }
  )
)