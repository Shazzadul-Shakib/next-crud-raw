'use server'
export async function Update(id, formData) {
  const newName = await formData.get('name');
  const newEmail = await formData.get('email');
  console.log(id, newName, newEmail);
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ newName, newEmail }),
      headers: {
        "Content-Type": "application/json"
      },
    })
  }