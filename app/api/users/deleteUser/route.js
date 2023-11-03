import connectMongoDB from "@/lib/mongodb"
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await users.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}