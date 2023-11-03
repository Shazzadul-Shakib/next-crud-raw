'use client'

import { createOn } from "@/actions/create";



export default async function Home() {
  
  return (
    <main>
      <h1 className=" bg-slate-500 p-5 rounded-md text-2xl text-center">
        Create name
      </h1>
      <form action={createOn}>
        <input
          className=" w-2/3 p-5 bg-slate-600 my-5 rounded-md"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className=" w-2/3 p-5 bg-slate-600 my-5 rounded-md"
          type="email"
          name="email"
          placeholder="email"
        />
        <button className=" w-2/3 p-5 bg-slate-600 rounded-md">Create</button>
      </form>
      
    </main>
  );
}