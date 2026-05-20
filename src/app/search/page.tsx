"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabase"
import { Search, Calendar, Users } from "lucide-react"

export default function SearchFlightsPage() {

  const router = useRouter()

  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [passengers, setPassengers] = useState(1)

  const [flights, setFlights] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  async function searchFlights() {

    setLoading(true)
    setHasSearched(true)

    const { data, error } = await supabase
      .from("flights")
      .select("*")
      .ilike("origin", `%${origin}%`)
      .ilike("destination", `%${destination}%`)

    setLoading(false)

    // OFFLINE FALLBACK
    if(error){

      console.log(
        "Offline mode:",
        error
      )

      const cached=

      localStorage.getItem(
        "searchResults"
      )

      if(cached){

        const parsed=

        JSON.parse(cached)

        setFlights(parsed)

        router.push("/results")

      }

      return
    }


    setFlights(data || [])


    // SAVE CACHE
    localStorage.setItem(

      "searchResults",

      JSON.stringify(data)

    )


    localStorage.setItem(

      "searchInfo",

      JSON.stringify({

        origin,
        destination,
        date,
        passengers

      })

    )


    router.push("/results")
  }


  return (

    <div className="min-h-screen bg-slate-50">

      <div
        className="relative w-full h-[85vh] flex flex-col justify-center items-center p-6 bg-cover bg-center text-white"
        style={{
          backgroundImage:
          `linear-gradient(to bottom, rgba(11,26,59,0.55), rgba(11,26,59,0.45)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop')`
        }}
      >

        <div className="text-center mb-8">

          <h1 className="text-5xl font-light">

            Discover the World

          </h1>

          <p className="text-white/70 mt-2">

            Find your next adventure

          </p>

        </div>


        <div className="w-full max-w-5xl backdrop-blur-md bg-slate-900/40 rounded-3xl p-6 border border-white/10">

          <div className="grid md:grid-cols-5 gap-3">

            <div className="bg-white/15 p-3 rounded-xl">

              <label className="text-xs block text-blue-200">

                From

              </label>

              <input
                value={origin}
                onChange={(e)=>setOrigin(e.target.value)}
                placeholder="Chennai"
                className="bg-transparent outline-none w-full mt-1"
              />

            </div>



            <div className="bg-white/15 p-3 rounded-xl">

              <label className="text-xs block text-blue-200">

                To

              </label>

              <input
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                placeholder="Delhi"
                className="bg-transparent outline-none w-full mt-1"
              />

            </div>



            <div className="bg-white/15 p-3 rounded-xl">

              <label className="text-xs flex items-center gap-1 text-blue-200">

                <Calendar size={12}/>

                Date

              </label>

              <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="bg-transparent outline-none w-full mt-1"
              />

            </div>



            <div className="bg-white/15 p-3 rounded-xl">

              <label className="text-xs flex items-center gap-1 text-blue-200">

                <Users size={12}/>

                Passengers

              </label>

              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e)=>
                  setPassengers(
                    Number(e.target.value)
                  )
                }
                className="bg-transparent outline-none w-full mt-1"
              />

            </div>



            <button
              onClick={searchFlights}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center gap-2 font-bold"
            >

              <Search size={18}/>

              {loading
                ? "Searching..."
                : "Search"}

            </button>

          </div>

        </div>

      </div>

    </div>

  )
}