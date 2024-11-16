import { NextResponse } from "next/server";

export const PATCH = async (request: Request) => {
    try {
      const body = await request.json();
      const { _id, username } = body;
      console.log(_id, username);
      
      // await DBconnect();
      // const user = User.findById(body._id);
      // await user.updateOne(body);
      return new NextResponse(JSON.stringify({}), { status: 201 });
    } catch (error) {
      throw new Error(error);
    }
  };
  