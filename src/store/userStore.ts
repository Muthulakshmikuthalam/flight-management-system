// import {create} from "zustand"
// import {persist} from "zustand/middleware"

// type Booking={

// id:string
// pnr_code:string
// seat_no:string
// total_price:number
// status:string

// }

// interface UserStore{

// session:string|null

// bookings:Booking[]

// setSession:(data:string)=>void

// setBookings:(data:Booking[])=>void

// reset:()=>void

// }

// export const useUserStore=

// create<UserStore>()(

// persist(

// (set)=>({

// session:null,

// bookings:[],

// setSession:(data)=>
// set({session:data}),

// setBookings:(data)=>
// set({bookings:data}),

// reset:()=>
// set({

// session:null,

// bookings:[]

// })

// }),

// {

// name:"user-store",

// partialize:(state)=>({

// session:state.session

// })

// }

// )

// )

import { create } from "zustand"
import { persist } from "zustand/middleware"

type Booking = {
  id: string
  pnr_code: string
  seat_no: string
  total_price: number
  status: string
}

interface UserStore {
  session: string | null
  bookings: Booking[]

  setSession: (data: string | null) => void
  setBookings: (data: Booking[]) => void
  reset: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      session: null,
      bookings: [],

      setSession: (data) => set({ session: data }),

      setBookings: (data) => set({ bookings: data }),

      reset: () =>
        set({
          session: null,
          bookings: []
        })
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        session: state.session
      })
    }
  )
)