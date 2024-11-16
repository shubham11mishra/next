import User from "@/app/lib/modals/user";
import DBconnect from "@/app/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await DBconnect();
    const Users = await User.find();
    return new NextResponse(JSON.stringify(Users), {
      status: 201,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await DBconnect();
    const newUser = new User(body);
    await newUser.save();
    return new NextResponse(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    throw new Error(error);
  }
};

// export const PATCH = async (request: Request) => {
//   try {
//     const body = await request.json();
//     const { _id, username } = body;
//     console.log(_id, username);
    
//     // await DBconnect();
//     // const user = User.findById(body._id);
//     // await user.updateOne(body);
//     return new NextResponse(JSON.stringify({}), { status: 201 });
//   } catch (error) {
//     throw new Error(error);
//   }
// };
