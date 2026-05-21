# SkyWay Flight Management System ✈️

A Flight Booking and Management web application built with Next.js, Supabase, Zustand and Tailwind CSS.

## Features

- Flight Search
- Seat Selection
- Booking Management
- Reschedule flights
- Cancel flights
- Dashboard
- Offline cached My Bookings
- PWA support
- Install app support
- Responsive design

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Zustand
- next-pwa

---

## Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## Local Setup

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Supabase Configuration

Enable RLS:

- flights
- bookings

Migration:

```txt
supabase/migrations/initial_schema.sql
```

Seed:

```txt
supabase/seed.sql
```

---

## Zustand Store Structure

State includes:

- selectedFlight
- selectedSeat
- passengerDetails

Store reset:

- resetStore()
- localStorage.clear()

Sensitive values excluded from persistence.

---

## Test User

Email:
test@skyway.com

Password:
test123

---

## Production URL

(Add Vercel deployment link here)

---

## Lighthouse PWA Screenshot

(Add screenshot here)