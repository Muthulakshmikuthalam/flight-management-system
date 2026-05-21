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
NEXT_PUBLIC_SUPABASE_URL= https://grctabgksgmvqcsrhpvi.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyY3RhYmdrc2dtdnFjc3JocHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTI3NzcsImV4cCI6MjA5NDc2ODc3N30.NS6nBnZMZ-oKpYXaXlBeW3HcNpjO3b927ieu8C6BQg0
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

https://flight-management-system-lyart-eta.vercel.app/

---

## Lighthouse PWA Screenshot

C:\Users\muthu\flight-management\public\img-1.png
## Lighthouse Report

Performance score generated using Chrome Lighthouse.

## PWA Features Implemented

- Installable app
- Offline fallback page
- Cached flight search
- Cached My Bookings
- Manifest configured
- Service worker via next-pwa