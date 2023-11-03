'use server'

export async function createOn(formData) {
  const name = formData.get("name");
  const email = formData.get('email');

  await fetch("http://localhost:3000/api/users/addUser", {
    method: "POST",
    body: JSON.stringify({name,email}),
    headers: {
      "Content-Type": "application/json"
    },
    
  });
  
}