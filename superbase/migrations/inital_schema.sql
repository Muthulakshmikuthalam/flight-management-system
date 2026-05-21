-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Flights table
create table if not exists flights(
 id uuid primary key default gen_random_uuid(),

 flight_no text not null,

 origin text not null,

 destination text not null,

 price int not null
);

-- Bookings table
create table if not exists bookings(
 id uuid primary key default gen_random_uuid(),

 pnr_code text,

 seat_no text,

 total_price int,

 status text default 'Confirmed',

 created_at timestamp default now()
);