import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    await connectMongoDB();

    console.log("user=", name);
    console.log("email=", email);
    
    await users.create({ name, email} );
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      error,
      { message: "User not created" },
      { status: 201 }
    );
  }
}
