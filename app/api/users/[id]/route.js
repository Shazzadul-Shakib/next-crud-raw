import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } =  params ;
  await connectMongoDB();
  const { newName: name, newEmail: email } = await req.json();
  await users.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({message: 'Updated'});
}

export async function GET(req,{params}) {
  const {id} = params;
  await connectMongoDB();
  const user = await users.findOne({ _id: id });
  return NextResponse.json({ user });
}