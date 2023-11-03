'use client'

import { Update } from "@/actions/update";


const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });
   
    if (!res.ok) {
      throw new Error(`Failed to fetch by id ${id}`);
    } return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function UpdateUser({ params }) {

  const { id } = params;
  const user = await getUserById(id);
  const newUpdate = Update.bind(null, id);

  
  return (
    <main>
      <h1 className=" bg-slate-500 p-5 rounded-md text-2xl text-center">
        Update User
      </h1>
      <form action={newUpdate}>
        <input
          className=" w-2/3 p-5 bg-slate-600 my-5 rounded-md"
          type="text"
          name="name"
          placeholder={user.user.name}
          // value={user.user.name}
        />
        <input
          className=" w-2/3 p-5 bg-slate-600 my-5 rounded-md"
          type="email"
          name="email"
          placeholder={user.user.email}
        />
        <button className=" w-2/3 p-5 bg-slate-600 rounded-md">Update</button>
      </form>
    </main>
  );
}