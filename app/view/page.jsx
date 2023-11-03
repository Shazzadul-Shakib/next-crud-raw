'use client'

import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/users/getUser",{ cache: 'no-store' }, {
    method: "GET",
  });
  
  return res.json();
}

export default async function View() {
  const users = await getData(); 

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/users/deleteUser?id=${id}`, {
      method: "DELETE",
    });
  };

  return (
    <main>
      {users.map((user) => (
        <div key={user._id} className="bg-slate-500 p-4 my-3 w-1/3 rounded-md">
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <div className="mt-2">
            <Link href={`/update/${user._id}`} className="bg-red-300 p-1 rounded mx-2">update</Link>
            <button onClick={()=>handleDelete(user._id)} className="bg-red-300 p-1 rounded mx-2">Delete</button>
          </div>
        </div>
      ))}
    </main>
  );
}