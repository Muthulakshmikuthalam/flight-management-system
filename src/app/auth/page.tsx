"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // SIGN UP
  async function signUp() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (!data?.session) {
      alert("Signup successful. Please verify your email before login.");
      router.push("/auth");
      return;
    }

    alert("Signup successful");
    router.push("/dashboard");
  }

  // LOGIN
  async function login() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (!data?.session) {
      alert("Login failed. Invalid session.");
      return;
    }

    alert("Login successful");
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">

      {/* AUTH CARD */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-blue-100">

        <h1 className="text-2xl font-bold mb-6 text-center text-[#0B46CD]">
          Flight Login
        </h1>

        {/* EMAIL */}
        <input
          className="border border-blue-100 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="border border-blue-100 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={signUp}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full font-semibold"
          >
            Sign Up
          </button>

          <button
            onClick={login}
            className="bg-[#0B46CD] hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full font-semibold"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}