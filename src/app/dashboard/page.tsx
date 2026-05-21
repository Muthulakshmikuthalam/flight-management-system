"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Search,
  Armchair,
  BookOpen,
  Bell,
  ChevronDown,
  ArrowLeftRight,
  Calendar,
  Users,
  Plane,
  LogOut
} from "lucide-react";


import { useFlightStore } from "../../store/flightStore";

export default function Dashboard() {

  const { resetStore } = useFlightStore()
  const router = useRouter()

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">

      {/* SIDEBAR */}

      <aside className="w-64 bg-[#0B46CD] text-white flex flex-col justify-between p-4">

        <div>

          {/* LOGO */}

          <div className="flex items-center gap-3 px-2 py-4 mb-6">

            <div className="bg-white/20 p-2 rounded-xl">
              <Plane className="h-6 w-6 rotate-45" />
            </div>

            <div>
              <h1 className="font-bold text-xl">
                SkyWay
              </h1>

              <span className="text-xs text-white/60">
                FLIGHT MANAGEMENT
              </span>
            </div>

          </div>


          {/* NAVIGATION */}

          <nav className="space-y-6">

            <div>

              <span className="text-[10px] text-white/50 px-3">

                MAIN MENU

              </span>

              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/10 mt-2"
              >
                <LayoutDashboard className="h-4 w-4" />

                Home

              </Link>

            </div>


            <div>

              <span className="text-[10px] text-white/50 px-3">

                BOOK FLIGHT

              </span>

              <div className="space-y-1 mt-2">

                <Link
                  href="/search"
                  className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl"
                >

                  <Search className="h-4 w-4" />

                  Search Flight

                </Link>


                <Link
                  href="/seat-selection"
                  className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl"
                >

                  <Armchair className="h-4 w-4" />

                  Seat Selection

                </Link>


                <Link
                  href="/booking"
                  className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl"
                >

                  <BookOpen className="h-4 w-4" />

                  Booking

                </Link>

              </div>

            </div>



            <div>

              <span className="text-[10px] text-white/50 px-3">

                MY TRIPS

              </span>

              <div className="space-y-1 mt-2">

                <Link
                  href="/my-bookings"
                  className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl"
                >

                  <BookOpen className="h-4 w-4" />

                  My Bookings

                </Link>

              </div>

            </div>

          </nav>

        </div>


        {/* LOGOUT BUTTON */}

        <div className="pt-5 border-t border-white/20">

          <button

onClick={() => {

  resetStore()

  localStorage.clear()

  router.push("/")

}}

className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"

>

<LogOut className="h-4 w-4"/>

Logout

</button>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="flex-1 overflow-y-auto">

        {/* TOP HEADER */}

        <header className="bg-white border-b px-8 py-4 flex justify-end items-center">

          <div className="flex items-center gap-5">

            {/* <Bell className="h-5 w-5" /> */}

            <div className="flex items-center gap-2">

              <span className="font-medium">
                MuthulakshmiKuthalam
              </span>

              {/* <ChevronDown className="h-4 w-4" /> */}

            </div>

          </div>

        </header>


        <div className="p-8">

          <h1 className="text-3xl font-bold">

            Welcome Excursionist  👋

          </h1>

          <p className="text-slate-500 mt-2">

            Manage all your flight activities

          </p>



          {/* QUICK ACTIONS */}

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <Link href="/search">

              <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">

                <Search className="h-8 w-8 mb-3 text-blue-600"/>

                <h2 className="font-bold">

                  Search Flights

                </h2>

                <p className="text-slate-500">

                  Find available flights

                </p>

              </div>

            </Link>



            <Link href="/seat-selection">

              <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">

                <Armchair className="h-8 w-8 mb-3 text-green-600"/>

                <h2 className="font-bold">

                  Seat Selection

                </h2>

                <p className="text-slate-500">

                  Choose your seat

                </p>

              </div>

            </Link>



            <Link href="/booking">

              <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">

                <BookOpen className="h-8 w-8 mb-3 text-purple-600"/>

                <h2 className="font-bold">

                  Booking

                </h2>

                <p className="text-slate-500">

                  Add passenger details

                </p>

              </div>

            </Link>



            <Link href="/my-bookings">

              <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">

                <Plane className="h-8 w-8 mb-3 text-red-600"/>

                <h2 className="font-bold">

                  My Bookings

                </h2>

                <p>

                  Manage tickets

                </p>

              </div>

            </Link>

          </div>


          {/* BIG CARD */}

          <Link href="/search">

            <div className="bg-[#092C74] mt-10 rounded-3xl p-8 text-white">

              <div>

                <h2 className="font-bold text-xl">

                  Search Flights

                </h2>

                <p className="text-white/60">

                  Search and book your next trip

                </p>

              </div>


              <div className="grid md:grid-cols-3 gap-4 mt-6">

                <div className="bg-white/10 p-4 rounded-xl">

                  <Calendar className="mb-2"/>

                  Departure

                </div>

                <div className="bg-white/10 p-4 rounded-xl">

                  <Users className="mb-2"/>

                  Passengers

                </div>

                <div className="bg-white/10 p-4 rounded-xl">

                  <ArrowLeftRight className="mb-2"/>

                  Route

                </div>

              </div>

            </div>

          </Link>

        </div>

      </main>

    </div>
  );
}